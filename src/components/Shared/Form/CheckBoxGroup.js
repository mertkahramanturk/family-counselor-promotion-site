import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import renderCheckBoxField from './CheckBox';
import { withTranslation } from 'react-i18next';


const CheckBoxGroup = ({ name, layout, options }) => (
  <div className={`checkbox-btn-group-${layout}`}>
    {options.map( (option, index) => (
      <div key={`index_${option.label}`}>
        <Field
          name={`${name}[${index}]`}
          component={renderCheckBoxField}
          label={option.label}
          defaultChecked={option.defaultChecked}
          disabled={option.disabled}
        />
      </div>
    ))}
  </div>
);

CheckBoxGroup.propTypes = {
  name: PropTypes.string,
  layout:  PropTypes.string,
};

CheckBoxGroup.defaultProps = {
  name: '',
  layout: 'vertical',
  validate: undefined,
};

export default withTranslation('common')(CheckBoxGroup);
