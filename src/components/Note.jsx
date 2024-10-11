import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../app/counterslice'
import Modal from './Modal';
import Dropdown from './Dropdown';
import Color from './Color ';

const Note = ({ note }) => {
    const { title, content, id } = note;
    const [modalopen, setModalopen] = useState(false)
    const dispatch = useDispatch()
    const [noteColor, setNoteColor] = useState('bg-white');

    

    const truncate = (text, maxlength) => {
        if (text.length <= maxlength) return text;
        return text.slice(0, maxlength) + "..."
    }

    const handleNoteClick = () => {
        setModalopen(true);
    };

    const handleclose = () => {
        setModalopen(false)
    }

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleColorChange = (color) => {
        setNoteColor(color);
        setIsOpen(false); // Close dropdown after selection
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('#colorButton') && !event.target.closest('.color-picker')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);


    return (
        <>
            <div onClick={handleNoteClick}
                className='max-w-[238px] min-w-[238px]bg-white p-2 m-4 rounded-md  border border-blue-200   scrollbar-hide'>
                <pre className='font-bold'>{title}</pre>
                <div className='overflow-auto  scrollbar-hide'>
                    <pre>{truncate(content, 10)}</pre>
                </div>

                <div className='flex float-end ' onClick={(e)=>{e.stopPropagation()}}>
                    <span className='flex items-center justify-center'>
                        <Color/>
                        <Dropdown />
                    </span>
                    <button
                        onClick={() => dispatch(deleteNote(id))}
                        className='text-red-500 float-end hover:text-red-700 mt-1'
                    >

                        <DeleteOutlineIcon />
                    </button>
                </div>
                <div className='z-1 '>
                    <Modal
                        onClick={(e) => e.stopPropagation()}
                        isOpen={modalopen}
                        onClose={handleclose}
                        title={title}
                        content={content}
                    />
                </div>

            </div>



        </>
    )
}

export default Note