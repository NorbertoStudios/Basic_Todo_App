import clientPromise from "../../../../../util/mongodb";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {

  // const data
  // fetch("http://example.com/movies.json")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  const { query } = req;
  const { id } = query;
  // let o_id = ObjectId(id)
  //  const filtered = people.filter((p) => p.id === id);
const userId = ObjectId('63042b9d9509236979dddd5f');
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  // fetch the posts
  let todo = await db.collection("todos").find({ _id: userId }).toArray();
  

  // User with id exists
  return res.json({
    message: todo, // JSON.parse(JSON.stringify(id)),
    success: true,
  });

  //  filtered.length > 0
  //    ? res.status(200).json(filtered[0])
  //    : res.status(404).json({ message: `User with id: ${id} not found.` });
  //   try {
  //     // fetch
  //     const client = await clientPromise;
  //     const db = client.db("basic-todo-app");
  //     // fetch the posts
  //     let todos = await db.collection("todos").find({key: req.query.key}).toArray();

  //     return res.json({
  //       message: JSON.parse(JSON.stringify(todos)),
  //       success: true,
  //     });
  //   } catch (error) {
  //     // return the error
  //     return res.json({
  //       message: new Error(error).message,
  //       success: false,
  //     });
  //   }
};

export default handler;
