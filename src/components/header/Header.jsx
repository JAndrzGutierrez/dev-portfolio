import "./header.css";
import Cta from "./Cta";


const Header = () => {
  return (
    <header>
      <div className="container header_container"> 
      <h5> Hello I'm</h5>
      <h1> Juan Andres Gutierrez</h1>
      <h5> Full Stack Software Engineer</h5>
      <Cta/>
      </div>

    </header>
  )
}

export default Header