import React, { Component } from "react";
import { Container, Col, Row, Table, Badge } from "reactstrap";
export default class NörolojiTestSection extends Component {
  render() {
    return (
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" xs="12">
              <section
              
              >
                <Container>
                  <Row>
                    <Col lg="12" md="12" xs="12" className="mt-3">
                      <div className="">
                        <div className="d-block ">
                          <h5 className="">AGTE (Ankara Gelişim Tarama Envanteri) </h5>
                        </div>
                        <p className="text-muted">
                          0-6 Yaş Çocukların dil gelişimi, zihinsel becerileri,
                          küçük-kas gelişimi, büyük-kas gelişimi, sosyal
                          gelişimi ve öz bakım becerilerini ölçen testtir.
                        </p>

                        <div className="d-block ">
                          <h5 >
                            METROPOLİTAN OKUL OLGUNLUĞU TESTİ{" "}
                          </h5>
                        </div>
                        <p className="text-muted">
                          5-6 Yaş Çocukların ilkokula hazır olma durumunu
                          değerlendiren ve Kelime Anlama, Cümleler, Genel Bilgi,
                          Eşleştirme, Sayılar, Kopya Etme gibi 6 alt bölümden
                          oluşan bir testtir. Çocukların alt testlere göre
                          başarıları değişiklik göstermekte ve bu durum ilkokula
                          başlayana kadar geliştirilmesi gereken alanlar
                          hakkında bilgi vermektedir.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
