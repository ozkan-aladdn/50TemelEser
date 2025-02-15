import Container  from "react-bootstrap/Container"
import Header from "./component/Header/Header";
import BookContainer from "./component/Legend/BookContainer";


function App() {
  return (
    <Container className="text-center">
      <Header/>
      <BookContainer/>
    </Container>
  );
}

export default App;
