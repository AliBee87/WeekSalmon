import { Link } from "react-router-dom"

const NoLike = () => {
    return (
        <section>
            <h1>You Must Also Be a Salmon</h1>
            <br />
            <p>That would be the only logical explanation. Here are some recipes you might enjoy!</p>
            <br />
            <Link to="/noLikePinterest">Recipes</Link>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default NoLike;