import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('#dropdownMenuIconButton') && !event.target.closest('#dropdownDots')) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative inline-block text-left">
            <button 
                onClick={toggleDropdown}
                id="dropdownMenuIconButton"
                className="inline-flex items-center p-2 text-sm font-small text-center text-black  rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none dark:text-black focus:ring-gray-200 dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-gray-200" 
                type="button"
            >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>

            {isOpen && (
                <div id="dropdownDots" className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-200 dark:divide-gray-200">
                    <ul className="py-2 text-sm text-black dark:text-black" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-300 ">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-300 ">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-300 ">Earnings</a>
                        </li>
                    </ul>
                   
                </div>
            )}
        </div>
    );
}

export default Dropdown;
    