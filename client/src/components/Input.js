import React from 'react';

function Input({label, state, setState, placeholder, type}) {
  return (
    <div className='mb-6'>
        <p className='mb-2 capitalize text-xs'>{label}</p>
        <input
         type={type} 
         value={state}
         placeholder={placeholder}
         onChange={(e) => setState(e.target.value)}
         className='w-full border-b border-0 py-2 text-xs opacity-70% focus:outline-none focus:opacity-100 transition-all placeholder-gray-500'
        />

    </div>
  )
}

export default Input