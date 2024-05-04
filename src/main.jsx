import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import NewPost from './components/routes/NewPost.jsx'
import RootLayout from './components/routes/RootLayout.jsx'
import Posts, { loader as postLoader } from './components/routes/Posts.jsx'
import {action as NewPostAction} from './components/routes/NewPost.jsx'
import PostDetails,{loader as postDetailsLoader} from './components/routes/PostDetails.jsx'
const router=createBrowserRouter([
  {
path:'/',element:<RootLayout/>,children:[
  {
    path:'/',
    element:<Posts/>,
    loader:postLoader ,
    children:[
      {
        path:'/create-post',
        element:<NewPost/>,
        action:NewPostAction
      },{
        path:'/:id',
        element:<PostDetails/>,
        loader:postDetailsLoader
      }
    ]
  },
 
]
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
