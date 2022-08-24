import clientPromise from "../../../../../../util/mongodb";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  const userId = {
    _id: ObjectId("63042b9d9509236979dddd5f"),
  };
  const projection = {
    todo_list: 1,
    _id: 0,
  };  
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  // fetch the posts
  let todo = await db.collection("todos").find(userId, {projection}).toArray();

  return res.json({
    message: todo, // JSON.parse(JSON.stringify(id)),
    success: true,
  });
};

export default handler;
