import { Link } from "react-router-dom";

const Bear = () => {
    return (
        <section>
            <h1>You are a Bear</h1>
            <br />
            <br />
            <p>I will not be fooled!</p>
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Bear;