// import { ObjectId } from "mongodb";
// import { connectToDatabase } from "../../libs/mongodb";

// export default async function handler(req, res) {
//   const { db } = await connectToDatabase();
//   // Update Todo Data
//   const { title, completed, id } = req.body;
//   // Update the todo with the given id
//   await db.collection("todos").updateOne(
//     { _id: ObjectId(id) },
//     {
//       $set: {
//         title,
//         completed,
//       },
//     }
//   );
//   // Send a response
//   res.status(200).json({
//     data: await db.collection("todos").findOne({ _id: ObjectId(id) }),
//     message: "Todo updated successfully",
//   });
// }

import clientPromise from "../../../../util/mongodb";
import { BASE64_REGEX } from "../../../../constant/constants";

const handler = async (req, res) => {
  if (!req.body || !BASE64_REGEX.test(req.body)) {
    return res.status(400).send("body is required. And must be encoded");
  }

  if (req.method !== "PATCH") {
    res.status(405).send({ message: "requests allowed" });
    return;
  }

  const decodeData = Buffer.from(req.body, "base64").toString();

  const { id, email, completed } = JSON.parse(decodeData);
  console.log(id, email);
  // fetch
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  const userId = {
    // "todo_list.id": id,
    "user.email": email,
    // grades: { $elemMatch: { grade: { $lte: 90 }, mean: { $gt: 80 } } }
    todo_list: { $elemMatch: { id: id },}
    
  };
  let projection = {
    $set: {"todo_list.$.completed": completed },
    }

  //  Insert a document into the collection
  const response = await db
    .collection("todos")
    .updateOne(userId, projection)
  // console.log(response);
  // Send a response
  res.status(200).json({
    // data: await db.collection("todos").findOne({ id: response.insertedId }),
    data: response,
    message: "Updated successfully",
  });
};

export default handler;
