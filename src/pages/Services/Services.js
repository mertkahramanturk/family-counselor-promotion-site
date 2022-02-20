import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";
import ServicesTabSection from "./ServicesTabSection";
import GameTeraphy from "./GameTeraphy"

//import images
import StresAndAnxiety from "./StresAndAnxiety";

export default class ProjectPlanning extends Component {
  state = {};

  togglemodalJobDetail = () => {
    this.setState((prevState) => ({
      modalJobDetail: !prevState.modalJobDetail,
    }));
  };

  togglemodalObjectif = () => {
    this.setState((prevState) => ({
      modalObjectif: !prevState.modalObjectif,
    }));
  };

  toggleModalStres = () => {
    this.setState((prevState) => ({
      modalStres: !prevState.modalStres,
    }));
  };

  toggleModalGame = () => {
    this.setState((prevState) => ({
      game: !prevState.game,
    }));
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="features-absolute rounded bg-white shadow">
                  <Row className="flowers2">
                    <Col lg={8} md={12} className="my-4">
                      <Row>
                        <Col md={6} xs={12}>
                          <div className="d-flex features p-4">
                            <div className="icon text-center rounded-circle text-danger me-3 mt-2">
                              <i class="uil uil-star align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Aile Danışmanlığı</h4>
                              <p className="text-muted para mb-0">
                                Hepimizin bildiği gibi aile kavramı toplumun en
                                küçük yapı taşı olarak; sosyal ve ahlaki
                                değerler, gelenekler, görenekler ve kanunlar
                                karşısında iki insanın birbirini severek,
                                sayarak, karşılıklı sorumluluk alarak ve bir
                                hayatı müşterek paylaşarak hayatlarını
                                birleştirdikleri bir kurumdur...
                              </p>
                              <div style={{ paddingLeft: "13rem" }}>
                                <Link
                                  onClick={this.togglemodalJobDetail}
                                  data-toggle="modal"
                                  data-target="#addnewcard"
                                  to="#"
                                  className="btn btn-sm btn-pills btn-outline-danger ms-2 "
                                >
                                  Devamı{" "}
                                  <i className="mdi mdi-chevron-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12}>
                          <div className="d-flex features p-4">
                            <div className="icon text-center rounded-circle text-danger me-3 mt-2">
                              <i class="uil uil-star align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">
                                Stres ve Kaygıyla Baş Etme
                              </h4>
                              <p className="text-muted para mb-0">
                                Toplumun en küçük yapı taşı olarak bilinen aile
                                bir sistemdir ve bazen sistemin işlev
                                bozukluğundan temelleri sarsılabilir.
                              </p>
                              <div style={{ paddingLeft: "13rem" }}>
                                <Link
                                  onClick={this.toggleModalStres}
                                  data-toggle="modal"
                                  data-target="#addnewcard"
                                  to="#"
                                  className="btn btn-sm btn-pills btn-outline-danger ms-2 "
                                >
                                  Devamı{" "}
                                  <i className="mdi mdi-chevron-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} xs={12}>
                          <div className="d-flex features p-4">
                            <div className="icon text-center rounded-circle text-danger me-3 mt-2">
                              <i class="uil uil-star align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">Oyun Terapisi</h4>
                              <p className="text-muted para mb-0">
                                Konumuz çocuklarsa dikkat etmemiz ve özen
                                göstermemiz gereken konular daha da artıyor.
                                Yetişkinler, çocuklarla iletişim kurmakta bazen
                                zorlansa da çocuklar bu durumda kendilerini
                                ifade edememiş ya da anlaşılmamış kahramanlar
                                olarak hissedebilmekte...
                              </p>
                            </div>
                          </div>
                          <div style={{ paddingLeft: "18rem" }}>
                            <Link
                              onClick={this.toggleModalGame}
                              data-toggle="modal"
                              data-target="#addnewcard"
                              to="#"
                              className="btn btn-sm btn-pills btn-outline-danger ms-2 "
                            >
                              Devamı <i className="mdi mdi-chevron-right"></i>
                            </Link>
                          </div>
                        </Col>

                        <Col md={6} xs={12}>
                          <div className="d-flex features p-4">
                            <div className="icon text-center rounded-circle text-danger me-3 mt-2">
                              <i class="uil uil-star align-middle h4 mb-0"></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="title">
                                Objectif Çocuk Değerlendirme
                              </h4>
                              <p className="text-muted para mb-0">
                                Toplumun en küçük yapı taşı olarak bilinen aile
                                bir sistemdir ve bazen sistemin işlev
                                bozukluğundan temelleri sarsılabilir.
                              </p>
                            </div>
                          </div>
                          <div style={{ paddingLeft: "18rem" }}>
                            <Link
                              onClick={this.togglemodalObjectif}
                              data-toggle="modal"
                              data-target="#addnewcard"
                              to="#"
                              className="btn btn-sm btn-pills btn-outline-danger ms-2 "
                            >
                              Devamı <i className="mdi mdi-chevron-right"></i>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col lg={4} className="d-none d-lg-block position-relative">
                      <img
                        src={""}
                        className="img-fluid mx-auto d-block construction-img"
                        alt=""
                      />
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col
                style={{ backgroundColor: "rgb(148, 148, 255, 0.1)" }}
                xs={12}
                className="mt-4 pt-2 text-center"
              ></Col>
            </Row>
          </Container>
        </section>
{/* Oyun Terapisi */}
<Modal
          size="lg"
          isOpen={this.state.game}
          role="dialog"
          autoFocus={true}
          centered={true}
        >
          <ModalBody className="flowers1">
            <section style={{ paddingBottom: "2rem" }} className="pt-1">
              <Container>
                <Row>
                  <Col lg="12" md="12" xs="12">
                    <GameTeraphy />
                  </Col>
                </Row>
              </Container>
            </section>
          </ModalBody>
          <ModalFooter>
            <Button color="btn btn-danger" onClick={this.toggleModalGame}>
              Geri
            </Button>
          </ModalFooter>
        </Modal>
        {/* Stres ve Kaygıyla Baş etme Modal section */}
        <Modal
          size="lg"
          isOpen={this.state.modalStres}
          role="dialog"
          autoFocus={true}
          centered={true}
        >
          <ModalBody className="flowers1">
            <section style={{ paddingBottom: "2rem" }} className="pt-1">
              <Container>
                <Row>
                  <Col lg="12" md="12" xs="12">
                    <StresAndAnxiety />
                  </Col>
                </Row>
              </Container>
            </section>
          </ModalBody>
          <ModalFooter>
            <Button color="btn btn-danger" onClick={this.toggleModalStres}>
              Geri
            </Button>
          </ModalFooter>
        </Modal>

        {/* objectif cocuk modal section */}

        <Modal
          size="lg"
          isOpen={this.state.modalObjectif}
          role="dialog"
          autoFocus={true}
          centered={true}
        >
          <ModalBody className="flowers1">
            <section style={{ paddingBottom: "2rem" }} className="pt-1">
              <Container>
                <Row>
                  <Col lg="12" md="12" xs="12">
                    <ServicesTabSection />
                  </Col>
                </Row>
              </Container>
            </section>
          </ModalBody>
          <ModalFooter>
            <Button color="btn btn-danger" onClick={this.togglemodalObjectif}>
              Geri
            </Button>
          </ModalFooter>
        </Modal>

        {/* about me modal section */}
        <Modal
          size="lg"
          isOpen={this.state.modalJobDetail}
          role="dialog"
          autoFocus={true}
          centered={true}
        >
          <ModalBody className="flowers1">
            <section style={{ paddingBottom: "2rem" }} className="pt-1">
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
                            <div style={{ width: "100%" }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="text-danger mb-0">
                                  Aile Danışmanlığı{" "}
                                </h6>
                              </div>
                              <Link to="#" className="text-muted">
                                Hepimizin bildiği gibi aile kavramı toplumun en
                                küçük yapı taşı olarak; sosyal ve ahlaki
                                değerler, gelenekler, görenekler ve kanunlar
                                karşısında iki insanın birbirini severek,
                                sayarak, karşılıklı sorumluluk alarak ve bir
                                hayatı müşterek paylaşarak hayatlarını
                                birleştirdikleri bir kurumdur. Fakat bu sosyal
                                kurumda çeşitli nedenlerden ötürü mutluluğu
                                ıskalamak ya da ötelemek söz konusudur. Bu
                                noktada devreye aile danışmanlığı hizmeti girer.
                                Aile danışmanlığı, aile bireyleri arasında
                                sağlıklı bir iletişim ortamının yaratılması ve
                                yaşatılması, olumsuz iletişim kalıplarını
                                farkına varmalarını ve bunu ortadan
                                kaldırabilmelerini ya da minumum seviyeye
                                indirebilmeleri için yardımcı olunan bir
                                danışmanlık türüdür. Aile danışmanları, aileyi
                                bir bütün olarak ele alır ve bireylere
                                birbirlerinin bakış açılarından bakabilmelerini
                                ve bu sayede birçok çatışmayı sağlıklı bir
                                şekilde ortadan kaldırabilmelerine olanak
                                sağlar. Yardımcı Olacağım Konular -Çatışmalar
                                -Anne-baba ilişkisi ve iletişim problemleri
                                -Ebeveyn-çocuk ilişkisi -Boşanma/Ayrılma
                                Süreçleri -Aldatma Problemleri -Kardeş Kavgaları
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
