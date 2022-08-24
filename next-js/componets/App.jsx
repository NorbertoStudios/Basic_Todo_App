import React, { useState, useEffect, useMemo } from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ShowDate from "./date/ShowDate";
import AddTodoBar from './todo/TodoBar';
import Todos from "./todo/Todos";
import Loging_Auth from './auth/Loging_Auth';

import Router from 'next/router'

const App = ({ todos }) => {

    // const path = "users/test_norbertostudios@gmail.com/todos";

    // const [user_todoList, user_todoListLoading, user_todoListError] = useCollection(
    //     collection(db, path)
    // );

    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onAddTodo = (newTodo) => {
        const a = Buffer(JSON.stringify(newTodo)).toString('base64')
        fetch("/api/v1/todos/user/todo-list/add-todo?todo=" + a)
            .then((res) => res.json())

        // setTodoList([newTodo, ...todoList,])

        Router.reload(window.location.pathname)

        //Firebase
        // const docRef = doc(db, path, newTodo.id);
        // setDoc(docRef, newTodo)
    }
    const onRemoveTodo = (id) => {
        setTodoList(old => old.filter(todo => todo.id !== id))

        //Firebase
        // const docRef = doc(db, path, id)
        // deleteDoc(docRef);
    }
    const onChangeCompleted = async (todoId) => {
        const todoIndex = todoList.findIndex(todo => todo.id === todoId)

        console.log(todoId, todoIndex, todoList)
        const updatedTodo = [...todoList]
        updatedTodo[todoIndex].completed = !updatedTodo[todoIndex].completed

        setTodoList(updatedTodo)

        //Firebase
        // const docRef = doc(db, path, todoId)
        // const docSnap = await getDoc(docRef);

        // const updatedTodo = { 'completed': !docSnap.data()['completed']}

        // updateDoc(docRef, updatedTodo)
    }
    const onMoveTodo = (id) => {
        console.log(id)
    }

    useEffect(() => {
        todos && setTodoList(todos.todo_list)
        setIsLoading(false)
    }, [todoList])

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
                
                <Todos
                    todosList={todoList}
                    onMoveTodo={onMoveTodo}
                    onRemoveTodo={onRemoveTodo}
                    onChangeCompletedTodo={onChangeCompleted}
                />

<Loging_Auth/>

            </main>

            <footer className={styles.footer}>
                <p>© 2022 Norberto Studios</p>
            </footer>
        </div>
    )
}

export default App