import {Link} from "react-router-dom";

function CatHomeCard({cat}) {
    return (
        <>
            <Link to={''}>
                <div className={'kittyImage'} style={{'marginBottom': '20px', 'padding': '20px', 'paddingTop': '5px'}}>
                    {cat ? (
                        <>
                            <h2>{cat.name}</h2>
                            {cat.image !== undefined ? (<img src={`${cat.image.url}`} alt={`${cat.id}`} style={{'border-radius': '30px'}}/>) : (<h5>No image:(</h5>)}
                        </>
                    ) : (
                        <h2>Loading!</h2>
                    )}
                </div>
            </Link>

        </>
    )
}

export default CatHomeCard;