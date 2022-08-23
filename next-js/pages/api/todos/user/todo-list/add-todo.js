import clientPromise from "../../../../../util/mongodb";

export default async function handler(req, res) {
  // fetch
  const client = await clientPromise;
  const db = client.db("basic-todo-app");
  // Take user input
  const { title } = req.body;
  // Insert a document into the collection
  const response = db.collection("todos").insertOne({
    title,
    completed: false,
    createdAt: new Date(),
  });
  // Send a response
  res.status(200).json({
    data: await db.collection("todos").findOne({ id: response.insertedId }),
    message: "Todo added successfully",
  });
}
