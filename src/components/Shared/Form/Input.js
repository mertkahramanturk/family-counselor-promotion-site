import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class InputField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]).isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
    type: 'text',
    disabled: false,
    maxLength: "150",
  };

  handleChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  preventNonNumericalInput = (e) => {
    e = e || window.event;
    var charCode = (typeof e.which === 'undefined') ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
  
    if (!charStr.match(/^[0-9]+$/))
      e.preventDefault();
  }

  render() {
    const {
      name, value, type, placeholder, disabled, maxLength,
    } = this.props;

    return (
      type === 'number' ?
        <input
          className='form-control'
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          onChange={this.handleChange}
          pattern="[0-9]*"
          onKeyPress={this.preventNonNumericalInput}
        />
        :
        <input
          className='form-control'
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          onChange={this.handleChange}
        />
    );
  }
}

const renderInputField = (props) => {
  const {
    input, meta, placeholder, type, disabled, maxLength, preventTurkishCharacter,
  } = props;
  return (
    <>
      <InputField
        {...input}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        maxLength={maxLength}
        preventTurkishCharacter={preventTurkishCharacter}
      />
      {meta.touched && meta.error && <span className="form-control-error-label">{meta.error}</span>}
    </>
  );
};

renderInputField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.string,
  preventTurkishCharacter: PropTypes.bool,
};

renderInputField.defaultProps = {
  meta: null,
  placeholder: '',
  type: 'text',
  disabled: false,
  maxLength: "150",
  preventTurkishCharacter: false,
};

export default renderInputField;
