import React from "react";
import "./GroupRadio.scss";

const Radio = ({
  id,
  name,
  label,
  radioClass,
  labelClass,
  defaultChecked,
  onChange,
  required = false,
  validation = ''
}) => {
  return (
    <>
      <input
        type="radio"
        className={`btn-check ${radioClass}`}
        name={name}
        id={id}
        autoComplete="off"
        defaultChecked={defaultChecked === id}
        onChange={() => onChange && onChange(id)}
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
  onChange
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
            onChange={onChange}
          />
        ))}
      </div>
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default GroupRadio;
