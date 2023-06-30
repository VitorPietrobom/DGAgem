import React, {useState} from 'react';
import './ProfileDropdown.css'
import { Box, Button, Typography, Stack } from '@mui/material';


const ProfileDropdown = ({onClick, src, name}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(src)

    if (src === null) {
        src = "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Box sx={{justifyContent:"center", display:"flex"}}>
            <Stack>
                <Box
                    component="img"
                    sx={{
                        flexDirection: "column",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        border: "solid 1px rgba(0, 0, 0, 0.432)",
                        marginBottom: isOpen ? "5px" : 0,
                        cursor: "pointer"
                    }}
                    onClick={toggleDropdown}
                    alt="profile"
                    src={src}
                />
                {isOpen && (
                    <Box sx={{
                            backgroundColor: "rgb(37, 37, 37)",
                            width: "200%",
                            marginTop: "5px",
                            left: "-50%",
                            borderRadius: "5%",
                            justifyContent: "center",
                            display: "flex",
                            position: "absolute",
                            top: "110%"
                        }}>
                        <Stack direction="column">
                            <Typography sx={{color:"white", paddingLeft: "10%"}}>{name}</Typography>
                            <Button variant="text" onClick={onClick}>Logout</Button>
                        </Stack>
                    </Box>
                )}
            </Stack>
        </Box>
    );
};

export default ProfileDropdown;