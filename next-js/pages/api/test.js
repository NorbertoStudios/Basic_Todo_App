import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  try {
    // connect to the database
    let { db } = await connectToDatabase();

    // fetch the posts
    let user = await db
      .collection("todos")
      .find()
      .toArray();

    // return the posts
    return res.json(
        {
      message: JSON.parse(JSON.stringify(user)),
      success: true,
    }
    );
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }

};
