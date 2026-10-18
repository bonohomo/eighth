import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilteredCategory } from "../../api";
import MealList from "../../components/MealList";
import Preloader from "../../components/preloader/Preloader";

function Category(){
    const {name} = useParams();
    const [meals, setMeals] = useState();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    // console.log(meals);


    return (
        <div className="wrap">
            {
                !meals.length ? <Preloader /> : <MealList meals={meals} />
            }
        </div>
    )
}

export default Category;