export const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to React Router Example</h1>
      <p>This is a simple example of React Router implementation.</p>
      <p>
        Click on "Posts" to see a list of articles from JSONPlaceholder API.
      </p>

      <div>
        <h2>What's here:</h2>
        <ul>
          <li>Posts list page</li>
          <li>Single post page</li>
          <li>Simple navigation</li>
          <li>404 page for wrong URLs</li>
        </ul>
      </div>
    </div>
  );
};
