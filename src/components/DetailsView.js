import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./Navbar";

function DetailsView() {
    const [breeds, setBreeds] = useState([]);
    let urlParams = useParams()
    const cat = breeds[0];


    useEffect(() => {
        getAllBreeds().then((data) => setBreeds(data.filter((cat) => cat.id === urlParams.id)))
    }, [])

    async function getAllBreeds() {
        const response = await fetch('https://api.thecatapi.com/v1/breeds');

        if (response.status !== 200) {
            throw new Error('Something is no yes!')
        }

        return await response.json()
    }

    return (
        <>
            <Navbar/>

            <div className={'kittyImage'} style={{'marginBottom': '20px', 'padding': '20px', 'paddingTop': '5px'}}>

                {cat ? (
                    <>
                        <h1>{cat.name}</h1>

                        {cat.image !== undefined ? (
                            <img src={`${cat.image.url}`} alt={`${cat.id}`} style={{'borderRadius': '30px', 'maxWidth': '500px', 'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto',}}/>) : (
                            <h5>No image:(</h5>)}

                        <h2>{cat.description}</h2>

                        <div className={'catInfo'}>
                            <div>
                                <h4>Temperament:</h4>
                                <p>{cat.temperament}</p>
                            </div>
                            <div>
                                <h4>Origin:</h4>
                                <p>{cat.origin}</p>
                            </div>
                            <div>
                                <h4>Life span:</h4>
                                <p>{cat.life_span} yrs</p>
                            </div>
                            <div>
                                <h4>Weight:</h4>
                                <p>{cat.weight.metric} kg</p>
                            </div>
                        </div>

                        <a href={`${cat.cfa_url}`}>Learn more</a>
                    </>
                ) : (
                    <h2>Loading!</h2>
                )}

            </div>

        </>
    )
}

export default DetailsView;