import { ArrowUpRight } from "lucide-react";
import { Badge, Card, Col, Row } from "react-bootstrap";

export default function Experience (){
    return(
        <>
            <section
              id="experience"
              className="portfolio-section"
            >
              <h2 className="section-title">
                KINH NGHIỆM
              </h2>

              <Card className="portfolio-card">
                <Card.Body>
                  <Row className="g-3">
                    <Col xs={12} md={3}>
                      <span className="experience-date">
                        2026
                      </span>
                    </Col>

                    <Col xs={12} md={9}>
                      <h3 className="card-heading">
                        Web Developer · Freelance
                        <ArrowUpRight size={17} />
                      </h3>

                      <p>
                        Phát triển hệ thống quản lý
                        và đặt booth trực tuyến cho
                        LÔCÔ Art Market.
                      </p>

                      <p>
                        Thực hiện frontend, backend,
                        thiết kế database, xây dựng
                        nghiệp vụ đặt chỗ và triển khai
                        ứng dụng.
                      </p>

                      <div className="d-flex flex-wrap gap-2">
                        {[
                          "React",
                          "TypeScript",
                          "NestJS",
                          "MySQL",
                          "AWS Amplify",
                        ].map((tech) => (
                          <Badge
                            key={tech}
                            className="portfolio-tech"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </section>
        </>
    )
}