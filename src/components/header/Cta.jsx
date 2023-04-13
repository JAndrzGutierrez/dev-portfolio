import "./header.css";
import resume from "../../assets/resume.pdf"

const Cta = () => {
  return (
    <div className="cta">
      <a href={resume} download> Resume </a>
      <a href="#contact"> Let's Talk! </a>

    </div>
  );
};

export default Cta;
