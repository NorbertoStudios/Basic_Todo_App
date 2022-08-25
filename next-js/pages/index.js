import App from "../componets/App";
// import { getSession } from "next-auth/react";
// import clientPromise from "../util/mongodb";

// export async function getServerSideProps(context) {
//   try {
//     // const session = await getSession(context);

//     // fetch
//     const client = await clientPromise;
//     const db = client.db("basic-todo-app");
//     // const email = session.user.email;
//     const email = "norbertostudios@gmail.com";

//     // fetch the posts
//     let todos = await db.collection("todos").findOne({ email: email });


//     let todolist = (todos && JSON.parse(JSON.stringify(todos))) || {
//       todo_list: [],
//     };
//     return {
//       props: { todos: todolist },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: {
//         todos: {
//           todo_list: [],
//         },
//       },
//     };
//   }
// }

const Home = () => {
  return <App />;
};

export default Home;
