import React from "react";

const Input = ({ label, type, id, placeholder }) => {
  return (
    <div className="name input-box">
      <label htmlfor={id} className="form-label text-secondary text-opacity-50">
        {label}
      </label>
      <input
        type={type}
        className="form-control border border-top-0 border-start-0 border-end-0 border-secondary border-opacity-25 rounded-0 p-1 text-dark"
        id={id}
        placeholder={placeholder}
      />
      <div className="error"></div>
    </div>
  );
};

export default Input;
