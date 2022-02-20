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
    categoryOptions: [
      { value: 1, label: 'Brute Force' },
      { value: 2, label: 'Cross-site Scripting (XSS)' },
      { value: 3, label: 'Malware' },
      { value: 4, label: 'Man in the Middle' },
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
            options={this.state.categoryOptions}
            validate={validate && validate}
            {...props}
          />
      </div>
    );
  }
}


export default SeverityFormSection;
