
import clientPromise from "../../../../util/mongodb";

const index = async (req, res) => {
      try {
        // fetch
        const client = await clientPromise;
        const db = client.db("basic-todo-app");
        // fetch the posts
        let todos = await db.collection("todos").find({}).toArray();

        return res.json({
          message: JSON.parse(JSON.stringify(todos)),
          success: true,
          status: 200
        });
      } catch (error) {
        // return the error
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
}

export default index;
