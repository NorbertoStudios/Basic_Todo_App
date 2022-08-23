import App from "../componets/App";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/firebaseClient";


import clientPromise from "../util/mongodb";

export async function getServerSideProps(context) {
  try {
    // let { db } = await connectToDatabase();
    // await clientPromise
    const client = await clientPromise;
    const db = client.db("basic-todo-app");

   // fetch the posts
   let user = await db
     .collection("todos")
     .findOne({ key: "test_norbertostudios@gmail.com" })
   
  //  console.log(user[0]['todo_list']);
    return {
      props: {  todo: JSON.parse(JSON.stringify(user)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

const Home = ({todo}) => {
  // const [user, loading, error] = useAuthState(auth);
  // console.log(user);
  return (
  //   {user === null ? {
  //     console.log("Authenticated", user);
  //     auth.signOut();
  //   }
  // : ""}
    <App todo={todo}/>
  )
}

export default Home; 
