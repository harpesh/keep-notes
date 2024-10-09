import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';


const Note = ({ note, onDelete }) => {
    const { title, content } = note;

    return (
        <div className='max-w-[238px] min-w-[238px]bg-white p-4 m-2 rounded-md  border border-blue-200   scrollbar-hide'>
            <pre className='font-bold'>{title}</pre>
            <div className='overflow-auto  scrollbar-hide'>
                <pre>{content}</pre>
            </div>   

            <div>
                <button
                    onClick={onDelete}
                    className='text-red-500 float-end hover:text-red-700 mt-1'
                >
                    <DeleteOutlineIcon />
                </button>
            </div>
        </div>
    )
}

export default Note