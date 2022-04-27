import { Link } from "react-router-dom";

const Grilled = () => {
    return (
        <section>
        <h1>Great for the Summer!</h1>
        <br />
        <h3>Grilled Lime Salmon with Avocado-Mango Salsa and Coconut Rice</h3>
        <br />
        <p>I like to watch my husband cook this for me as I throw back margaritas on the patio!</p>
        <br />
        <Link to="/grilledPinterest">Recipe</Link>
         <div className="flexGrow">
             <Link to="/">Home</Link>
         </div>
    </section>
    )
}

export default Grilled;