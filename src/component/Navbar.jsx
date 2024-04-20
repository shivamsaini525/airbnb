import {Link} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Navbar=()=>{
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-white bg-white" aria-label="Fourth navbar example">
            <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" style={{ width: '120px' }}></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false"> <span>{CgProfile}</span></Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <form role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar