import { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        'https://cookie-upgrade-api.vercel.app/api/upgrades'
      );
      const data = await response.json();
      setPosts(data);
    }

    getPosts();
  }, []);
  return (
    <div className="fetch">
      {posts.map(function (post) {
        return (
          <div key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.cost}</p>
            <p>{post.increase}</p>
          </div>
        );
      })}
    </div>
  );
}
