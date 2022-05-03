function CatHomeCard({cat}){
    return (
        <>
            <div className={'singleCat'}>
                <h2>{cat.name}</h2>
                <h4>{cat.description}</h4>
            </div>
        </>
    )
}

export default CatHomeCard;