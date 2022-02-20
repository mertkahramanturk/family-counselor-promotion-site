import React, { Component } from "react";
import { Container, Col, Row, Table, Badge } from "reactstrap";
export default class NörolojiTestSection extends Component {
  render() {
    return (
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" xs="12">
              <section>
                <Container>
                  <Row>
                    <Col lg="12" md="12" xs="12" className="mt-3">
                      <div className="">
                        <div className="d-block ">
                          <h5 className="">GESELL GELİŞİM FİGÜRLERİ TESTİ </h5>
                        </div>
                        <p className="text-muted">
                          3-7 Yaş Okul öncesi çocukların; zekâ gelişimlerinin
                          yaşlarına göre ne düzeyde olduğu ile ilgili genel
                          bilgiler veren bir testtir. Test, okul öncesi
                          çocukların görsel algı, görsel motor koordinasyon,
                          küçük kas becerileri ve genel zekâ gelişimleri ile
                          ilgili yorumlarda bulunulabilir.
                        </p>

                        <div className="d-block ">
                          <h5>BENDER-GESTALT GÖRSEL MOTOR ALGILAMA TESTİ</h5>
                        </div>
                        <p className="text-muted">
                          5-11 Yaş Çocukların görsel motor becerilerinin
                          değerlendirilmesi için uygulanır. Motor algılama
                          konusunda bilgi veren test algısal olgunluk, olası
                          nörolojik bozulma ve duygusal uyumu da
                          değerlendirmektedir.
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
