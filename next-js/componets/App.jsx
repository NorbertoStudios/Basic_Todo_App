import React, { useState, useEffect, useMemo } from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ShowDate from "./date/ShowDate";
import AddTodoBar from './todo/TodoBar';
import Todos from "./todo/Todos";
import Loging_Auth from './auth/Loging_Auth';

const App = () => {


    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onAddTodo = (newTodo) => {
        const data = {
            todo: newTodo,
            email: "norbertostudios@gmail.com"
        }
        const encodeData = Buffer(JSON.stringify(data)).toString('base64')

        fetch("/api/v1/todos/add-todo", {
            method: "POST", headers: {
                'Content-Type': 'application/text',
            },
            body: (encodeData),
        })
            .then((res) => res.json())
            .then(() => setTodoList([newTodo, ...todoList,]))

    }
    const onRemoveTodo = (id) => {
        const data = {
            id: id,
            email: "norbertostudios@gmail.com"
        }
        
        const encodeData = Buffer(JSON.stringify(data)).toString('base64')

        fetch("/api/v1/todos/delete-todo", {
            method: "DELETE", headers: {
                'Content-Type': 'application/text',
            },
            body: (encodeData),
        })
            .then((res) => res.json())
            .then(() => setTodoList(old => old.filter(todo => todo.id !== id)))

    }
    const onChangeCompleted = async (todoId) => {
        const todoIndex = todoList.findIndex(todo => todo.id === todoId)

        const updatedTodo = [...todoList]
        updatedTodo[todoIndex].completed = !updatedTodo[todoIndex].completed

        const data = {
            id: todoId,
            email: "norbertostudios@gmail.com",
            completed: updatedTodo[todoIndex].completed
        }
        const encodeData = Buffer(JSON.stringify(data)).toString('base64')


        fetch("/api/v1/todos/update-todo", {
            method: "PATCH", headers: {
                'Content-Type': 'application/text',
            },
            body: (encodeData),
        })
            .then((res) => res.json())
            .then(() => setTodoList(updatedTodo))


    }
    const onMoveTodo = (id) => {
        // this will also be part in the db
        console.log(id)
    }

    useEffect(() => {
        fetch("/api/v1/todos/list-todo", { method: "GET" })
            .then((res) => res.json())
            .then((list) => setTodoList(list.todo_list))
        setIsLoading(false)
    }, [])

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

                <Loging_Auth />

            </main>

            <footer className={styles.footer}>
                <p>© 2022 Norberto Studios</p>
            </footer>
        </div>
    )
}

export default App