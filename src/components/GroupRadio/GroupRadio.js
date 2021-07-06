import React from "react";
import "./GroupRadio.scss";



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
}) => {

  const handleChange = ({ target: { name, id } }) => {
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
  onChange,
  setFormValues,
  formValues,
}) => {
  return (
    <>
      <div className={`btn-group ${groupClass}`}>
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
          />
        ))}
      </div>
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default GroupRadio;
