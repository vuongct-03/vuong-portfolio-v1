
import { MapPin } from "lucide-react";
import { Col, Row } from "react-bootstrap";

import vuong_img_1 from "../assets/vuong_img_1.jpg";
import vuong_img_2 from "../assets/vuong_img_2.jpg";
import vuong_img_3 from "../assets/vuong_img_3.jpg";
import "./style/Intro.css";

export default function Intro() {
  return (
    <>
    
      <a href="#about" className="portfolio-name">
        Chế Vương
      </a>

      <h2 className="portfolio-position">
        Fullstack Developer
      </h2>

      <div className="intro-gallery">
        <Row className="g-2">
          <Col xs={6}>
            <div className="intro-image intro-image-small vuong-img-3">
              <img src={vuong_img_3} alt="Chế Vương" />
            </div>
          </Col>

          <Col xs={6}>
            <div className="intro-image intro-image-small">
              <img src={vuong_img_2} alt="Chế Vương" />
            </div>
          </Col>

          <Col xs={12}>
            <div className="intro-image intro-image-large">
              <img src={vuong_img_1} alt="Chế Vương" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="portfolio-location">
        <MapPin size={16} />
        TP. Hồ Chí Minh, Việt Nam
      </div>
    </>
  );
}
