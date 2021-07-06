import React from "react";
import "./GroupRadio.scss";

const Radio = ({
  id,
  name,
  label,
  radioClass,
  labelClass,
  defaultChecked,
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
          />
        ))}
      </div>
      {message && <div className="form-text">{message}</div>}
    </>
  );
};

export default GroupRadio;
