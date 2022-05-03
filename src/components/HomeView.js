import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import CatHomeCard from "./CatHomeCard";

function HomeView() {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        getAllBreeds().then((data) => {
            setBreeds(data)
        })
    }, [])

    async function getAllBreeds() {
        const response = await fetch('https://api.thecatapi.com/v1/breeds');

        if (response.status !== 200) {
            throw new Error('Something is no yes!')
        }

        return await response.json();
    }

    return (
        <>
            <Navbar/>

            {breeds ? (
                breeds.map((cat) => <CatHomeCard cat={cat} key={cat.id}/>)
            ) : (
                <h2>Loading</h2>
            )}
        </>
    )
}

export default HomeView;