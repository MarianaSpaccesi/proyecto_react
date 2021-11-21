import React from "react";
import {Card, Button} from "react-bootstrap"
import { ItemCount } from "../itemCount/ItemCount";

export const ProductCard = ({img, name, stock}) =>{
    return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
        Daga de Hierro Basica.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
</Card.Body>
<ItemCount stock="15"/>
</Card>
    )
}