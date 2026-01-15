import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home, NotFound, PostById, Posts } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostById />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
