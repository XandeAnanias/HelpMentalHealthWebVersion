import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function InputCpf({
  label,
  id,
  name,
  error,
  value,
  onChange,
  register,
  onBlur,
  ...rest
}) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e) => {
    let rawValue = e.target.value.replace(/\D/g, ""); // remove tudo que não é número

    if (rawValue.length > 11) rawValue = rawValue.slice(0, 11);

    let formattedValue = rawValue;

    if (rawValue.length > 9) {
      formattedValue = rawValue.replace(
        /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
        "$1.$2.$3-$4"
      );
    } else if (rawValue.length > 6) {
      formattedValue = rawValue.replace(
        /(\d{3})(\d{3})(\d{1,3})/,
        "$1.$2.$3"
      );
    } else if (rawValue.length > 3) {
      formattedValue = rawValue.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }

    setInputValue(formattedValue);

    // repassa o valor formatado para o react-hook-form
    if (onChange) {
      onChange({
        ...e,
        target: {
          ...e.target,
          value: formattedValue,
        },
      });
    }
  };

  return (
    <div className="relative blocks h-26">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type="text"
        placeholder="Digite seu CPF"
        value={inputValue}
        onChange={handleChange}
        register={register}
        onBlur={onBlur}
        className={`w-full px-4 py-3 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264466]`}
        {...rest}
      />

      {error && (
        <p className="text-sm text-red-600 flex items-center mt-0.5">
          <FiAlertCircle className="mr-1" />
          {error.message}
        </p>
      )}
    </div>
  );
}
