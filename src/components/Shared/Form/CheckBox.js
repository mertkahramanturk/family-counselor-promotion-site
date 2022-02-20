import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from "reactstrap";
import { withTranslation } from 'react-i18next';


class CheckBoxField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]).isRequired,
    label: PropTypes.string,
    labelFontWeight: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    labelFontWeight: 'normal',
    defaultChecked: false,
    disabled: false,
  };

  render() {
    const { name, value, onChange, label, labelFontWeight, disabled} = this.props;

    return (
      <div className="form-check">
        <Input
          type="checkbox"
          className="form-check-input"
          id={name}
          name={name}
          onChange={onChange}
          checked={value}
          disabled={disabled}
        />
        <Label
          className={`form-check-label ${labelFontWeight && 'form-check-label form-check-label-normal'}`}
          htmlFor="customSwitch4"
        >
          {label && label}
        </Label>
      </div>

    );
  }
}

const renderCheckBoxField = (props) => {
  const {
    input, meta, label, labelFontWeight, defaultChecked, disabled,
  } = props;
  return (
    <>
    <CheckBoxField
      {...input}
      label={label}
      labelFontWeight={labelFontWeight}
      defaultChecked={defaultChecked}
      disabled={disabled}
    />
    {meta && meta.touched && meta.error && <span className="form-control-error-label">{meta.error}</span>}
    </>
  );
};

renderCheckBoxField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  label: PropTypes.string,
  labelFontWeight: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
};

renderCheckBoxField.defaultProps = {
  meta: null,
  label: '',
  labelFontWeight: 'normal',
  defaultChecked: false,
  disabled: false,
};

export default withTranslation('common')(renderCheckBoxField);
