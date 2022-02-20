import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Label } from "reactstrap";
import { Field } from 'react-final-form';
import renderSelectField from '../../Form/Select';

class TargetFormSection extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    validate: PropTypes.array,
  };

  static defaultProps = {
    label: '',
    required: false,
    validate: [],
  };

  state = {
    targetOptions: [
      { value: 1, label: 'GittiGidiyor iOS Application' },
      { value: 2, label: 'GittiGidiyor Android Application' },
      { value: 3, label: 'akademi.gittigidiyor.com' },
      { value: 4, label: 'staj.gittigidiyor.com' },
    ]
  }

  render() {
    const { name, label, required, validate, props, data } = this.props;

    return (
      <div className="mb-3">
        <Label className="form-label"> {label} {required && <span className="text-danger">*</span>}</Label>
        <Field
          name={name}
          component={renderSelectField}
          options={this.state.targetOptions}
          validate={validate && validate}
          {...props}
        />
      </div>
    );
  }
}


export default TargetFormSection;
