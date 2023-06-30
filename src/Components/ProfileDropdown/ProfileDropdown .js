import React, {useState} from 'react';
import './ProfileDropdown.css'
import { Box, Button, Typography, Stack } from '@mui/material';


const ProfileDropdown = ({onClick, src, name}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='container'>
            <img onClick={toggleDropdown} src={src} className='image-profile' alt=''></img>
            {isOpen && (
                <Box sx={{backgroundColor:" rgb(37, 37, 37)", width:"200%", marginTop: "5px", borderRadius: "5%", justifyContent: "center", display: "flex"}}>
                    <Stack direction="column">
                        <Typography sx={{color:"white", paddingLeft: "10%"}}>{name}</Typography>
                        <Button variant="text" onClick={onClick}>Logout</Button>
                    </Stack>
                </Box>
            )}
        </div>
    );
};

export default ProfileDropdown;