import Container from "react-bootstrap/Container";
import { data } from "../../helpers/data";
import Row from "react-bootstrap/Row";
import BookCard from "./BookCard";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const BookContainer = () => {
  // console.log(data);
  const [search,setSearch]= useState("")
  return (
    <>
    <Form.Control 
    type="search" 
    placeholder="Search book..." 
    onChange={(e)=>setSearch(e.target.value)}
    className="w-50 mx-auto my-2" />
    <Container className="p-3 rounded-4 card-container my-3">
      <Row className="justify-content-center g-3">
        {data.filter((book)=>book.isim.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())).map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </Row>
    </Container>
    </>
    
  );
};

export default BookContainer;
