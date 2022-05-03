import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import CatHomeCard from "./CatHomeCard";

function HomeView({apiKey}) {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        getAllBreeds().then((data) => {
            setBreeds(data)
        })
    }, [])

    async function getAllBreeds() {
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const data = response.json();
        return data;
    }

    return (
        <>
            <Navbar/>

            {breeds ? (breeds.map((cat) => <CatHomeCard cat={cat} key={cat.id}/>)) : (<h2>Loading</h2>)}
        </>
    )
}

export default HomeView;