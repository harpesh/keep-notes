import React, { useState, useRef, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { ClickAwayListener } from '@mui/material';
import Note from '../components/Note';
import Masonry from '@mui/lab/Masonry';
import { useSelector, useDispatch } from 'react-redux'
import { addNote } from '../app/counterslice'
import { useForm } from 'react-hook-form';


const Container = styled(Box)`
display: flex;
flex-direction: column;
width: 500px;
padding:10px 15px;
border-radius:8px;
border-color:#e0e0e0;
box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
margin:auto;
justify-content: center;
`

const CustomTextField = styled(TextField)({
    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
        borderBottom: 'none',
    },
    '&:hover .MuiInput-underline:before': {
        borderBottom: 'none',
    },
});

const Hero = () => {
    const [showtextfield, setShowtextfield] = useState(false)
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm();
    const keepnote = useSelector(state => state.keepnotes.data);
    console.log(keepnote)
    const handleclickaway = () => {
        setShowtextfield(false)
    }


    const onSubmit = (data) => {
        const newNote = {
            title: data.title,
            content: data.content,
            id: Date.now(), 
        };
        dispatch(addNote(newNote));
        reset(); 
        setShowtextfield(false); 
    };



return (
    <>
        <div className='flex flex-col' >
            <form onSubmit={handleSubmit(onSubmit)}>
                <ClickAwayListener onClickAway={handleclickaway}>

                    <Container>
                    {showtextfield && (
                                <CustomTextField
                                    {...register('title')}
                                    placeholder='Title'
                                    variant='standard'
                                />
                            )}
                        <CustomTextField 
                        onClick={() => setShowtextfield(true)}
                        {...register('content')}
                            placeholder='Take a note'
                            variant='standard'
                            multiline

                        />
                    </Container>
                </ClickAwayListener >
                <div className='flex justify-center ml-96'>
                    <button type='submit' className='p-2 m-1 text-white font-bold w-14 rounded bg-blue-600' >add</button>
                </div>
            </form>
        </div>
        <div className='flex justify-center'>
            <Box sx={{ width: 720, minHeight: 829 }}>
                <Masonry columns={3} spacing={2}>
                    {keepnote?.map((note) => (
                        <Note
                            key={note.id}
                            note={note}
                        />
                    ))}
                </Masonry>
            </Box>
        </div >
    </>
)
}



export default Hero