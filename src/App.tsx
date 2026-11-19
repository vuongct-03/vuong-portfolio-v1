
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./layouts/About";
import Skills from "./layouts/Skills";
import Projects from "./layouts/Projects";
import Intro from "./layouts/Intro";
import Knowledge from "./layouts/Knowledge";


export default function App() {


  return (
    <Container className="portfolio-container">
      <Row className="g-0" style={{width: "100%"}}>

        {/* ========== CỘT TRÁI ========== */}
        <Col lg={5}>
          <aside className="portfolio-sidebar">
                <Intro></Intro>

          </aside>
        </Col>

        
        {/* ========== CỘT PHẢI ========== */}
        <Col lg={7}>
          <main className="portfolio-content">

            {/* GIỚI THIỆU */}

            <About></About>
            {/* KỸ NĂNG */}

                <Skills></Skills>
            {/* KINH NGHIỆM */}
                {/* <Experience></Experience> */}
            {/* DỰ ÁN */}
                <Projects></Projects>
            {/* Kiến thức */}
                <Knowledge></Knowledge>
          </main>
        </Col>
      </Row>
    </Container>
  );
}
