import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavbar from './Components/MyNavbar';
import MyHomePage from './Components/MyHomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyDetails from './Components/MyDetails';

function App() {


  return (
    <BrowserRouter>
<MyNavbar/>
    <Routes>
<Route path='/' element={ <MyHomePage/>}/>
<Route path='/:details/:artId' element={ <MyDetails/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
