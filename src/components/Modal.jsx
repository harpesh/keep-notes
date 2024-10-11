import React from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' onClick={(e) => e.stopPropagation()} >
            <div className='bg-white p-4 rounded-md max-w-md w-full' onClick={(e) => e.stopPropagation()}>
                <h2 className='font-bold text-lg'>{title}</h2>
                <pre>{content}</pre>
                <div >
                    <button
                        onClick={onClose}
                        className='mt-4 bg-red-500 text-white px-4 py-2 rounded float-end'>Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
