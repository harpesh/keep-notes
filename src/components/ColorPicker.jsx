import React from 'react';

const colorOptions = [
    { value: 'bg-red-500' },
    { value: 'bg-green-500' },
    { value: 'bg-blue-500' },
    { value: 'bg-yellow-500' },
];

const ColorPicker = ({ onColorChange }) => {
    return (
        <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2 text-sm text-gray-700">
                {colorOptions.map((color) => (
                    <li key={color.value}>
                        <button
                            onClick={() => onColorChange(color.value)}
                            className={`block px-4 py-2 text-left w-full hover:bg-gray-100 ${color.value} text-white`}
                        >
                            {color.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColorPicker;
