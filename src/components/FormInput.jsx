import React from 'react'

export const FormInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder,
  required = false,
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-primary mb-2"
      >
        {label}
        {required && <span className="text-gray-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 invalid:border-gray-500 invalid:focus:border-gray-400 invalid:focus:ring-gray-400 transition-colors duration-300"
        aria-describedby={name + '-error'}
      />
    </div>
  )
}
