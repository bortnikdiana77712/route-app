import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const PostById = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="post-detail">
      <Link to="/posts" className="back-link">
        Back to Posts
      </Link>

      <article>
        <h1>{post.title}</h1>
        <p className="post-body">{post.body}</p>
      </article>
    </div>
  );
};
