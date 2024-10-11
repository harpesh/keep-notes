import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

const Color = () => {
        

    return (
        <div className={` ${noteColor}`}>
            <button 
                onClick={toggleDropdown}
                id="colorButton"
                className="  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none"
                type="button"
            >
                <ColorLensOutlinedIcon/>
            </button>

            {isOpen && (
                <ColorPicker onColorChange={handleColorChange} />
            )}
        </div>
    );
};

export default Color;
