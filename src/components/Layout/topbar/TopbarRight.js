import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Col,
  Dropdown, DropdownMenu, DropdownToggle, Badge, Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import { Link } from "react-router-dom";
import classnames from "classnames";

import client01 from "../../../assets/images/client/01.jpg";

class TopbarRight extends PureComponent {

  state = {
    activeTab: "1",
    notificationDropdownIsOpen: false,
    accountDropdownIsOpen: false,
  };

  toggleAccountDropdownIsOpen = () => {
    this.setState({
      accountDropdownIsOpen: !this.state.accountDropdownIsOpen,
    });
  };

  toggleNotificationDropdownIsOpen = () => {
    this.setState({
      notificationDropdownIsOpen: !this.state.notificationDropdownIsOpen,
    });
  };

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { t } = this.props;

    return (
     <> </>
    );
  }
}

export default (withTranslation('common')(TopbarRight));
