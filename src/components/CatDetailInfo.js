function CatDetailInfo({cat}){
    return (
        <>
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
        </>
    )
}

export default CatDetailInfo;