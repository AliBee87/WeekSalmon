import { useEffect } from "react";

function SushiPinterest() {

    useEffect(() => {
        window.location.href = "https://www.easyhomemadesushi.com/how-to-choose-salmon-for-sushi/";
    }, []);

    return (
        <div>
            <h2>SushiPinterest</h2>
        </div>
    );
}

export default SushiPinterest;