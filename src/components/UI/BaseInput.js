function BaseInput({
  label,
  name,
  type = "number",
  required = true,
  placeholder = "",
  classes,
  value,
  handleOnChange,
  currency,
}) {
  return (
    <div className="w-full">
      <label>{label}</label>
      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required ? true : false}
          className={`w-full ${classes}`}
          value={value}
          onChange={handleOnChange}
        />
        <span className="absolute right-1 top-[2px] text-dark">{currency}</span>
      </div>
    </div>
  );
}

export default BaseInput;
