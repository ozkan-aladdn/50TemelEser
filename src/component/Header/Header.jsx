import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'
import logo from "../../assets/logo.jpg"
import headerStyle from "./Header.module.css"

const Header = () => {
  return (
  <Container>
    <Image src={logo} width={'200px'} className="mt-5"/> <br />
    <h1 className={`${headerStyle.title} my-2`}>100 Temel Eser</h1>
  </Container>
  )
}

export default Header
