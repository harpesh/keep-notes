import React, { useState, useRef, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { ClickAwayListener } from '@mui/material';
import Note from '../components/Note';
import Masonry from '@mui/lab/Masonry';




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
    '& .MuiInput-underline:before': {
        borderBottom: 'none', // Remove the bottom border
    },
    '& .MuiInput-underline:after': {
        borderBottom: 'none', // Remove the bottom border on focus
    },
    '&:hover .MuiInput-underline:before': {
        borderBottom: 'none', // Remove the bottom border on hover
    },
    '&:hover .MuiInput-underline:after': {
        borderBottom: 'none', // Remove the bottom border on hover
    },
});

const Hero = () => {



    const [showtextfield, setShowtextfield] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);


    const handleclickaway = () => {
        setShowtextfield(false)
    }

    const handletitlefield = (e) => {
        setTitle(e.target.value)
    }

    const handletextfield = (e) => {
        setContent(e.target.value)
    }

    const addNote = () => {
        if (title && content) {
            const newNote = {
                title,
                content,
                id: Date.now(),
            }
            setNotes([...notes, newNote])
            setShowtextfield(false)
            setTitle('')
            setContent('')
        }
    }


    return (
        <>
            <div className='flex flex-col' >
                <ClickAwayListener onClickAway={handleclickaway}>

                    <Container>
                        {showtextfield &&
                            <CustomTextField
                                placeholder='Title'
                                variant='standard'
                                onChange={handletitlefield}
                                value={title}

                            />
                        }
                        <CustomTextField onClick={() => setShowtextfield(true)}
                            placeholder='Take a note'
                            variant='standard'
                            multiline
                            onChange={handletextfield}
                            value={content}

                        />
                    </Container>
                </ClickAwayListener >
                <div className='flex justify-center ml-96'>
                    <button onClick={addNote}>add</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <Box sx={{ width: 720   , minHeight: 829 }}>
                    <Masonry columns={3} spacing={2}>
                        {notes.map((note) => (
                            <Note
                                key={note.id}
                                note={note}
                                onDelete={() => setNotes(notes.filter((n) => n.id !== note.id))}
                            />
                        ))}
                    </Masonry>
                </Box>
            </div>
        </>
    )
}



export default Hero