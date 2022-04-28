import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/Login');
    }

    return (
        <section>
            <h1>Do you prefer your salmon raw or cooked?</h1>
            <br />
            <Link to="/raw">Raw</Link>
            <br />
            <Link to="/cooked">I am not a bear, I want it cooked!</Link>
            <br />
            <Link to="/noLike">Bro I don't even like eating salmon</Link>
            <br />
            <Link to="/why">Why take a quiz when I can just get this all off Pinterest?</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
