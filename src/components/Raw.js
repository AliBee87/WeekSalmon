import { Link } from "react-router-dom";

const Raw = () => {
    return (
        <section>
            <h1>Spicy and stackable, or standard and scrumptious?</h1> 
            <br />
            <br />
            <Link to="/salmonStack">Stack the spice!</Link>
            <br />
            <Link to="/sushi">Nothing beats a classic!</Link>
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}


export default Raw;