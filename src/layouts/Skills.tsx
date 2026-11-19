import { Badge, Col, Row } from "react-bootstrap";
import { skills } from "../data/skills";

export default function Skills (){
    return (
        <>
            <section
              id="skills"
              className="portfolio-section"
            >
              <h2 className="section-title">
                KỸ NĂNG CÔNG NGHỆ
              </h2>

              <Row className="g-4">
                {skills.map((skill) => (
                  <Col xs={12} key={skill.title}>
                    <h3 className="skill-title">
                      {skill.title}
                    </h3>

                    <div className="d-flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="portfolio-tech"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                ))}
              </Row>
            </section>
        </>
    )
}