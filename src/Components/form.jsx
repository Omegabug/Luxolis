import React from "react";
import "./style.css";
import PropTypes from 'prop-types';


export const LoginForm = (prop) => {
  return (
    <form onSubmit={prop.onSubmit} >

      <label><div className="text-wrapper">{prop.label}</div></label>
      <input type={prop.types}  required={prop.required} />
      <input type='submit' />

    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default LoginForm;
