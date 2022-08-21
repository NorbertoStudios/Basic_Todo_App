import React, { useState, useEffect, useMemo } from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ShowDate from "./date/ShowDate";
import AddTodoBar from './todo/TodoBar';
import Todos from "./todo/Todos";
import { auth, db } from "../firebase/firebaseClient";
import {useCollection,} from "react-firebase-hooks/firestore";
import { collection, doc, setDoc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";

// const LOCALSTORAGE_TODOS_KEY = 'todolist'

const App = () => {

    const path = "users/test_norbertostudios@gmail.com/todos";
    
    const [user_todoList, user_todoListLoading, user_todoListError] = useCollection(
        collection(db, path)
    );


    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onAddTodo = (newTodo) => {
        // setTodoList([newTodo, ...todoList,])
        
        //Firebase
        const docRef = doc(db, path, newTodo.id);
        setDoc(docRef, newTodo)
    }
    const onRemoveTodo = (id) => {
        // setTodoList(old => old.filter(todo => todo.id !== id))
        
        //Firebase
        const docRef = doc(db, path, id)
        deleteDoc(docRef);
    }
    const onChangeCompleted = async (todoId) => {
        // const todoIndex = todoList.findIndex(todo => todo.id === todoId)

        // console.log(todoId, todoIndex, todoList)
        // const updatedTodo = [...todoList]
        // updatedTodo[todoIndex].completed = !updatedTodo[todoIndex].completed

        // setTodoList(updatedTodo)

        //Firebase
        const docRef = doc(db, path, todoId)
        const docSnap = await getDoc(docRef);
        
        const updatedTodo = { 'completed': !docSnap.data()['completed']}

        updateDoc(docRef, updatedTodo)
    }
    const onMoveTodo = (id) => {
        console.log(id)
    }

    // useEffect(() => {
    //     if (!user_todoListLoading){
    //         console.log('Todo List Finish Loading');
    //         setTodoList(user_todoList.docs)
    //         console.log('Todo List Finish Loading After', todoList);
    //     }
    //     // if (!isLoading) {
    //     //     localStorage.setItem(LOCALSTORAGE_TODOS_KEY, JSON.stringify(todoList))
    //     // }
    // }, [user_todoList, ])

    // useEffect(() => {
    //     // const todosLocal = localStorage.getItem(LOCALSTORAGE_TODOS_KEY)
    //     // todosLocal && setTodoList(JSON.parse(todosLocal))
    //     // setIsLoading(false)
    // }, [])

    // const handleTermSearch = (e) => {
    //     const valueTerm = e.target.value.toLocaleLowerCase()
    //     setSearchTaskName(valueTerm)
    // }

    // const totalTasks = useMemo(() => {
    //     return todoList.length
    // }, [todoList])

    // const totalCompletedTasks = useMemo(() => {
    //     return todoList.filter(todo => todo.completed).length
    // })

    return (
        <div>
            <Head>
                <title>Basic Todo</title>
                <meta name="description" content="A Basic Todo App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Basic To-do</h1>

                <ShowDate />

                <AddTodoBar onSubmit={onAddTodo} />

                {user_todoList && (
                    <Todos
                        todosList={user_todoList.docs}
                        onMoveTodo={onMoveTodo}
                        onRemoveTodo={onRemoveTodo}
                        onChangeCompletedTodo={onChangeCompleted}
                    />
                ) || <h6 className={styles.code}>Loading...</h6>}

              

            </main>

            <footer className={styles.footer}>
                <p>© 2022 Norberto Studios</p>
            </footer>
        </div>
    )
}

export default App