import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import AuthProvider from './context/AuthProvider';
import './styles/App.css';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AllRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
