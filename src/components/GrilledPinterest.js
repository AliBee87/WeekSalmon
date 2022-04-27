import { useEffect } from "react";

function GrilledPinterest() {

    useEffect(() => {
        window.location.href = "https://360-os.com/recipes/grilled-lime-salmon-avocado-mango-salsa-coconut-rice/";
    }, []);

    return (
        <div>
            <h2>GrilledPinterest</h2>
        </div>
    );
}

export default GrilledPinterest;