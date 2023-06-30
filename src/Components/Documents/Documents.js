import React, { useState } from 'react';
import { Backdrop, Box, Card, Container, Divider, Grid, Typography, TextField} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UploadIcon from '@mui/icons-material/Upload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { PrimaryButton } from "../button-styles/primary-button";
import { OptionsButton } from "../button-styles/options-button";
import CloseIcon from '@mui/icons-material/Close';
import { SecondaryButton } from '../button-styles/secondary-button';
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';

const Documents = ({documents, setDocuments}) => {

  const handleAddDocumentClick = (document) => {

    console.log("click to add: " , document)

  };

  return (

        <Grid container spacing={2}>

        {documents.map((element, index) => (
            <Grid item xs={12} key={index} sx={{ marginLeft: '20px' }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                {element['status'] == 'missing' && 
                <Box m={1}>
                    <UploadFileIcon 
                    color='error' 
                    variant="contained"  
                    sx={{
                        cursor: 'pointer',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    }} 
                    onClick={handleAddDocumentClick(element['name'])} />
                </Box>}

                {element['status'] == 'uploaded' && 
                <Box m={1}>
                    <CheckCircleIcon color='success'/>
                </Box>}

                <Box m={1}>
                    <Typography variant="h6">{element['name']}</Typography>
                </Box>
            </Grid>
            </Grid>

        ))}
    
        </Grid>
  );
};

export default Documents;
