import { Link } from "react-router-dom";

const Bear = () => {
    return (
        <section>
            <h1>Are you sure you're not a bear?</h1>
            <br />
            <br />
            <Link to="/bear1">Ah man, you got me!</Link>
            <br />
            <Link to="/bear1">What is wrong with you?</Link>
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Bear;