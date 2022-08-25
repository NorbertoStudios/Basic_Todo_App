
import clientPromise from "../../../../util/mongodb";

const index = async (req, res) => {
      try {
        // fetch
        const client = await clientPromise;
        const db = client.db("basic-todo-app");
        
          const userId = {
            "user.email": "norbertostudios@gmail.com",
          };

        // fetch the posts
        let todos = await db.collection("todos").find(userId).toArray();

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
