import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import InputBox from "../componets/inputBox/InputBox";
import InputButton from "../componets/inputButton/InputButton";
import ShowList from "../componets/showList/ShowList";
import ShowDate from "../componets/date/ShowDate";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [listText, setListText] = useState([]);

  // Get input changes for text input
  let onInputChange = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  // save the input changes to an array
  let getInputBox = () => {
    setListText((old) => [inputText, ...old]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Basic Todo</title>
        <meta name="description" content="A Basic Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Basic To-do</h1>

        <ShowDate />

        <div className={styles.inputLayout}>
          <InputBox
            className={styles.inputBox}
            onInputChange={onInputChange}
            textValue={inputText}
          />
          <InputButton label="Add" getInput={getInputBox} />
        </div>

        <ShowList listObject={listText} />
      
      </main>

      <footer className={styles.footer}>
        <p>© 2022 Norberto Studios</p>
      </footer>
    </div>
  );
}
