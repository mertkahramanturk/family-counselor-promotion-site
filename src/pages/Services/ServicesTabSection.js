import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardBody,
} from "reactstrap";
import classnames from "classnames";
import NörolojiTestSection from "../ChildTestSection/NörolojiTestSection";
import DevelopmentalTestSection from "../ChildTestSection/DevelopmentalTestSection"
class Tabs extends Component {

  state = {
    activeTab: "1",
  };

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs={8} md={8} lg={12} className="mt-0 pb-0">
            <div className="tabs tabs--bordered-bottom">
              
              <Nav className="nav-tabs">
                <NavItem>
                  <NavLink
                    className={
                      classnames({ active: this.state.activeTab === "1" })
                    }
                    onClick={() => { this.toggleTab("1") }}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h6 className="title font-weight-normal mb-0">
                        Gelişimsel Değerlendirme Testleri
                      </h6>
                    </div>
                  </NavLink>
                </NavItem>

            
                <NavItem>
                  <NavLink
                    className={
                      classnames({ active: this.state.activeTab === "3" })
                    }
                    onClick={() => { this.toggleTab("2") }}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h6 className="title font-weight-normal mb-0">
                        Nöroloji Gelişimsel Testler 
                      </h6>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>

          <Col md={12} className="text-center">
            <TabContent
              activeTab={this.state.activeTab}
              id="pills-tabContent"
            >
              <TabPane tabId="1">
              <Col xs="12" md="12" lg="12">
               <DevelopmentalTestSection/>
              </Col>
              </TabPane>
              <TabPane tabId="2">
              <Col xs="12" md="12" lg="12">
              <NörolojiTestSection/>
              </Col>
              </TabPane>
            </TabContent>
          </Col>

        </Row>
      </React.Fragment>
    );
  }
}

export default Tabs;