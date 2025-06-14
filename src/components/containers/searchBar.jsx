import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch, placeholder }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // envia para o componente pai
  };

  return (
      <div className="flex items-center bg-white rounded-full px-5 py-3 w-full shadow-md">
        <FaSearch className="text-gray-500 text-lg mr-3" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-700 text-base"
        />
      </div>
  );
}
