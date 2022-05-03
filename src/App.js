import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from "./components/HomeView";
import CatImages from "./components/CatImages";
import DetailsView from "./components/DetailsView";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/images" element={<CatImages/>}/>
                    <Route path="/details/:id" element={<DetailsView/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
