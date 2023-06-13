import {useParams, useNavigate} from 'react-router-dom'
import { useState } from 'react'

const Show = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const todo = props.todo;
    const item = todo.find((p) => p._id === id)
    // state for form
    const [editForm, setEditForm] = useState(item);

    // handleChange function for form
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const updatedValue = type === 'checkbox' ? checked : value;
    
        setEditForm({ ...editForm, [name]: updatedValue });
      };

    // handlesubmit for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateTodo(editForm, item._id);
        // redirect people back to index
        navigate("/");
    };
    
    //delete user on button press
    const removeTodo = (e) => {
        e.preventDefault()
        props.deleteTodo(item._id)
        navigate("/")
    }

    

    return (
        <div className='item'>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={editForm.title}
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editForm.description}
                  name="description"
                  placeholder="description"
                  onChange={handleChange}
              />
              <input
                  type="checkbox"
                  checked={editForm.completed}
                  name="completed"
                  onChange={handleChange}
                  
              />
              <input type="submit" value="Update ToDo" />
              <button id="delete" onClick={removeTodo}>DELETE</button>
          </form>
        </div>
    )
}

export default Show