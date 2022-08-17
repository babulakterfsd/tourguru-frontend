import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthProvider';
import './styles/App.css';

AOS.init();

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <AllRoutes />
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
