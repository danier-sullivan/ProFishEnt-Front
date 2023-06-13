import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  const [newForm, setNewForm] = useState({
    title: '',
    description: '',
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handleSubmit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createTodo(newForm);
    setNewForm({
      title: '',
      description: '',
    });
  };

  // data is loaded
  const loaded = () => {
    return props.todo.map((item) => (
      <div key={item._id} className={`item ${item.completed ? 'completed' : ''}`}>
        <Link to={`/todo/${item._id}`}>
          <h1>{item.title}</h1>
        </Link>

        <h3>{item.description}</h3>
      </div>
    ));
  };

  // data isn't loaded
  const loading = () => {
    console.log('in loading');
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Create Todo" />
      </form>
      {props.todo ? loaded() : loading()}
    </section>
  );
};

export default Index;
