import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Generator from './components/Generator';
import Books from './components/Books/Books';
import AppRoutes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/*" element={<AppRoutes />} />
                    <Route path="/generate" element={<Generator />} />
                    <Route path="/books" element={<Books />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
