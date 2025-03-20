import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <div className=''>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} index></Route>
        <Route path='/collection' element={<Collection />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product/:productId' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/place-order' element={<PlaceOrder />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/blog' element={<Blog />} ></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
