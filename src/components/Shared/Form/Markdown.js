import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import remarkBreaks from 'remark-breaks'
import "react-mde/lib/styles/scss/react-mde-all.scss";

export const MarkdownField = ({ onChange, value, name }) => {
  const [selectedTab, setSelectedTab] = useState("write");
  
  return (
    <div>
      <ReactMde
        name={name}
        value={value}
        onChange={onChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(
            <ReactMarkdown remarkPlugins={[remarkBreaks]} parserOptions={{ commonmark: true }} children={markdown} />
          )
        }
        toolbarCommands={[
          []
        ]}
        l18n={{
          write: "Write",
          preview: "Preview",
          uploadingImage: "Uploading image...",
          pasteDropSelect: "Attach files by dragging & dropping, selecting or pasting them."
        }}
        paste={false}
      />
      {/*
      <div class="mde-header">
        <div class="mde-tabs">
          <button type="button" class="selected">Write</button>
          <button type="button" class="">Preview</button>
        </div>
      </div>
      */}
    </div>

  );
}

MarkdownField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string,
    }),
    PropTypes.string,
  ]),
};

MarkdownField.defaultProps = {
  value: null,
};


const renderMarkdownField = (props) => {
  const { input, meta } = props;
  return (
    <>
      <MarkdownField
        {...input}
      />
      {meta.touched && meta.error && <span className="form-control-error-label">{meta.error}</span>}
    </>
  );
};

renderMarkdownField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderMarkdownField.defaultProps = {
  meta: null,
};

export default renderMarkdownField;
