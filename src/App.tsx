import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [posts, setPosts] = useState([])

  interface Todo {
    title: string;
    id: number;
    completed: boolean
  }
  interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(res => setPosts(res.slice(0, 10)))
      .catch(err => console.log(err)
      )
  }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(res => setTodos(res.slice(0, 10)))
      .catch(err => console.log(err)
      )
  }, [])
  return (
    <div className="App">
      <h1>FETCHING API</h1>
      {todos.map((todo: Todo) =>
        <div>
          <h1>Todo Item</h1>
          <li>ID: {todo.id}</li>
          <li>Title: {todo.title}</li>
        </div>
      )}
      {posts.map((post: Posts) =>
        <div>
          <h1>Post Item</h1>
          <li>User ID: {post.userId}</li>
          <li>Post ID: {post.id}</li>
          <li>Post Title: {post.title}</li>
          <li>Post Body: {post.body}</li>
        </div>
      )}
    </div>
  );
}

export default App;
