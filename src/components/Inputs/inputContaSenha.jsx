import { FiAlertCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

export default function InputContaSenha({
  label,
  id,
  name,
  placeholder,
  error,
  value,
  onChange,
  register,
  onBlur,
  ...rest
}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const alternarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="relative blocks">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={mostrarSenha ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          register={register}
          onBlur={onBlur}
          className={`w-full px-3 py-2 border ${
            error ? "border-red-500" : "border-gray-800"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#264466]
          [&::-ms-reveal]:hidden [&::-ms-reveal]:w-0 [&::-ms-reveal]:h-0 /* Edge */
          [&::-webkit-reveal-password-toggle]:hidden [&::-webkit-reveal-password-toggle]:w-0 [&::-webkit-reveal-password-toggle]:h-0 /* Chrome */`
        }
          {...rest}
        />

        <button
          type="button"
          onClick={alternarSenha}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-700 focus:outline-none cursor-pointer"
          aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
        >
          {mostrarSenha ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-600 flex items-center mt-0.5">
          <FiAlertCircle className="mr-1" />
          {error.message}
        </p>
      )}
    </div>
  );
}
