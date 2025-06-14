import React from "react";
import Select from "react-select";
import { FiAlertCircle } from "react-icons/fi";
import { useEstadosIBGE } from "../../hook/estadosAPI";
import { crpPorEstado } from "../../hook/crpEstados";

export default function SelectEstadoComCRP({
  label,
  name,
  error,
  value,
  onChange,
}) {
  const { estados, loading } = useEstadosIBGE();

  // Monta as opções para o select
  const options = estados.map((estado) => ({
    value: estado.sigla,
    label: `${estado.nome} - CRP ${crpPorEstado[estado.sigla]}ª Região`,
  }));

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#F9FAFB",
      borderColor: error ? "#f87171" : "#D1D5DB",
      borderRadius: ".5rem",
      boxShadow: state.isFocused
        ? error
          ? "0 0 0 2px rgba(239, 68, 68, 0.5)"
          : "0 0 0 2px rgba(38, 68, 102, 0.5)"
        : base.boxShadow,
      "&:hover": {
        cursor: "pointer",
        outline: "none",
        ring: "#264466",
      },
      "&:focus":{
        
      },
      padding: "6px",

    }),
     option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected
      ? "#264466" // ✅ Cor do item SELECIONADO
      : isFocused
      ? "#E6EEF6" // ✅ Cor do item ao passar o mouse (hover)
      : "white",
    color: isSelected ? "white" : "#264466",
    cursor: "pointer",
  }),
    placeholder: (base) => ({
      ...base,
      color: "#9CA3AF",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#264466",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  return (
    <div className="relative blocks h-24">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <Select
        id={name}
        name={name}
        isLoading={loading}
        options={options}
        placeholder="Selecione o estado do seu CRP"
        styles={customStyles}
        value={options.find((option) => option.value === value) || null}
        onChange={(selected) => onChange(selected ? selected.value : "")}
        isClearable
      />

      {error && (
        <p className="text-sm text-red-600 flex items-center mt-1">
          <FiAlertCircle className="mr-1" />
          {error.message}
        </p>
      )}
    </div>
  );
}
