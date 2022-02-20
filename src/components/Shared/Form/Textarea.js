import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextareaField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    placeholder: '',
    rows: "4",
    disabled: false,
  };

  handleChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const {
      name, value, placeholder, rows, disabled,
    } = this.props;

    return (
      <textarea
        className='form-control'
        name={name}
        value={value}
        onChange={this.handleChange}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  }
}

const renderTextareaField = (props) => {
  const {
    input, meta, placeholder, rows, disabled,
  } = props;
  return (
    <>
      <TextareaField
        {...input}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
      />
      {meta.touched && meta.error && <span className="form-control-error-label">{meta.error}</span>}
    </>
  );
};

renderTextareaField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  disabled: PropTypes.bool,
};

renderTextareaField.defaultProps = {
  meta: null,
  placeholder: '',
  rows: "4",
  disabled: false,
};

export default renderTextareaField;
