import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Grandpa from './components/Grandpa/Grandpa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
    </div>
  );
}

export default App;
