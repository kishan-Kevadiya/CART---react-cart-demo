import './styles/app.scss'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Header from './compo/Header'
import Home from './compo/Home.jsx'
import Cart from './compo/Cart.jsx'
import {Toaster} from 'react-hot-toast';

function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    <Toaster/>
  </Router>
}

export default App;
