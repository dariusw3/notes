import React from "react";
import { render } from "react-dom";
import { Field, reduxForm } from "redux-form";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import App from "../App";

class NoteForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error">
          <div className="error_text">{error}</div>
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    console.log(formProps.meta.error);
    const placeholder = `${
      formProps.input.name === "title" ? "Enter a title" : "Text"
    }`;
    const className = `${
      formProps.input.name === "title" ? "formic" : "form-text"
    }`;

    console.log(formProps.input.name);
    return (
      <div>
        <input
          {...formProps.input}
          autoComplete="off"
          type="textarea"
          className={className}
          placeholder={placeholder}
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  renderInput2 = (formProps) => {
    console.log(formProps);
    const placeholder = `${
      formProps.input.name === "title" ? "Enter a title" : "Text"
    }`;
    const className = `${
      formProps.input.name === "title" ? "formic" : "form-text"
    }`;
    return (
      <div>
        <ReactQuill
          {...formProps.input}
          onBlur={true}
          autoComplete="off"
          modules={NoteForm.modules}
          formats={NoteForm.formats}
          className={className}
          placeholder={placeholder}
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field label="Enter Title" name="title" component={this.renderInput} />
        <Field
          label="Enter Description"
          name="description"
          component={this.renderInput2}
        />
        <button className="buton-head arange">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

NoteForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

NoteForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

export default reduxForm({
  form: "noteForm",
  validate,
})(NoteForm);
