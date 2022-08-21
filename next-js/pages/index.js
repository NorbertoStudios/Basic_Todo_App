import App from "../componets/App";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseClient";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
  //   {user === null ? {
  //     console.log("Authenticated", user);
  //     auth.signOut();
  //   }
  // : ""}
    <App/>
  )
}

export default Home; 
