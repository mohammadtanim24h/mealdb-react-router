import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
    const { strCategory, strArea, strMeal, strMealThumb, strInstructions, idMeal } =
        meal;
    return (
        <Col xs md="4" lg="3" className="mx-auto">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>Category: {strCategory}</Card.Text>
                    <Card.Text>Cuisine: {strArea}</Card.Text>
                    <Card.Text>
                        Instruction: {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Link to={`/meals/${idMeal}`}>Details with link</Link>
                    <Link to={`/meals/${idMeal}`}>
                        <Button className="w-100" variant="danger">
                            Details
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Meal;
