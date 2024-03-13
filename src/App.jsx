import logo from './logo.svg';
import './App.css';
import {PageLayout} from './components/Layout/Layout';
import {Cards} from './components/Cards';
import { useEffect, useState } from 'react';
import { Routes, Route, useParams, useLocation} from 'react-router-dom'


function App() {
  const [posts, setPosts] = useState([])

  const user = {
    name: '',
    age: '',
    role: 'admin'
  }
  

  const isAdmin = (element) => ( user.role == 'admin' ? element : <PageError />)
  return (
    //<Layout>

      <Routes>
        <Route path='/*' element={isAdmin(<Cards />)}> 
          <Route index element={<HomeComponent posts={posts}/>}/>
        </Route>
        <Route path='info' element={<Cards />} />
        <Route path='user' element={<>user</>} />
        <Route path='*' />

        <Route path='/auth/'> 
         <Route index element={<HomeComponent posts={posts}/>}/>
       </Route>
       <Route path='login' element={<InfoPage />} />
       <Route path='reset_password' element={<>user</>} />
       <Route path='*' element={<>ERROR 404</>} />
       

      <Route path='/error/' element={<PageLayout />}> 
      <Route index element={<></>}/>
      </Route>
      <Route path='info' element={<InfoPage />} />
      <Route path='user' element={<>user</>} />
      <Route path='*' />
    </Routes>

    //</Layout>
    
  );
}

export default App;

const HomeComponent = ({posts}) => {
    const params = useParams()
    const location = useLocation()
    return (
      <div style= {{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '64 em',
        margin: '0 auto',
        marginTop: '20px'
     }}>
       {posts.map((post,index) => <PostComponent postData={post}/>)}
      </div>   
    )
}
const PostComponent = ({postData}) => {
  return(
    <div style={{
      border: '1px solid #333',
      padding: '12px',
      borderRadius: '50px'
    }}>
      <p>{postData.userId}</p>
      <p>{postData.title}</p>
      <p>{postData.body}</p>
    </div>
   )
}

const InfoPage = () => {
  const location = useLocation()
  //const {tel} = location.state
  return(
    
    <>
     info
      
    </>
  )
}
const PageError = () => {
  return(
    <>У вас нет роли администратора</>
  )
}