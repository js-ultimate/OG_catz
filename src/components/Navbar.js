import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className={'navbar'}>
            <Link to={"/"}><button>Homepage</button></Link>
            <Link to={"/images"}><button>Cat images</button></Link>
            <p>Click on Cat to view details.</p>
        </div>
    )
}

export default Navbar;