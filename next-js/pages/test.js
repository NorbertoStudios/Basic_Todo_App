import React from "react";
import { auth, db } from "../firebase/firebaseClient";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useDocument,
  useDocumentData,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

const test = () => {
//   const [user, loading, error] = useAuthState(auth);

  const [userDoc, userDocLoading, userDocError] = useDocument(
    // collection
    collection(db, "users/test_norbertostudios@gmail.com/todos")
  );

  const [users, usersLoading, usersError] = useCollection(
    // collection
    collection(db, "users/test_norbertostudios@gmail.com/todos")
  );

  //   const [todolist, todolistLoading, todolistError] = useCollection(
  //     collection(db, '/users/P3Ws1YiJRnQW8r8LImG0'),
  //     {}
  //   );

//   if (!usersLoading && users) {
//     console.log(user)
//     users.docs.map((doc, col) => console.log("MY USERS DATA ", doc.data()));
//   } else {
//     console.log("DATA NOT FOUND");
//   }

  //   if (!todolistLoading && todolist) {
  //     todolist.docs.map((doc) => console.log("MY DATA ", doc.data()));
  //   }
    // if (!usersLoading && users) {
    //   userDoc.docs.map((doc, col) => console.log("MY DATA doc ", doc.data()));
    // } else {
    //   console.log("DATA NOT FOUND");
    // }

  const lg = () => {
    if (user != null) {
      console.log("Authenticated", user);
      auth.signOut();
    }
  };


  return (
    <>
      <button onClick={lg}>LogOut</button>

      <p>
        {userDocError && <strong>Error: {JSON.stringify(error)}</strong>}
        {userDocLoading && <span>Document: Loading...</span>}
        {users &&  (
          <span>
            Collection:{' '}
            {users.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{' '}
              </React.Fragment>
            ))}
          </span>
          )}
      </p>
    </>
  );
};

export default test;
