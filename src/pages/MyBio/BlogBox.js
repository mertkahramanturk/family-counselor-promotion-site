import React, { Component } from "react";
import { Col, Card, CardBody, CardImg } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import {
  Container,
  Row,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Button,
  Badge,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

class BlogBox extends Component {
  state = {
    comments: [
      {
        id: 1,

        name: "Lorenzo Peterson",
        date: "15th August, 2019",
        time: "01:25 pm",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      },
      {
        id: 2,

        name: "Tammy Camacho",
        date: "16th August, 2019",
        time: "02:05 pm",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      },
      {
        id: 3,

        name: "Tammy Camacho",
        date: "17th August, 2019",
        time: "04:03 pm",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      },
    ],
    blogs: [
      {
        id: 3,

        like: "33",
        comment: "08",
        autor: "GitLab",
        date: "13th August, 2019",
      },
    ],
    followButtonClicked: false,
    activeTab: "1",
  };

  togglemodalJobDetail = () => {
    this.setState((prevState) => ({
      modalJobDetail: !prevState.modalJobDetail,
    }));
  };
  render() {
    return (
      <React.Fragment>
        {this.props.blogs.map((blog, key) => (
          <Col lg="12" md="12" className="mt-4 pt-2" key={key} name="blog">
            <Card className="blog rounded border-0 shadow">
              <div className="position-relative">
                <Col
                  style={{ paddingLeft: "20rem" }}
                  lg="2"
                  md="3"
                  className="text-md-start text-center"
                >
                  <img
                    src={blog.image}
                    className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                    alt=""
                  />
                </Col>

                <div className="overlay rounded-top bg-dark"></div>
              </div>
              <CardBody className="content">
                <div className="ms-lg-4">
                  <div style={{ width: "30%" }}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <div className="d-flex">
                          <h6 className="widget-title mb-1  ">Aylin DEMİR </h6>
                        </div>
                        <p className="text-primary btn-md ">
                          Deneyimlerimle hayatınıza ışık tutmak için varım...
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">
                    &nbsp;&nbsp;&nbsp;&nbsp;Bir değişiklik yapmam gerektiğine
                    inandığımda, mutsuz aile kavramını nasıl ortadan kaldırırım
                    diye düşündüğümde , bir babanın kızına gösteremediği
                    sevgisinden ötürü kırılan küçücük kalpleri hissettiğimde ya
                    da birbirini çok seven fakat sağlıklı iletişim kuramadıkları
                    için sürekli çatışan aileleri gördüğümde işte ben buna dur
                    diyebilmeyim dedim ve aile danışmanı olmaya karar verdim.
                    Serüvenim böyle başlıyor. Kendimden bahsedecek olursam;
                    memur bir ailenin küçük kızı olarak Ankara’da dünyaya
                    geldim. İlkokulu Kurtuluş İlköğretim Okulu’nda, ortaokulu
                    Namık Kemal Ortaokulu’nda, liseyi ise Ömer Seyfettin Anadolu
                    Lisesi’nde tamamladım. Sözel iletişim becerilerime hep
                    güvendiğim için üniversitede hukuk ve sosyal hizmet
                    bölümleri arasında gidip gelsem de şu an iyi ki dediğim bir
                    seçim yaparak Kırıkkale Üniversitesi Sosyal Hizmet Bölümü’nü
                    kazandım ve onur derecesiyle bitirdim. <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Aynı zamanda aklımda kalmasını
                    istemediğim için Anadolu Üniversitesi Adalet Bölümü’nde
                    okumaya devam etmekteyim. Çok severek kazandığım ve zevkle
                    okuduğum bu bölümde öğrendiğim her bilgi, gittiğim her
                    etkinlik, tanıştığım her insan hayatımın bir parçasında bana
                    bilgi, beceri ve değer kattı. Bu süreçte kendime kattığım
                    bilgi birikimimle ve elimden geldiğince kazandığım
                    tecrübelerle şimdi farklı bir yolda yürüme zamanı dediğim
                    tam bu noktada aile danışmanlığına yöneldim. Aile
                    Danışmanlığı eğitimimi tamamladıktan sonra kendime uygulama
                    alanları yaratarak birçok vaka görüp çözümleyebilme imkanına
                    ve şansına sahip oldum. Aile Danışmanlığı eğitimime katkıda
                    bulunan ve danışanlarıma daha iyi hizmet vermemi sağlayan
                    birçok eğitim aldım ve her geçen gün kendimi geliştirmeye
                    devam ediyorum.<br></br> &nbsp;&nbsp;&nbsp;&nbsp;Kendimi
                    geliştirdiğim eğitimler şunlardır; Aile ve Çift
                    Danışmanlığı, Çözüm Odaklı Terapi, Stres Ve Kaygıyla Baş
                    Etme, Kişisel Gelişim, Oyun Terapisi, Objektif Çocuk
                    Testleri, Çocuk Resim Analizi Çıktığım bu güzel yolculukta
                    sizlere eşlik etmemi isterseniz, değişimi kendi içinizde
                    başlatacağınıza inanırsanız, tüm desteğimle sizleri bekliyor
                    olacağım. Sevgiyle kalın.
                  </p>
                </div>
                <div className="post-meta d-flex justify-content-between mt-3">
                  <ul className="list-unstyled mb-0"></ul>
                </div>
              </CardBody>
              <div className="author">
                <small className="text-light user d-block">
                  <i className="mdi mdi-account"></i> {blog.autor}
                </small>
              </div>
            </Card>
          </Col>
        ))}

      </React.Fragment>
    );
  }
}

export default BlogBox;
