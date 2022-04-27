import { useEffect } from "react";

function NoLikePinterest() {

    useEffect(() => {
        window.location.href = "https://parenting.firstcry.com/articles/magazine-homemade-fish-food-recipes-to-try-today/";
    }, []);

    return (
        <div>
            <h2>NoLikePinterest</h2>
        </div>
    );
}

export default NoLikePinterest;