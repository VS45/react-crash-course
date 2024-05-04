import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import classes from './PostsList.module.css'
function PostsList () {
    const posts=useLoaderData()
   
  return (
<>
{posts.length>0&&(
 <ul className={classes.posts}>
 {posts.map((post,index)=>(
     <Post id={post.id} body={post.body} author={post.author} key={index}/>
 ))}

</ul>
)}
   
   {posts.length===0&&(
    <div style={{textAlign:'center',color:'white'}}>
        <h2>There are no posts</h2>
        <p>Start adding some</p>
    </div>
   )

   }
   {/* {isFetching&&(
    <div className={{textAlign:'center',color:'white'}}>
    <p>Loading...</p>
    </div>
   )} */}
    </>
  )
}


export default PostsList;