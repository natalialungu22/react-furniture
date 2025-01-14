import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
    Home,
    SingleProduct,
    Cart,
    Checkout,
    Error,
    About,
    Products,
    PrivateRoute,
    Login,
    Signup,
} from './pages';

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='cart' element={<Cart />} />
                <Route path='products' element={<Products />} />
                <Route path='products/:id' element={<SingleProduct />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route
                    path='checkout'
                    element={
                        <PrivateRoute>
                            <Checkout />
                        </PrivateRoute>
                    }
                />
                <Route path='*' element={<Error />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
