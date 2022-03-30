import React, { useEffect, useState } from "react";
import { Container, FormControl, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => {
                if(data.meals !== null) {
                    setMeals(data.meals)
                }
            })
    }, [searchText])

    const searchFood = (e) => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2 className="my-2">Search Your Desired Food</h2>
            <div className="w-50 mx-auto mt-3">
                <FormControl
                    onChange={searchFood}
                    placeholder="Search Food"
                    aria-label="Search Food"
                />
            </div>
            <h3>Meals found {meals.length}</h3>
            <Container fluid>
                <Row className="g-4 mx-auto">
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Meals;
