import { useEffect, useState } from "react"
import {Routes, Route} from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

const Main = (props) => {
    const [todo, setTodo] = useState(null)
    const URL = process.env.REACT_APP_BASE_URL

    const getTodo = async() => {
        const response = await fetch(URL)
        const data = await response.json()
        setTodo(data.data)
    }

    const createTodo = async (item) => {
        item.completed = false
        // make post request to create Todo
        await fetch(URL, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
        // update list of Todos
        getTodo();
      };

    const updateTodo = async (item, id) => {
        //make put request to create Todo
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        })
        // update list of Todos
        getTodo()
    }

    const deleteTodo = async (id) => {
        //make delete req to delete Todo
        await fetch(URL + id, {
            method: "DELETE",
        })
        //update list of Todo
        getTodo()
    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/" 
                    element={<Index 
                    todo={todo} 
                    createTodo={createTodo}/>} />
                <Route path="/todo/:id" 
                    element={<Show
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo} />} />
            </Routes>
        </main>
    )
}

export default Main