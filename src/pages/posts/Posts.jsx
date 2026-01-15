import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="posts">
      <h1>Posts</h1>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`} className="post-link">
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
