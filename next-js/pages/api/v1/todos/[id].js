import clientPromise from "../../../../util/mongodb";

const handler = async (req, res) => {

  const { query } = req;
  const { id } = query;

  const userId = {
    "todo_list.id": id,
    "user.email": "norbertostudios@gmail.com",
  };
  const projection = {
    todo_list: {
      $elemMatch: {
        id: id,
      },
    },
    _id: false,
  };
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  // fetch the posts
  const todolist = await db
    .collection("todos")
    .find(userId, { projection })
    .toArray();

  // User with id exists
  return res.json({
    message: todolist, // JSON.parse(JSON.stringify(id)),
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
