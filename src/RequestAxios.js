import React, { useState, useEffect } from 'react';
// import axios from '../api.jsonPlaceholder';
import axios from 'axios';

const RequestAxios = () => {
  const [posts, setPosts] = useState([]);
  const [err, setError] = useState(null);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });

    // .then(data => setPosts(data));
  });
  return (
    <div>
      <h2 style={{ border: '2px solid red' }}>Below are the posts...</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>Title:{post.title}</h3>
          <small>{post.body}</small>
        </div>
      ))}
    </div>
  );
};

export default RequestAxios;
