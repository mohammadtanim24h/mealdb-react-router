import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MealDetail = () => {
    const {mealdb} = useParams()
    const [meal, setMeal] = useState({})

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealdb])

    // redirectToMeals
    const navigate = useNavigate();
    const redirectToMeals = () => {
        navigate('/meals')
    }
    return (
        <div className='w-75 mx-auto my-5'>
            <h2>Details of {meal.strMeal}</h2>
            <img className='img-fluid' src={meal.strMealThumb} alt="" /> <br />
            <p className='mt-3'>Instructions {meal.strInstructions}</p>
            <button className='btn btn-primary mt-3 px-4 py-2'>
                <a className='text-decoration-none text-light' href={meal.strYoutube} rel="noreferrer" target='_blank'>Recipe</a>
            </button>
            <button className='btn btn-danger mt-3 px-4 py-2 ms-3' onClick={redirectToMeals}>Go Back to Meals</button>
        </div>
    );
};

export default MealDetail;