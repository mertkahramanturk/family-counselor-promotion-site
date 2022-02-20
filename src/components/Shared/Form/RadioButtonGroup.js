import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import renderRadioButtonField from './RadioButton';

const RadioButtonGroup = ({ name, validate, className, options, layout }) => (
  <div className={`radio-btn-group-${layout}`}>
    {options.map((option, index) => (
      <div key={`index_${option.label}`}>
        <Field
          name={`${name}`}
          component={renderRadioButtonField}
          label={option.label}
          radioValue={option.radioValue ? option.radioValue: option.label}
          defaultChecked={option.defaultChecked}
          disabled={option.disabled}
          validate={validate && validate}
          index={index}
          />
      </div>
    ))}
  </div>
);

RadioButtonGroup.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  layout:  PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  name: '',
  className: '',
  layout: 'vertical'
};

export default RadioButtonGroup;
