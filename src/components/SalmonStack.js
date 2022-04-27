import { Link } from "react-router-dom";

const SalmonStack = () => {
    return (
        <section>
        <h1>Stack em' High!</h1>
        <br />
        <h3>Salmon Stack and Spicy Mayo</h3>
        <br />
        <p>This one is fun because you can customize it as you like!</p>
        <br />
        <Link to="/salmonStackPinterest">Recipe</Link>
         <div className="flexGrow">
             <Link to="/">Home</Link>
         </div>
    </section>
    )
}

export default SalmonStack;