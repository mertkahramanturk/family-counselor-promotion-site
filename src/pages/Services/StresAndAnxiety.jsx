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
                          <h6 className="text-danger mb-0">
                            Stres ve Kaygı Yönetimi
                          </h6>
                        </div>
                        <Link to="#" className="text-muted">
                          Pandemiyle birlikte artan stresimiz, bizi gerek
                          fiziksel gerekse zihinsel olarak çok fazla
                          baskılayabilmekte. Büyük yaşam değişiklikleri ve bazı
                          çevresel olaylar gibi olumlu ya da olumsuz yaşam
                          olayları bu baskıyı yaratabilir. Her ne kadar stresin
                          kaynağının sadece dış etkenler olduğunu düşünsek de
                          aslında bizi strese sokan yaşantıların kendisi değil,
                          onlarla ilgili beklenti ve yorumlarımızdır. İnsanlar
                          farklı olayları stres olarak algılar ve farklı
                          tepkiler gösterir. Stresi asıl belirleyen yaşantılarla
                          kişi arasındaki etkileşimdir. Stresten ya da
                          kaygılarımızdan kurtulmak bizlere çok zor görünse de,
                          bunu öğrenmenin yolları vardır. Bu yollardan en
                          önemlileri ise şüphesiz sabır ve pes etmemektir. Bunun
                          bir süreç olduğunu kabul etmeli ve tünelin sonundaki
                          ışığı görebileceğimize olan inancımızı yitirmemeliyiz.
                          Stresten kurtulmak, sağlıklı yaşam kalitenize geri
                          dönmek ve bu tünelin sonundaki ışığı beraber görmek
                          isterseniz, biz sizi desteklemeye hazırız!
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
