import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { withRouter } from "react-router";
import { Container } from "reactstrap";

import TopbarRight from "./TopbarRight";
//Import images


class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpenShop: false,
      navLinks: [
        //Note : each child and nested child must have unique id
        { id: 1, title: this.props.t('topbar.blog'), link: "/" },
      
        { id: 3, title: this.props.t('topbar.iletişim'), link: "/contact" },
        { id: 4, title: this.props.t('topbar.hakkimda'), link: "/hakkımda" },
       
      ],
      wishlistModal: false,
      dropdownIsOpen: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
    this.openBlock.bind(this);
    this.openNestedBlock.bind(this);
    this.toggleDropdownShop.bind(this);
    this.toggleWishlistModal.bind(this);
    this.toggleDropdownIsOpen.bind(this);
  }

  toggleWishlistModal = () => {
    this.setState((prevState) => ({
      wishlistModal: !prevState.wishlistModal,
    }));
  };

  toggleDropdownShop = () => {
    this.setState({
      dropdownOpenShop: !this.state.dropdownOpenShop,
    });
  };
  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  openBlock = (level2_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? (tmpLink.isOpenSubMenu = !tmpLink.isOpenSubMenu)
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  openNestedBlock = (level2_id, level3_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? tmpLink.child.map((tmpchild) =>
          //if level1 id is matched then match level 3 id
          tmpchild.id === level3_id
            ? //if id is matched then update status(level 3 sub menu will be open)
            (tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu)
            : (tmpchild.isOpenNestedSubMenu = false)
        )
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container >
           


            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>

            <TopbarRight />

            <div
              id="navigation"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul className="navigation-menu" id="top-menu">
                {this.state.navLinks.map((navLink, key) =>
                  navLink.child ? (
                    <li className="has-submenu" key={key}>
                      {/* child item(menu Item) - Level 1 */}
                      <Link
                        to={navLink.link}
                        onClick={(event) => {
                          event.preventDefault();
                          this.openBlock(navLink.id);
                        }}
                      >
                        {navLink.title}
                      </Link>
                      {/* <i className="mdi mdi-chevron-right me-1"></i> */}
                      <span className="menu-arrow"></span>
                      {navLink.isMegaMenu ? (
                        // if menu is mega menu(2 columns grid)
                        <ul
                          className={navLink.isOpenSubMenu ? "submenu megamenu open" : "submenu megamenu"}
                        >
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 12 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 23 && item.id > 11 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                      {item.isNew ? (
                                        <span className="badge bg-danger rounded ms-2">
                                          new
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 34 && item.id > 22 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                      {item.isNew ? (
                                        <span className="badge bg-danger">
                                          new
                                        </span>
                                      ) : null}
                                      {item.isOnePage ? (
                                        <span className="badge bg-warning rounded ms-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                      {item.isupdatePage ? (
                                        <span className="badge badge-pill bg-info">
                                          Updated
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 45 && item.id > 33 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}

                                      {item.isOnePage ? (
                                        <span className="badge bg-warning rounded ms-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                      {item.isupdatePage ? (
                                        <span className="badge badge-pill bg-info">
                                          Updated
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 56 && item.id > 44 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}

                                      {item.isOnePage ? (
                                        <span className="badge bg-warning rounded ms-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                      {item.isupdatePage ? (
                                        <span className="badge badge-pill bg-info">
                                          Updated
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                        </ul>
                      ) : (
                        // if menu is not mega menu(1grid)
                        <ul
                          className={navLink.isOpenSubMenu ? "submenu open" : "submenu"}
                        >
                          {navLink.child.map((childArray, childKey) =>
                            childArray.nestedChild ? (
                              // sub menu item - Level 2
                              <li className="has-submenu" key={childKey}>
                                <Link
                                  to={childArray.link}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    this.openNestedBlock(
                                      navLink.id,
                                      childArray.id
                                    );
                                  }}
                                >
                                  {childArray.title}{" "}
                                </Link>
                                <span className="submenu-arrow"></span>
                                <ul
                                  className={
                                    childArray.isOpenNestedSubMenu
                                      ? "submenu open"
                                      : "submenu"
                                  }
                                >
                                  {childArray.nestedChild.map(
                                    (nestedChildArray, nestedKey) => (
                                      // nested sub menu item - Level 3
                                      <li key={nestedKey}>
                                        <Link to={nestedChildArray.link}>
                                          {nestedChildArray.title}{" "}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li key={childKey}>
                                <Link to={childArray.link}>
                                  {childArray.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={key}>
                      <Link to={navLink.link}>{navLink.title}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(withTranslation('common')(Topbar));
