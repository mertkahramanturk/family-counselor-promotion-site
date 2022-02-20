import React, { Component } from "react";
import {
  Row,
  Card,
  CardBody,
  Col,
  Label,
  Container,
  CardHeader,
} from "reactstrap";
import BlogBox from "./BlogBox";
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";
import { Link } from "react-router-dom";
import client01 from "../../assets/images/1.jpeg";
import FeatherIcon from "feather-icons-react";
import blog3 from "../../assets/images/family_logo.svg"

export default class index extends Component {
  state={
    blogs: [
      
      {
        id: 3,
        image: blog3,
      
        like: "33",
        comment: "08",
        autor: "Aylin DEMİR",
        date: "13th August, 2019",
      },
      ],
  }
  render() {
    return (
      <React.Fragment>
        <PageBreadcrumb>
          
        </PageBreadcrumb>
        <Container>
        
            <Row>
              <Col lg="12">
                <Card
                  className="public-profile border-0 rounded shadow"
                  style={{ zIndex: "1" }}
                >
                  <CardBody>
                    <Row className="align-items-center">
                      <Col lg="2" md="3" className="text-md-start text-center">
                        <img
                          src={client01}
                          className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                          alt=""
                        />
                      </Col>

                      <Col xs={12} md={8} lg={6}>
                        <Row className="align-items-end">
                          <Col
                            md="7"
                            className="text-md-start text-center mt-4 mt-sm-0"
                          >
                            <h3 className="title mb-0">Aylin Demir</h3>
                            <small className="text-muted h6 me-2">
                              Aile Danışmanı
                            </small>
                           
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        
        </Container>
        <section className=" ">
          <Container className="">
            
            <Row>
              <Col xs="2"></Col>
              <Col xs={12} md={8} lg={8}>
                <Card className="chart-card shadow rounded border-0 mt-4 falan">
                  <CardHeader style={{backgroundColor:"rgb(105, 153, 250, 0.5)"}}>
                    {" "}
                    <div className="border-bottom pb-4">
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ width: "11%" }}
                      >
                        <h5 className="pt-2">Hakkımda</h5>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                      <Row>
                       
              
                          <Col xs="12">
                          <div className="row">
            <BlogBox blogs={this.state.blogs} />
          </div>
                  
                    </Col>
                    </Row>

                  </CardBody>
                </Card>
                
              </Col>
            </Row>
          </Container>
        </section>
        <div style={{paddingTop:'4rem'}}></div>
      </React.Fragment>
    );
  }
}
