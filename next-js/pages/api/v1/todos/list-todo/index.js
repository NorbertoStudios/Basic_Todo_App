import clientPromise from "../../../../../util/mongodb";

const handler = async (req, res) => {
  const userId = {
    "user.email": "norbertostudios@gmail.com",
  };
  const projection = {
    todo_list: 1,
    _id: 0,
  };  
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  // fetch the posts
  let todo = await db
    .collection("todos")
    .find(userId, { projection })
    .toArray();

  return res.json({
    todo_list: todo[0].todo_list, 
    success: true,
  });
};

export default handler;
