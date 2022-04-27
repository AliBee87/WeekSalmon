import { useEffect } from "react";

function BakedPinterest() {

    useEffect(() => {
        window.location.href = "https://diethood.com/garlic-butter-baked-salmon/";
    }, []);

    return (
        <div>
            <h2>BakedPinterest</h2>
        </div>
    );
}

export default BakedPinterest;