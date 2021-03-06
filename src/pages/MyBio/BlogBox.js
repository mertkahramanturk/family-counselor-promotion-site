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
                          <h6 className="widget-title mb-1  ">Aylin DEM??R </h6>
                        </div>
                        <p className="text-primary btn-md ">
                          Deneyimlerimle hayat??n??za ??????k tutmak i??in var??m...
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">
                    &nbsp;&nbsp;&nbsp;&nbsp;Bir de??i??iklik yapmam gerekti??ine
                    inand??????mda, mutsuz aile kavram??n?? nas??l ortadan kald??r??r??m
                    diye d??????nd??????mde , bir baban??n k??z??na g??steremedi??i
                    sevgisinden ??t??r?? k??r??lan k??????c??k kalpleri hissetti??imde ya
                    da birbirini ??ok seven fakat sa??l??kl?? ileti??im kuramad??klar??
                    i??in s??rekli ??at????an aileleri g??rd??????mde i??te ben buna dur
                    diyebilmeyim dedim ve aile dan????man?? olmaya karar verdim.
                    Ser??venim b??yle ba??l??yor. Kendimden bahsedecek olursam;
                    memur bir ailenin k??????k k??z?? olarak Ankara???da d??nyaya
                    geldim. ??lkokulu Kurtulu?? ??lk????retim Okulu???nda, ortaokulu
                    Nam??k Kemal Ortaokulu???nda, liseyi ise ??mer Seyfettin Anadolu
                    Lisesi???nde tamamlad??m. S??zel ileti??im becerilerime hep
                    g??vendi??im i??in ??niversitede hukuk ve sosyal hizmet
                    b??l??mleri aras??nda gidip gelsem de ??u an iyi ki dedi??im bir
                    se??im yaparak K??r??kkale ??niversitesi Sosyal Hizmet B??l??m?????n??
                    kazand??m ve onur derecesiyle bitirdim. <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Ayn?? zamanda akl??mda kalmas??n??
                    istemedi??im i??in Anadolu ??niversitesi Adalet B??l??m?????nde
                    okumaya devam etmekteyim. ??ok severek kazand??????m ve zevkle
                    okudu??um bu b??l??mde ????rendi??im her bilgi, gitti??im her
                    etkinlik, tan????t??????m her insan hayat??m??n bir par??as??nda bana
                    bilgi, beceri ve de??er katt??. Bu s??re??te kendime katt??????m
                    bilgi birikimimle ve elimden geldi??ince kazand??????m
                    tecr??belerle ??imdi farkl?? bir yolda y??r??me zaman?? dedi??im
                    tam bu noktada aile dan????manl??????na y??neldim. Aile
                    Dan????manl?????? e??itimimi tamamlad??ktan sonra kendime uygulama
                    alanlar?? yaratarak bir??ok vaka g??r??p ????z??mleyebilme imkan??na
                    ve ??ans??na sahip oldum. Aile Dan????manl?????? e??itimime katk??da
                    bulunan ve dan????anlar??ma daha iyi hizmet vermemi sa??layan
                    bir??ok e??itim ald??m ve her ge??en g??n kendimi geli??tirmeye
                    devam ediyorum.<br></br> &nbsp;&nbsp;&nbsp;&nbsp;Kendimi
                    geli??tirdi??im e??itimler ??unlard??r; Aile ve ??ift
                    Dan????manl??????, ????z??m Odakl?? Terapi, Stres Ve Kayg??yla Ba??
                    Etme, Ki??isel Geli??im, Oyun Terapisi, Objektif ??ocuk
                    Testleri, ??ocuk Resim Analizi ????kt??????m bu g??zel yolculukta
                    sizlere e??lik etmemi isterseniz, de??i??imi kendi i??inizde
                    ba??lataca????n??za inan??rsan??z, t??m deste??imle sizleri bekliyor
                    olaca????m. Sevgiyle kal??n.
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
