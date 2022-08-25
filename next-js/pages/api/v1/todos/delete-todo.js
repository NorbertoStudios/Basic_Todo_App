import clientPromise from "../../../../util/mongodb";
import { BASE64_REGEX } from "../../../../constant/constants";

const handler = async (req, res) => {
  if (!req.body || !BASE64_REGEX.test(req.body)) {
    return res.status(400).send("body is required. And must be encoded");
  }

  if (req.method !== "DELETE") {
    res.status(405).send({ message: "requests allowed" });
    return;
  }

  const decodeData = Buffer.from(req.body, "base64").toString();

  const { id, email } = JSON.parse(decodeData);

  // fetch
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  const userId = {
    "user.email": email,
  };
  const projection = {
    $pull: {
      todo_list: {
        id: id,
      },
    },
  };

  //  Delete a todo from the todo list array
  const response = await db.collection("todos").update(userId, projection);

  // Send a response
  res.status(200).json({
    data: response,
    message: "Todo deleted successfully",
  });
};

export default handler;
