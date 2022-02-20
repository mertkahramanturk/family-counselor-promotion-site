import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default class StresAndAnxiety extends Component {
  render() {
    return (
      <section style={{ paddingBottom: "2rem" }} className="pt-1">
        <Container>
          <Row>
            <Col lg="12" md="12" xs="12" className="mt-0 mt-sm-0 pt-0 pt-sm-0">
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
                          <h6 className="text-danger mb-0">Oyun Terapisi</h6>
                        </div>
                        <Link to="#" className="text-muted">
                          Konumuz çocuklarsa dikkat etmemiz ve özen göstermemiz
                          gereken konular daha da artıyor. Yetişkinler,
                          çocuklarla iletişim kurmakta bazen zorlansa da
                          çocuklar bu durumda kendilerini ifade edememiş ya da
                          anlaşılmamış kahramanlar olarak hissedebilmekte. Tabii
                          ki çocuklarla ortak bir dil kullanabilmemizin bir yolu
                          vardır. Bu da oyunlardır. Çünkü çocukların kendilerini
                          en rahat hissettikleri ve anlaşıldıklarını
                          düşündükleri alan oyunlardır. Oyun Terapisi, çocuğun
                          problemlerini anlamak, onun duygularını ve tutumlarını
                          keşfetmek ve çocuğu bunlarla yüzleştirerek çözüm
                          getirmesini sağlamak ve kendilerini daha doğru ifade
                          etmelerini sınırlayan faktörleri ortadan kaldırmak
                          için son derece etkili bir yöntemdir. Oyun Terapisi
                          gelişimsel özelliklerine göre 2-12 yaş aralığındaki
                          çocuklara uygulanır.
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
    );
  }
}
