import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    CustomInput,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
} from "reactstrap";

const LangSelector = () => {
    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState('en');

    const changeLanguage = (event) => {
        setSelectedLang(event.target.value);
        i18n.changeLanguage(event.target.value);
    }

    return (
        <div onChange={changeLanguage}>
            {/* <Dropdown
                isOpen={this.state.primary}
                toggle={() =>
                    this.setState({ primary: !this.state.primary })
                }
            >
                <DropdownToggle color="primary" caret>
                    Primary{" "}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem disabled>
                        Action (disabled)
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Home</DropdownItem>
                    <DropdownItem>Service</DropdownItem>
                    <DropdownItem>About Us</DropdownItem>
                </DropdownMenu>
            </Dropdown> */}

            <CustomInput
                name="customSelect"
                id="customSelect"
                type="select"
                className="form-control"
            >
                <option defaultValue value="en" name="language" selected={selectedLang === 'en'}>EN</option>
                <option value="tr">TR</option>
            </CustomInput>
        </div>
    )
}

export default LangSelector;