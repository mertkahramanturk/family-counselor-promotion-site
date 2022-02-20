import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Import Icons
// import FeatherIcon from "feather-icons-react";

//import images
import about from "../../assets/images/construction/about.jpg";
import google from "../../assets/images/client/google.svg";
import lenovo from "../../assets/images/client/lenovo.svg";
import paypal from "../../assets/images/client/paypal.svg";
import amazon from "../../assets/images/client/amazon.svg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={6} xs={12}>
              <div className="position-relative">
                <img
                  src={about}
                  className="rounded img-fluid mx-auto d-block"
                  alt=""
                />
               
              </div>
            </Col>

            <div  className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 flowers2">
              <div className="ms-lg-5 ms-md-4">
                <div style={{marginTop: '5.5rem'}} className="section">
                 
                  <h5  className="title mt-3 mb-4">
                    
                    <span className="text-danger">Danışmanlık Serüvenim</span>
                  </h5>
                  <p className="text-muted para-desc mx-auto">
                  Bir değişiklik yapmam gerektiğine inandığımda, mutsuz aile kavramını nasıl ortadan kaldırırım diye düşündüğümde , 
                  bir babanın kızına gösteremediği sevgisinden ötürü kırılan küçücük kalpleri hissettiğimde ya da birbirini çok seven fakat 
                  sağlıklı iletişim kuramadıkları için sürekli çatışan aileleri gördüğümde işte ben buna dur diyebilmeyim dedim ve aile danışmanı 
                  olmaya karar verdim. Serüvenim böyle başlıyor. Kendimden bahsedecek olursam; memur bir ailenin küçük kızı olarak Ankara’da dünyaya
                   geldim. İlkokulu Kurtuluş İlköğretim Okulu’nda, ortaokulu Namık Kemal Ortaokulu’nda, liseyi ise Ömer Seyfettin Anadolu Lisesi’nde
                    tamamladım. Sözel iletişim becerilerime hep güvendiğim için üniversitede hukuk ve sosyal hizmet bölümleri arasında gidip gelsem de 
                    şu an iyi ki dediğim bir seçim yaparak Kırıkkale Üniversitesi Sosyal Hizmet Bölümü’nü kazandım ve onur derecesiyle bitirdim.
                  </p>
                 
                  <div style={{paddingLeft:'36rem'}} className="mt-4 pb-2">
                    <Link to="/hakkımda" className="btn btn-sm btn-pills btn-danger ms-2 ">
                      Devamı
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
       
      </React.Fragment>
    );
  }
}
