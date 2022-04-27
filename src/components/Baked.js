import { Link } from "react-router-dom";

const Baked = () => {

    return (
        <section>
            <h1>One of My Favorites!</h1>
            <br />
            <h3>Garlic Butter Baked Salmon</h3>
            <br />
            <p>Easy, healthy, and excellent!</p>
            <br />
            <Link to="/bakedPinterest">Recipe</Link>
             <div className="flexGrow">
                 <Link to="/">Home</Link>
             </div>
        </section>
    )
}

export default Baked;