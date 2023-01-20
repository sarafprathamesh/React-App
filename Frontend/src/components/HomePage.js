import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome To IACSD</h1>
            <Link to="/Login"><button type="button">Login</button></Link>
            {/* <Link to="/Registration"><button type="button">Registration</button></Link> */}
            <Link to="/user/data"><button type="button">Show Data </button></Link>
            {/* <Link to="/Login"><button type="button"> </button></Link> */}
        </div>
    )
}

export default HomePage;