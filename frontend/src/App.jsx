import './App.css'
import {BrouserRouter, Routes, Route} from "react-router-dom";
import UserList from '.\pages\UserList.jsx'


function App() {

  return (
    <>
    <BrouserRouter>
    <Routes>
      <Route path='/' element={<UserList/>}/>
    </Routes>
    </BrouserRouter>
    </>
  )
}

export default App
