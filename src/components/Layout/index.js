import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Layout Components
const Topbar = React.lazy(() => import("./topbar/Topbar"));
const FooterWithoutMenu = React.lazy(() => import("./FooterWithoutMenu"));

const CustomDot = () => {
  return (
    <React.Fragment>
      <FeatherIcon icon="arrow-up" className="icons" />
    </React.Fragment>
  );
};

const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    </div>
  );
};

class Layout extends Component {

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={Loader()}>
          <Topbar hasDarkTopBar={this.props.hasDarkTopBar} />

          {this.props.children}

          <FooterWithoutMenu />

          {/* scrollup button */}
          <ScrollUpButton
            ContainerClassName="classForContainer"
            style={{ height: 36, width: 36 }}
            TransitionClassName="classForTransition"
          >
            <CustomDot />
          </ScrollUpButton>

        </Suspense>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
