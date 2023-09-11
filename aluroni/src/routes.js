import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Cardapio from 'pages/Cardapio';
import Menu from './components/Menu';
import Header from './components/Header';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path='cardapio' element={<Cardapio />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}