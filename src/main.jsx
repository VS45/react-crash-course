import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import NewPost from './components/NewPost.jsx'
import RootLayout from './components/routes/RootLayout.jsx'
import Posts from './components/routes/Posts.jsx'

const router=createBrowserRouter([
  {
path:'/',element:<RootLayout/>,children:[
  {
    path:'/',
    element:<Posts/>
  },
  {
    path:'/create-post',
    element:<NewPost/>
  }
]
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
