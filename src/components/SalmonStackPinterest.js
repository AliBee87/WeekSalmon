import { useEffect } from "react";

function SalmonStackPinterest() {

    useEffect(() => {
        window.location.href = "https://www.pinterest.com/pin/749919775463139568/";
    }, []);

    return (
        <div>
            <h2>SalmonStackPinterest</h2>
        </div>
    );
}

export default SalmonStackPinterest;