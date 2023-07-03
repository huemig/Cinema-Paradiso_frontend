import { Routes, Route, Router } from 'react-router-dom';
import './assets/style.css'
import Category from './containers/Category';
import Home from './containers/Home';
import Header from './components/common/Header';
import Favorites from './containers/Favorites';
import Routers from './Routers';
// import Routers from './Routers';


function App() {
    return (
        <>

            <Routers />

        </>
    )
}

export default App;
