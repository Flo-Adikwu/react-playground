import React, { useState, useEffect } from 'react';

const Request = () => {
  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else return 'Oh no!';
      })
      .then(data => setPosts(data));
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

export default Request;
