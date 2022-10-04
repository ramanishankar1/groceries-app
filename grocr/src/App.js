import './App.css';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import CategoryHolder from './Components/Home/Category/categoryholder';
import { Routes, Route, Link } from 'react-router-dom';
import ProductHolder from './Components/Products/productholder';
import Product from './Components/Products/product';
import Description from './Components/ProductDescription/description';
// import loginSlice from './Components/redux/loginSlice';
import { login, logout } from './Components/redux/loginSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.loginProduct.isLoggedIn)
  const dispatch = useDispatch()
  return (
    <div className="App">

      <div className='container'>
        <h1><div className='headingList'>


        </div></h1>
        <Header></Header>
        {/* <Home></Home> */}
        <CategoryHolder></CategoryHolder>
        <button onClick={() => {
          dispatch(login())
        }}>Login</button>
        <button onClick={() => {
          dispatch(logout())
        }}>Logout</button>

        <Routes>
          <Route index='home' element={<Home></Home>} />
          <Route path='/products/:category' element={<ProductHolder></ProductHolder>} />
          <Route path='/product' element={<Product></Product>} />
          <Route path='categorydetails/:category/:id' element={<Description></Description>} ></Route>

        </Routes>
      </div>
    </div>
  )
}
export default App;