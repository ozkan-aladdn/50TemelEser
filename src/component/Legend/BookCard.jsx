import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { CardText } from "react-bootstrap";

const BookCard = (book) => {
  const [show, setShow] = useState(true);
  return (
    <Col sx={10} sm={8} md={6} lg={4} xl={3}>
      <Card
        className="player-card"
        onClick={() => setShow(!show)}
        role="button"
      >
        {show ? (
          <Card.Img title={book.isim} variant="top" src={book.resim} />
        ) : (
          <>
            <Card.Body className="bg-success align-content-center">
              <Card.Title >{book.isim}</Card.Title>        
              <CardText>{book.yazar}</CardText>  
             <Card.Footer>Kitabın Türü : {book.tur}</Card.Footer>
            </Card.Body>
              
          </>
        )}
      </Card>
    </Col>
  );
};

export default BookCard;
