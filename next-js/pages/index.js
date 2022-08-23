import App from "../componets/App";
import { getSession } from "next-auth/react";
import clientPromise from "../util/mongodb";

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);
    // fetch
    const client = await clientPromise;
    const db = client.db("basic-todo-app");
    const key = session.user.email;
    // fetch the posts
    let todos = await db.collection("todos").findOne({ key: key });

    let todolist = (todos && JSON.parse(JSON.stringify(todos))) || {
      todo_list: [],
    };
    return {
      props: { todo: todolist },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        todo: {
          todo_list: [],
        },
      },
    };
  }
}

const Home = ({ todo }) => {
  return <App todo={todo} />;
};

export default Home;
