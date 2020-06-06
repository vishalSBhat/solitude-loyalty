import React from "react";

const TextField = (props) => {
  return (
    <div className="row m-0 text-field-container">
      <input
        className="col-10 col-sm-4 text-field mt-3"
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={(e) => props.onChange(e)}
        required
        autoComplete="off"
      />
      <span className="placeholder">{props.placeholder}</span>
      {props.error && (
        <span className="col-10 px-2 pt-2 error">{props.error}</span>
      )}
    </div>
  );
};

export default TextField;
