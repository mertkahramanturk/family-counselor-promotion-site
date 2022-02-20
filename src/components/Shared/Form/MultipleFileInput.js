import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// import generic utils function
import { niceBytes } from '../../../utils';

//Import Images
import upload from "../../../assets/images/icon/upload.png";

export const MultipleFileInput = ({ onChange, value, name, accept, multiple }) => {

  const handleChange = (e) => {
    e.preventDefault();
    let files = [...e.target.files];
    files = value ? [...value, ...files] : files
    onChange(files);
  };

  const removeFile = (index, e) => {
    e.preventDefault();
    let filteredValue = value.filter((val, i) => i !== index);
    if (filteredValue.length !== 0) {
      onChange(filteredValue);
    } else {
      onChange(undefined);
    }
  };

  return (
    <div className="form-file">
      {value &&
        <ul className="list-unstyled mt-4">
          {value.map((file, key) => (
            <li className="d-flex justify-content-between align-items-center mt-2 mx-2 px-2" key={key}>
              <div className="d-flex flex-column align-items-start">
                <span className="mb-0"> {file.name} </span>
                <small className="text-muted"> {file && file.size && niceBytes(file.size)} </small>
              </div>
              <Link to="#" onClick={e => removeFile(key, e)} className="text-muted">
                <i className="mdi mdi-close"></i>
              </Link>
            </li>
          ))}
        </ul>
      }
      {!value &&
        <img src={upload} className="mb-2 mt-2"></img>
      }
      <p className="text-muted h6 font-weight-normal">
        Drag and drop or {" "}
        <span className="text-primary fw-bold">
          select files (max. 250MB)
        </span>{" "}
      </p>

      <input
        type="file"
        className="form-file-control"
        name={name}
        id={name}
        onChange={handleChange}
        accept={accept}
        multiple={multiple}
      />
    </div>
  );
};

MultipleFileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.number,
      })
    ),
    PropTypes.string,
  ]).isRequired,
  accept: PropTypes.string,
};

MultipleFileInput.defaultProps = {
  value: null,
};


const renderMultipleFileInput = ({ input, meta, accept, multiple }) => (
  <>
    <MultipleFileInput
      {...input}
      accept={accept}
      multiple={multiple}
    />
    {meta.touched && meta.error && <span className="form-control-error-label">{meta.error}</span>}
  </>
);

renderMultipleFileInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  accept: PropTypes.string,
  multiple: PropTypes.bool,
};

renderMultipleFileInput.defaultProps = {
  meta: null,
  accept: '*',
  multiple: true,
};

export default renderMultipleFileInput; 