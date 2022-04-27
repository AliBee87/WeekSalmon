import { Link } from "react-router-dom";

const Grilled = () => {
    return (
        <section>
        <h1>The Best Way to Enjoy Salmon!</h1>
        <br />
        <h3>Homemade Sushi</h3>
        <br />
        <p>Making sushi on your own is a lot harder than you'd think, so no judgement if you decide to go out for some instead!</p>
        <br />
        <Link to="/sushiPinterest">Recipe</Link>
         <div className="flexGrow">
             <Link to="/">Home</Link>
         </div>
    </section>
    )
}

export default Grilled;