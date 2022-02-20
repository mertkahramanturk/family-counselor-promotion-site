import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class PageBreadcrumb extends Component {
  render() {

    return (
      <React.Fragment>
        <section className={`bg-half bg-light d-table w-100 ${this.props.className && this.props.className}`}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" className="text-center">
                <div className="page-next-level">
                  {this.props.title ? (
                    <h2 className="title"> {this.props.title}</h2>
                  ) : null}
                  {this.props.children ? this.props.children : null}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/*
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
        */}
      </React.Fragment>
    );
  }
}

export default PageBreadcrumb;
