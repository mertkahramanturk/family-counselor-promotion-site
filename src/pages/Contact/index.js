import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Container,
  Label,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import aylin_foto from "../../assets/images/aylin.jpeg"
import about from "../../assets/images/illustrator/Creativity-bro.svg";

export default class index extends Component {
  render() {
    return (
      <section style={{ padding: "40px" }} className="section mt-60">
        <Container>
          <Row style={{ paddingTop: "3rem" }}>
         
            <Col xs={12} md={8} lg={6}>
              <Card className="chart-card shadow rounded border-0 mt-4">
                <CardHeader style={{backgroundColor:"rgb(105, 153, 250, 0.5)"}} className="dashboard-card-header">
                  <h5 style={{ fontWeight: "600" }} class="title mb-0">
                    İletişim{" "}
                  </h5>
                </CardHeader>
                <CardBody  >
                  <div>
                    
                      <Col md="12" lg="12" xs="12" className="mt-4">
                        <div
                          className="d-flex align-items-center justify-content-between"
                         
                        ></div>
                        <div className="mt-4">
                          <div className="d-flex">
                            <i>
                              <FeatherIcon
                                icon="mail"
                                className="fea icon-ex-md text-muted me-3"
                              />
                            </i>
                            <div style={{ width: "100%" }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="text-primary mb-0">Email :</h6>
                              </div>
                              <Link to="#" className="text-muted">
                               aylindemir@gmail.com
                              </Link>
                            </div>
                          </div>

                          <div className="d-flex mt-3">
                            <i>
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-ex-md text-muted me-3"
                              />
                            </i>
                            <div style={{ width: "53%" }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="text-primary mb-0">
                                  LinkedIn :
                                </h6>
                              </div>
                              <Link to="#" className="text-muted">
                                linkedin.com
                              </Link>
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="d-flex mt-3">
                              <i>
                                <FeatherIcon
                                  icon="twitter"
                                  className="fea icon-ex-md text-muted me-3"
                                />
                              </i>
                              <div style={{ width: "53%" }}>
                                <div className="d-flex align-items-center justify-content-between">
                                  <h6 className="text-primary mb-0">
                                    Twitter :
                                  </h6>
                                </div>
                                <Link to="#" className="text-muted">
                                  twitter.com
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mt-3">
                            <i>
                              <FeatherIcon
                                icon="italic"
                                className="fea icon-ex-md text-muted me-3"
                              />
                            </i>
                            <div style={{ width: "75%" }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="text-primary mb-0">
                                  Language :
                                </h6>
                              </div>
                              <Link to="#" className="text-muted">
                                English
                              </Link>
                              ,{" "}
                              <Link to="#" className="text-muted">
                                Japanese
                              </Link>
                              ,{" "}
                              <Link to="#" className="text-muted">
                                Chinese
                              </Link>
                            </div>
                          </div>

                          <div className="d-flex mt-3">
                            <i>
                              <FeatherIcon
                                icon="globe"
                                className="fea icon-ex-md text-muted me-3"
                              />
                            </i>
                            <div style={{ width: "75%" }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="text-primary mb-0">Website :</h6>
                              </div>
                              <Link to="#" className="text-muted">
                                wwww.aylindemir.com.tr
                              </Link>
                            </div>
                          </div>

                          <div className="d-flex mt-3">
                            <i>
                              <FeatherIcon
                                icon="phone"
                                className="fea icon-ex-md text-muted me-3"
                              />
                            </i>
                            <div style={{ width: "75%" }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="text-primary mb-0">Telefon :</h6>
                              </div>
                              <Link to="#" className="text-muted">
                                (+90)531 390 7378
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                  
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="6">
                <div className="me-lg-5">
                  <img
                  
                    src={about}
                    className="img-fluid d-block mx-auto"
                    alt=""
                  />
                </div>
              </Col>
             
        
          
          </Row>
       
        </Container>
      </section>
    );
  }
}
