import React from "react";
import "./GroupRadio.scss";
import { isEmpty } from "../utils";

const Radio = ({
  id,
  name,
  label,
  radioClass,
  labelClass,
  defaultChecked,
  required = false,
  validation = "",
  setFormValues,
  formValues,
  setProgress,
  error,
  errors,
  setErrors,
}) => {
  const handleChange = ({ target, target: { name, id } }) => {
    if (error && !isEmpty[id])
      setErrors({
        ...errors,
        [name]: '',
      });
    setFormValues({
      ...formValues,
      [name]: id,
    });
  };

  return (
    <>
      <input
        type="radio"
        className={`btn-check ${radioClass}`}
        name={name}
        id={id}
        autoComplete="off"
        defaultChecked={defaultChecked === id}
        onChange={handleChange}
        required={required}
        validation={validation}
      />
      <label className={`btn ${labelClass}`} htmlFor={id}>
        {label}
      </label>
    </>
  );
};

const GroupRadio = ({
  groupClass = "",
  radioClass = "",
  labelClass = "",
  name,
  message,
  values,
  defaultChecked,
  setFormValues,
  formValues,
  setProgress,
  error,
  errors,
  setErrors,
}) => {
  return (
    <>
      <div className={`btn-group ${groupClass} ${error && "error"}`}>
        {values.map((value) => (
          <Radio
            key={value.id}
            id={value.id}
            name={name}
            radioClass={radioClass}
            labelClass={labelClass}
            label={value.name}
            defaultChecked={defaultChecked}
            setFormValues={setFormValues}
            formValues={formValues}
            setProgress={setProgress}
            errors={errors}
            error={error}
            setErrors={setErrors}
          />
        ))}
      </div>
      {error && <div className="form-text text-danger">{error}</div>}
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default GroupRadio;
