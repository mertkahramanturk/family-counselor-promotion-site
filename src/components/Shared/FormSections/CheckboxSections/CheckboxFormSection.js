import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Label } from "reactstrap";
import { Field } from 'react-final-form';

import renderCheckBoxField from '../../Form/CheckBox';

class CheckboxFormSection extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    validate: PropTypes.any,
    props: PropTypes.object,
  };

  static defaultProps = {
    label: '',
    required: false,
    validate: undefined,
    props: {},
  };

  render() {
    const { name, label, required, validate, props } = this.props;

    return (
      <div className="mb-3">
        {label && <Label className="form-label"> {label} {required && <span className="text-danger">*</span>}</Label> }
        <Field
          name={name}
          component={renderCheckBoxField}
          validate={validate && validate}
          {...props}
        />
      </div>
    );
  }
}

export default CheckboxFormSection;
