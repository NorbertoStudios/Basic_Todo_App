import React, { useState, useEffect, useMemo} from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ShowDate from "./date/ShowDate";
import AddTodoBar from './todo/AddTodoBar';
import Todos from "./todo/Todos";

const LOCALSTORAGE_TODOS_KEY = 'todolist'

const App = () => {

    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onAddTodo = (newTodo) => {
        setTodoList([newTodo, ...todoList,])
        console.log(todoList)

    }
    const onRemoveTodo = (id) => {
        console.log(id)
        setTodoList(old => old.filter(todo => todo.id !== id))
    }
    const onChangeCompleted = (todoId) => {
        const todoIndex = todoList.findIndex(todo => todo.id === todoId)

        const updatedTodo = [...todoList]
        updatedTodo[todoIndex].completed = !updatedTodo[todoIndex].completed

        setTodoList(updatedTodo)
    }
    const onMoveTodo = (id) => {
        console.log(id)
    }

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem(LOCALSTORAGE_TODOS_KEY, JSON.stringify(todoList))
        }
    }, [todoList])

    useEffect(() => {
        const todosLocal = localStorage.getItem(LOCALSTORAGE_TODOS_KEY)
        todosLocal && setTodoList(JSON.parse(todosLocal))
        setIsLoading(false)
    }, [])

    // const handleTermSearch = (e) => {
    //     const valueTerm = e.target.value.toLocaleLowerCase()
    //     setSearchTaskName(valueTerm)
    // }

    const totalTasks = useMemo(() => {
        return todoList.length
    }, [todoList])

    const totalCompletedTasks = useMemo(() => {
        return todoList.filter(todo => todo.completed).length
    })

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
                
            </main>

            <footer className={styles.footer}>
                <p>© 2022 Norberto Studios</p>
            </footer>
        </div>
    )
}

export default App