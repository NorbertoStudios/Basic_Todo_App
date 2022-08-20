import React from "react";
import { auth } from "../firebase/firebaseClient";
import { useAuthState } from "react-firebase-hooks/auth";

const test = () => {
  const [user, loading, error] = useAuthState(auth);

  const lg = () =>
  {
    if (user != null){
      console.log("Authenticated", user);
      auth.signOut()
    }
   
  
}
    

  let a = user == null ? <div> no user </div> : <div> {user.displayName}</div>;
console.log("Authentic:", user == null ? "a":"b");
  console.log(
    "Loading user...",
    loading,
    "|",
    "Current user: ",
    user 
  );

  return (
    <>
      {a}
      <button onClick={lg}>LogOut</button>
    </>
  );
};

export default test;
