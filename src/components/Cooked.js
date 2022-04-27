import { Link } from "react-router-dom";

const Cooked = () => {
    return (
        <section>
            <h1>Grilled or baked?</h1>
            <br />
            <br />
            <Link to="/grilled">It's a nice night, let's go outside!</Link>
            <br />
            <Link to="/baked">My allergies are crap, I'm staying in!</Link>
            <br />
            <Link to="/bear">Neither sound very appetizing</Link>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Cooked;