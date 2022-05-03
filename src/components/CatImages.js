import Navbar from "./Navbar";
import {useEffect, useState} from "react";

function CatImages({apiKey}){
    const [kitty, setKitty] = useState();

    useEffect(() => {
        fetchNewKitty().then(() => {})
    }, [])

    async function fetchNewKitty() {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');

        if (response.status !== 200) {
            throw new Error('Something is no yes!!')
        }

        const data = await response.json();
        return setKitty(data[0])
    }

    return (
        <>
            <Navbar/>
            <div className={'kittyImage'}>
            <button onClick={fetchNewKitty}>Get random kitty!</button>

            {kitty ? (
                <img src={`${kitty.url}`} alt={`Kitty`}/>
            ) : (
                <h2>Loading!</h2>
            )}
            </div>
        </>
    )
}

export default CatImages;