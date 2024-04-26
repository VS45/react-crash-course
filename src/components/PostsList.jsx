import React, { useEffect, useState} from 'react'
import Post from './Post';
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';
function PostsList ({posting,hideModalHandler}) {
   const [posts,setPosts]=useState([])
    const [isFetching,setIsFetching]=useState(false)
   function addPostHandler(postData){
    fetch('http://localhost:8080/posts',{
        method:'POST',
        body:JSON.stringify(postData),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)  
    })
    .catch(err=>console.log(err))
setPosts((existingPost)=>[postData,...existingPost])
console.log(posts)
   }
function getPosts(){
    setIsFetching(true)
    fetch('http://localhost:8080/posts')
    .then(res=>res.json())
    .then(data=>{
      setPosts(data.posts)
      setIsFetching(false)
    })
    .catch(err=>{
        setIsFetching(false)
    })
    .finally(()=>{
        setIsFetching(false)
    })
}
useEffect(()=>{
    getPosts()
},[])
  return (
<>
{!isFetching &&posts.length>0&&(
 <ul className={classes.posts}>
 {posts.map((post,index)=>(
     <Post body={post.body} author={post.author} key={index}/>
 ))}

</ul>
)}
   
   {!isFetching &&posts.length===0&&(
    <div style={{textAlign:'center',color:'white'}}>
        <h2>There are no posts</h2>
        <p>Start adding some</p>
    </div>
   )

   }
   {isFetching&&(
    <div className={{textAlign:'center',color:'white'}}>
    <p>Loading...</p>
    </div>
   )}
    </>
  )
}


export default PostsList;