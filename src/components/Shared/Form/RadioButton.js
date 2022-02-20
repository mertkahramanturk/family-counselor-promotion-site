/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { Input, Label } from "reactstrap";

class RadioButtonField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelFontWeight: PropTypes.string,
    radioValue: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    labelFontWeight: 'normal',
    radioValue: false,
    defaultChecked: false,
    disabled: false,
  };

  componentDidMount() {
    const { defaultChecked, onChange, radioValue } = this.props;
    if (defaultChecked) {
      onChange(radioValue);
    }
  }

  onChange = (event) => {
    const { onChange } = this.props;
    onChange(event.currentTarget.value);
  }

  render() {
    const {
      name, value, label, labelFontWeight, radioValue, disabled,
    } = this.props;

    return (

      <div className="form-check mb-0">
        <Input
          type="radio"
          className="form-check-input"
          key={name}
          name={name}
          value={radioValue}
          onChange={this.onChange}
          checked={value === radioValue}
          disabled={disabled}
        />
        <Label
          className={`form-check-label ${labelFontWeight && 'form-check-label form-check-label-normal'}`}
          htmlFor="fourteenday"
        >
          {label && label}
        </Label>
      </div>
    );
  }
}

const renderRadioButtonField = (props) => {
  const {
    input, meta, label, labelFontWeight, defaultChecked, disabled, radioValue, index,
  } = props;
  return (
    <>
      <RadioButtonField
        {...input}
        index={index}
        label={label}
        labelFontWeight={labelFontWeight}
        radioValue={radioValue}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {index === 0 && meta && meta.touched && meta.error && <span className="form-control-error-label">{meta.error}</span>}
    </>
  );
};

renderRadioButtonField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  index: PropTypes.number,
  label: PropTypes.string,
  labelFontWeight: PropTypes.string,
  radioValue: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
};

renderRadioButtonField.defaultProps = {
  meta: null,
  index: 0,
  label: '',
  labelFontWeight: 'normal',
  radioValue: undefined,
  defaultChecked: false,
  disabled: false,
};

export default renderRadioButtonField;
