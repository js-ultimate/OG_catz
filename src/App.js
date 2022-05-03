import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from "./components/HomeView";
import CatImages from "./components/CatImages";

function App() {
    const apiKey = '1ec86ad7-4ab4-41fb-ba8d-8b5443f86506'

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView apiKey={apiKey}/>}/>
                    <Route path="/images" element={<CatImages apiKey={apiKey}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
