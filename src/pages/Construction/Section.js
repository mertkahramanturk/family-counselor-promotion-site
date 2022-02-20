import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Modal, ModalFooter, ModalHeader, Badge, Button, Table, ModalBody } from "reactstrap";
import FeatherIcon from "feather-icons-react";

//import bg image
import bg_image from "../../assets/images/construction/bg.jpg";

export default class Section extends Component {
  state = {
   
  
  };

  
  togglemodalJobDetail = () => {
    this.setState((prevState) => ({
      modalJobDetail: !prevState.modalJobDetail,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 d-table w-100"
          style={{
            backgroundRepeat: "no-repeat !important",
            background: `url(${bg_image}) center center`,
          }}
        >
          <div className="bg-overlay" style={{ opacity: "0.65" }}></div>
          <Container>
            <Row className="mt-5 mt-md-4">
              <Col xs={12}>
                <div className="title-heading">
                  <h4 className="display-4 mb-4 fw-bold text-white title-dark">
                    Mutlu bir hayat için en etkili başlangıç <br /> Aylin DEMİR
                  </h4>
                  <p className="para-desc text-white-50">
                    Toplumun en küçük yapı taşı olarak bilinen aile bir
                    sistemdir ve bazen sistemin işlev bozukluğundan temelleri
                    sarsılabilir. Bu gibi durumlarda dışarıdan bir gözün,
                    profesyonel bir elin değmesi ile olan sağlıklı müdahaleler
                    bu dağınıklığı ve istenmeyen durumu daha hızlı bir şekilde
                    düzeltebilir.
                  </p>
                  <Link  
                  
                  onClick={this.togglemodalJobDetail}
                            data-toggle="modal"
                            data-target="#addnewcard" to="#" className="btn btn-md btn-pills btn-danger ms-2 ">
                    İletişime Geç <i className="mdi mdi-chevron-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
  {/* JOB DETAİL MODAL */}

  <Modal
          size="md"
          isOpen={this.state.modalJobDetail}
          role="dialog"
          autoFocus={true}
          centered={true}
        >
          <ModalHeader toggle={this.togglemodalJobDetail}>
            İletişim Bilgileri
          </ModalHeader>
          <ModalBody className="flowers1">
            <section
              style={{  paddingBottom: "2rem" }}
              className="pt-1"
            >
              <Container>
                <Row>
                  <Col
                    lg="12"
                    md="12"
                    xs="12"
                    className="mt-0 mt-sm-0 pt-0 pt-sm-0"
                  >
                    <div className="ms-lg-4">
                      <div className="d-flex ">
                      <div
                          className="d-flex align-items-center justify-content-between"
                          style={{ width: "20%" }}
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

                          
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </ModalBody>
          <ModalFooter>
            <Button color="btn btn-danger" onClick={this.togglemodalJobDetail}>
              Geri
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
