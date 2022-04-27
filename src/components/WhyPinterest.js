import { useEffect } from "react";

function WhyPinterest() {

    useEffect(() => {
        window.location.href = "https://www.autismspeaks.org/what-autism#:~:text=Autism%2C%20or%20autism%20spectrum%20disorder,in%20the%20United%20States%20today.";
    }, []);

    return (
        <div>
            <h2>GrilledPinterest</h2>
        </div>
    );
}

export default WhyPinterest;