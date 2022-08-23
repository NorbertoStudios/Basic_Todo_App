import clientPromise from "../../../../../util/mongodb";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  const userId = ObjectId("63042b9d9509236979dddd5f");
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  // fetch the posts
  let todo = await db.collection("todos").findOne({ _id: userId });

  return res.json({
    message: todo.todo_list, // JSON.parse(JSON.stringify(id)),
    success: true,
  });
};

export default handler;
