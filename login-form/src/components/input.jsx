import React from "react";

const Input = ({ type }) => {
  return (
    <div className="name input-box">
      <label for={type} className="form-label text-secondary text-opacity-50">
        {type}
      </label>
      <input
        type="text"
        className="form-control border border-top-0 border-start-0 border-end-0 border-secondary border-opacity-25 rounded-0 p-1 text-dark"
        id={type}
        placeholder={type}
      />
      <div className="error"></div>
    </div>
  );
};

export default Input;
