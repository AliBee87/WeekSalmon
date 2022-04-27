import { Link } from "react-router-dom";

const Why = () => {
    return (
        <section>
            <h1>Autism Awareness!</h1>
            <br />
            <br />
            <p>At the ripe age of 31, I was diagnosed with autism. My recent diagnosis has been disorienting, to say the least, but I have nevertheless been inspired to approach the matter with both curiosity and humor. I have further been empowered to reflect on some of my more bizarre behavior with a greater sense of self-compassion and understanding as a result of this diagnosis. <br /> <br />
            My nightly salmon dinner is an example of one of my eccentricities. People with autism tend to limit themselves to only one kind of food quite regularly, and it just so happens that mine has to be salmon (I wish it could be something cheaper). For this reason, I thought it'd be fun to make a webpage dedicated to salmon recipes for my final project. More information about autism can be found below! </p> < br/> < br/>
            <Link to="/whyPinterest">I would love to learn more about ASD!</Link> < br/> 
            <Link to="/">Thanks, I'll just have the salmon</Link> <br />
          
        </section>
    )
}

export default Why;