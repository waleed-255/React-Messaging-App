import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Error404 from './Components/Error404';
import AllUsers from './Components/AllUsers';
import SendMessage from './Components/SendMessage';

function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Error404 />} />   
        <Route path='' element={<></>} />
        <Route path='allusers' element={<AllUsers/>}/>
        <Route path='sendmessage' element={<SendMessage/>}/>

      </Routes>
    </>
  );
}

export default App;
