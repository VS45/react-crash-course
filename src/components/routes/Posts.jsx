import PostsList from "../PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader(){
  const response=await fetch('http://localhost:7070/posts')
  const resData=await response.json();
  return resData.posts;
}