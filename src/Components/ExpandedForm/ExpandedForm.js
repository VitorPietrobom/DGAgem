import React, { useState, useEffect } from 'react';
import { Backdrop, Box, Card, Container, Divider, Grid, Typography, TextField, CardContent, styled} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UploadIcon from '@mui/icons-material/Upload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { PrimaryButton } from "../button-styles/primary-button";
import { OptionsButton } from "../button-styles/options-button";
import CloseIcon from '@mui/icons-material/Close';
import Documents from '../Documents/Documents';
import { SecondaryButton } from '../button-styles/secondary-button';
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';

const StyledCard = styled(Card)(({ theme }) => ({
    width: 700,
    maxWidth: 700,
    maxHeight: 700,
    overflow: 'auto',
  }));

const ExpandedForm = ({isOpened, onClose, requiredInformation, initial_documents}) => {

    const [formData, setFormData] = useState([]) 
    const [documents, setDocuments] = useState(initial_documents)

    useEffect(() => {

        const convertedObject = requiredInformation.map(obj => {
            const newData = obj.data.map(name => ({ name: name, value: "" }));
            return { subSection: obj.subSection, data: newData };
          });

          setFormData(convertedObject)

      }, []);


    const handleChange = (sectionIndex, dataIndex, newValue) => {
        setFormData(prevData => {
          const newData = [...prevData];
          newData[sectionIndex].data[dataIndex].value = newValue;
          return newData;
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose()
      };

    const handleSaveAndClose = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose()
      };

    return (
    <Backdrop open={isOpened} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        
        <StyledCard
            >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box m={4}>
                    <Typography variant="h3">Informações</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} align="right">
                    <Box m={4}>
                    <CloseIcon onClick={() => onClose()}/>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2}>

                <Grid item xs={12} sx={{ marginLeft: '20px' }}>
                    <form onSubmit={handleSubmit}>

                        {formData.map((subSection, subSectionIndex) => (
                            <Grid item xs={12} key={subSectionIndex} sx={{ marginLeft: '20px' }}>

                                <Box m={1} mt={3}>
                                    <Typography variant="h5">{subSection['subSection']}</Typography>
                                </Box>
                                <Container maxWidth="md">
                                    <Divider />
                                </Container>
                                {subSection['data'].map((dataElement, dataIndex) => (
                                    <Box m={1}  sx={{ marginLeft: '20px' }}>
                                        <Typography variant="subtitle1">{dataElement.name}:</Typography>
                                        <TextField variant="standard" InputProps={{ underline: "true" }}          
                                        type="text"
                                        id={dataElement.name}
                                        value={dataElement.value}
                                        onChange={e => handleChange(subSectionIndex, dataIndex, e.target.value)} />
                                    </Box>
                                ))}
                            </Grid>
                        ))}
                        
                        <Grid item xs={12} sx={{ marginLeft: '20px' }}>
        
                                <Box m={1} mt={3}>
                                    <Typography variant="h5">Documentos</Typography>
                                </Box>
                                <Container maxWidth="md">
                                    <Divider />
                                </Container>
                                <Documents documents={documents} setDocuments={setDocuments}/>
                            </Grid>
                        
                        <Grid item xs={12} mb={3}>
                            <Container maxWidth="md">
                                <Divider />
                            </Container>
                            <Grid mt={1} container direction="row" justifyContent="center" alignItems="center" spacing={4}>
                                <Grid item > 
                                    <SecondaryButton variant="contained" onClick={handleSaveAndClose}>SALVAR</SecondaryButton>
                                </Grid>
                                <Grid item > 
                                    <PrimaryButton variant="contained"  type='submit'>ENVIAR</PrimaryButton>
                                </Grid>
                            
                            </Grid>
                        </Grid>
                    
                    </form>
                </Grid>
            </Grid>
        
        </StyledCard>
    </Backdrop>
    );
};

export default ExpandedForm;

