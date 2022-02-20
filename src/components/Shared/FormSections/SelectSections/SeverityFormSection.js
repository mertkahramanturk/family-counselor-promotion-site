import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Label} from "reactstrap";
import { Field } from 'react-final-form';
import renderSelectField from '../../Form/Select';

class SeverityFormSection extends PureComponent {
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
    severityOptions: [
      { value: 1, label: 'None' },
      { value: 2, label: 'Low' },
      { value: 3, label: 'Medium' },
      { value: 4, label: 'High' },
      { value: 5, label: 'Critical' },
    ]
  }

  render() {
    const {name, label, required, validate, props, data } = this.props;

    return (
      <div className="mb-3">
        <Label className="form-label"> {label} {required && <span className="text-danger">*</span>}</Label>
          <Field
            name={name}
            component={renderSelectField}
            options={this.state.severityOptions}
            validate={validate && validate}
            {...props}
          />
      </div>
    );
  }
}


export default SeverityFormSection;
