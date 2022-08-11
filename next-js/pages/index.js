import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import InputBox from "../componets/inputBox/InputBox";
import InputButton from "../componets/inputButton/InputButton";
import ShowList from "../componets/showList/ShowList";

export default function Home() {
  const date = new Date();
  const dayOfWeekName = date.toLocaleString("default", {
    weekday: "long",
  });
  const currentDate = date.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [inputText, setInputText] = useState("");

  let onInputChange = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  const [listText, setListText] = useState([]);

  let getInputBox = () => {
    console.log(inputText);
    setListText((old) => [...old, inputText]);
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

        <div>{dayOfWeekName}</div>
        <div>{currentDate}</div>

        <div className={styles.inputLayout}>
          <InputBox
            className={styles.inputBox}
            onInputChange={onInputChange}
            textValue={inputText}
          />
          <InputButton label="Add" getInput={getInputBox} />
        </div>

        <ShowList className={styles.listContainer} listObject={listText} />

        {/*
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <p>© 2022 Norberto Studios</p>
      </footer>
    </div>
  );
}
