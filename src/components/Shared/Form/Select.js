import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class SelectField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    })),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    placeholder: '',
    options: [],
    disabled: false,
  };

  handleChange = (selectedOption) => {
    const { onChange } = this.props;
    onChange(selectedOption.value);
  };

  render() {
    const {
      value, name, placeholder, options, disabled
    } = this.props;

    return (
      <Select
        name={name}
        value={(value === '') ? null : options.find(obj => obj.value === value)}
        onChange={this.handleChange}
        options={options}
        clearable={false}
        isDisabled={disabled}
        className="react-select"
        classNamePrefix="react-select"
        placeholder={placeholder}
      />
    );
  }
}

const renderSelectField = (props) => {
  const {
    input, meta, options, placeholder, disabled,
  } = props;
  return (
    <>
      <SelectField
        {...input}
        options={options}
        placeholder={placeholder}
        disabled={disabled}
      />
      {meta.touched && meta.error && <span className="form-control-error-label">{meta.error}</span>}
    </>
  );
};

renderSelectField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  })),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

renderSelectField.defaultProps = {
  meta: null,
  options: [],
  placeholder: '',
  disabled: false,
};

export default renderSelectField;
