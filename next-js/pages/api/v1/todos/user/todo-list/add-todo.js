import clientPromise from "../../../../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const mocktodo = {
    todo_list: {
      name: "banana223",
      description: "",
      completed: false,
      id: "523",
      createdAt: new Date(),
    },
  };

  if (!req.query.todo) {
    return res.status(400).send("todo parameter required.");
  }

  let todo = Buffer.from(req.query.todo, "base64").toString();

  // fetch
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  const userId = {
    _id: ObjectId("63042b9d9509236979dddd5f"),
  };
  let projection = {
    $push: { todo_list: JSON.parse(todo) },
  };

  const response = await db.collection("todos").updateOne(userId, projection);

  //   // Insert a document into the collection
  //   const response = db.collection("todos").updateOne({
  //     userId,
  // projection
  //     // title,
  //     // completed: false,
  //     // createdAt: new Date(),
  //   });
  // Send a response
  res.status(200).json({
    // data: response,
    data: await db.collection("todos").findOne({ id: response.insertedId }),
    message: "Todo added successfully",
  });
}
