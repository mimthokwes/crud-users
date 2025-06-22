import {BrowserRouter, Routes, Route} from "react-router";
import UserList from './pages/UserList.jsx'
import Home from './pages/homePage.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/students' element={<UserList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
