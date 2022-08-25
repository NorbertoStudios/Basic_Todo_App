import clientPromise from "../../../../util/mongodb";
import { BASE64_REGEX } from "../../../../constant/constants";

const handler = async (req, res) => {
  if (!req.body || !BASE64_REGEX.test(req.body)) {
    return res.status(400).send("body is required. And must be encoded");
  }

  if (req.method !== "POST") {
    res.status(405).send({ message: "requests allowed" });
    return;
  }
  
  const decodeData = Buffer.from(req.body, "base64").toString();

  const { todo, email } = JSON.parse(decodeData);

  // fetch
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  const userId = {
    "user.email": email,
  };
  let projection = {
    $push: { todo_list: {
     $each: [todo],
     $position: 0
    } },
  };

  //  Insert a document into the collection
  const response = await db.collection("todos").updateOne(userId, projection);

  // Send a response
  res.status(200).json({
    // data: await db.collection("todos").findOne({ id: response.insertedId }),
    data: response,
    message: "Added successfully",
  });
};

export default handler;