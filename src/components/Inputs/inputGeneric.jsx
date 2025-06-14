import React from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function InputGeneric({
  label,
  id,
  name,
  type = "text",
  placeholder,
  error,
  value,
  onChange,
  register,
  onBlur,
  ...rest
}) {
  return (
    <div className="relative blocks h-26">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        register={register}
        onBlur={onBlur}
        className={`w-full px-4 py-3 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264466]`}
        {...rest}
      />

      {error && (
        <p className="text-sm text-red-600 flex items-center mt-0.5">
          <FiAlertCircle className="mr-1"/>
          {error.message}
        </p>
      )}
    </div>
  );
}
