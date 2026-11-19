import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { projects } from "../data/projects";
import ProjectDetailModal from "../Modal/ProjectLoCoModal";
import { useState } from "react";
import ProjectThesisModal from "../Modal/ProjectThesisModal";
export default function Projects(){
  const [showLoCoDetail, setShowLoCoDetail] = useState(false);
  const [showThesisDetail, setShowThesisDetail] = useState(false);
    return (
        <>
            <section
              id="projects"
              className="portfolio-section"
            >
              <h2 className="section-title">
                DỰ ÁN TIÊU BIỂU
              </h2>

              <Row className="g-3">
                {projects.map((project) => (
                  <Col xs={12} key={project.title}>
                    <Card className="portfolio-card project-card">
                      <Card.Body>
                        <Row className="g-3">
                          <Col xs={12} sm={4}>
                            <div className="project-image">
                              {project.image != "" ?                               
                              <img
                                style={{width: "100%", height: "60%"}}
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                              /> : null}

                            </div>
                          </Col>

                          <Col xs={12} sm={8}>
                            <h3 className="card-heading">
                              {project.title}
                            </h3>

                            <h4 className="project-subtitle">
                              {project.subtitle}
                            </h4>

                          </Col>
                          <Col xs={12} sm={12}>
                            <p>{project.description}</p>

                            <div className="d-flex flex-wrap gap-2">
                              {project.technologies.map(
                                (tech) => (
                                  <Badge
                                    key={tech}
                                    className="portfolio-tech"
                                  >
                                    {tech}
                                  </Badge>
                                )
                              )}
                            </div>
                              
                      {project.title == "OHQUAO & LÔCÔ Art Market" ? (
                        <Button
                          variant="link"
                          className="project-detail-button"
                          onClick={() => setShowLoCoDetail(true)}
                          style={{color: "#5eead4"}}
                        >
                          Xem chi tiết dự án
                          <ArrowUpRight size={16} />
                        </Button>
                      ) : null}

                      {project.title == "Website Sản phẩm Nội thất" ? (
                        <>
                          <div className="project-modal-section">
                            <h3 className="mt-4">
                              GitHub Repository
                            </h3>

                            <ul className="project-detail-list">
                              <li>
                                <strong>Frontend: </strong>
                                <a href="https://github.com/vuongct-03/fe-kltn" target="_blank" rel="noopener noreferrer">fe-kltn <ExternalLink size={14} /></a>
                              </li>

                              <li>
                                <strong>Product Service: </strong>
                                <a  href="https://github.com/vuongct-03/product-service-v2" target="_blank" rel="noopener noreferrer">
                                  product-service-v2 <ExternalLink size={14} />
                                </a>
                              </li>

                              <li>
                                <strong>Order Service: </strong>
                                <a href="https://github.com/vuongct-03/order-service-v2" target="_blank" rel="noopener noreferrer">
                                  order-service-v2 <ExternalLink size={14} />
                                </a>
                              </li>

                              <li>
                                <strong>User Service: </strong>
                                <a href="https://github.com/vuongct-03/user-service-v2" target="_blank" rel="noopener noreferrer">
                                  user-service-v2 <ExternalLink size={14} />
                                </a>
                              </li>

                              <li>
                                <strong>API Gateway: </strong>
                                <a href="https://github.com/vuongct-03/gateway-api-service-v2" target="_blank" rel="noopener noreferrer">
                                  gateway-api-service-v2 <ExternalLink size={14} />
                                </a>
                              </li>

                              <li>
                                <strong>Demo: </strong>
                                <a href="https://www.youtube.com/watch?v=E2F_xpMJ_Ts" target="_blank" rel="noopener noreferrer">
                                  Youtube <ExternalLink size={14} />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <Button
                            variant="link"
                            className="project-detail-button"
                            onClick={() => setShowThesisDetail(true)}
                            style={{color: "#5eead4"}}
                          >
                          Xem chi tiết dự án
                          <ArrowUpRight size={16} />
                        </Button>
                        </>

                      ) : null}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>

          <ProjectDetailModal show={showLoCoDetail} onHide={() => setShowLoCoDetail(false)}/>
          <ProjectThesisModal show={showThesisDetail} onHide={() => setShowThesisDetail(false)}/>
        </>
    )
}