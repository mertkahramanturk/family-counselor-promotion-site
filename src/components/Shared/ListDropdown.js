import React, { Component } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";


class ListDropdown extends Component {
  state = {
    dropdownIsOpen: false,
  }

  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Dropdown
          className="dropdown-primary"
          isOpen={this.state.dropdownIsOpen}
          toggle={this.toggleDropdownIsOpen}
        >
          <DropdownToggle
            type="button"
            className="btn-icon btn-soft-light dropdown-toggle caret-off p-0"
          >
            <i className="ti ti-dots-vertical"></i>

          </DropdownToggle>
          <DropdownMenu
            right
            className="bg-white shadow border-0 mt-3 py-3"
          >
            <DropdownItem className="text-dark" onClick={this.props.editHandle}>
              <span class="mb-0 d-inline-block me-1"><i class="ti ti-pencil"></i></span>
              Edit
            </DropdownItem>
            <div class="dropdown-divider border-top"></div>
            <DropdownItem className="text-dark" onClick={this.props.deleteHandle}>
              <span class="mb-0 d-inline-block me-1"><i class="ti ti-trash"></i></span>
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default ListDropdown;
