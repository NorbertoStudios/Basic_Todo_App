import React from 'react'
import { auth, provider } from "../firebase/firebaseClient";
import {
    GithubAuthProvider,
    signInWithRedirect,
} from "firebase/auth";

const Login = () => {
    const loginFunction = () =>
        signInWithRedirect(auth, provider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                if (credential) {
                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                    const token = credential.accessToken;
                    // ...
                }
                // The signed-in user info.
                const user = result.user;
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });



    return (
        <div>
            <h1>Basic To-do App Login</h1>
            <button onClick={(e) => loginFunction()}>Login</button>
        </div>
    )
}

export default Login