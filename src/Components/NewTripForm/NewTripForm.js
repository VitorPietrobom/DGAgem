import React, { useState } from 'react';
import { Backdrop, Box, Card, Container, Divider, Grid, Typography, TextField} from "@mui/material";
import { PrimaryButton } from "../button-styles/primary-button";
import { OptionsButton } from "../button-styles/options-button";
import CloseIcon from '@mui/icons-material/Close';
import { SecondaryButton } from '../button-styles/secondary-button';
import { collection, addDoc, doc } from "firebase/firestore";
import './NewTripForm.css'
import { db } from '../../firebase';

const NewTripForm = ({isOpened, onClose}) => {
 
    const addFormFirebase = async () => {
        try {
            const userRef = doc(db, "users", "57Lx42AzPp8eAn2p8fSE");
            const docRef = await addDoc(collection(userRef, "requests"),formData);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };


  const [isInternational, setIsInternational] = useState(false)

  const handleCheckbox = () => {
    console.log(isInternational)
    setIsInternational((prevState) => !prevState)
  }

  const [formData, setFormData] = useState({
    destination: '',
    products: [],
    savedForLater: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOptionClick = (value) => {

    const updatedProducts = formData.products.includes(value)
      ? formData.products.filter((destination) => destination !== value)
      : [...formData.products, value];
    
    setFormData({
      ...formData,
      products: updatedProducts
    });

    console.log(updatedProducts)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormFirebase();
    console.log(formData);
    onClose()
  };

  const handleSaveAndClose = (e) => {
    e.preventDefault();
    formData.savedForLater = true;
    addFormFirebase();
    console.log(formData);
    onClose()
  };

  return (
    <Backdrop open={isOpened} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        
        <Card
            sx={{
                width: 700,
                height: 700,
            }}
            >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box m={4}>
                    <Typography variant="h3">Formulário</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} align="right">
                    <Box m={4}>
                    <CloseIcon onClick={() => onClose()}/>
                    </Box>
                </Grid>
                </Grid>
            <form onSubmit={handleSubmit}>
                <Container m={2} maxWidth="md" className="form-field">
                <div style={{ display: 'grid', gap: '16px' }}>
                    <Typography variant="subtitle1">Para onde será sua viagem?</Typography>
                    <div style={{display:'flex', alignItems:'flex-end', justifyContent: 'space-between'}}>
                      <TextField label="Destino" variant="standard" InputProps={{ underline: "true" }}          
                      type="text"
                      style={{width: "400px"}}
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange} />
                      <label style={{display:'flex'}}>
                        <input type="checkbox" checked={isInternational} onChange={handleCheckbox}></input>
                        <div>Viagem internacional</div>
                      </label>
                    </div>
                </div>
                </Container>
                <Container maxWidth="md" sx={{marginBottom: 5 }}>
                    <Divider />
                </Container>
                <Container maxWidth="md" div className="form-field"  style={{ display: 'grid', gap: '16px' }}>
                    <Typography variant="subtitle1">Quais produtos deseja solicitar?</Typography>
                    <Container maxWidth="md" className="options">
                        <OptionsButton
                        type="button"
                        onClick={() => handleOptionClick('airTicket')}
                        isActive={formData.products.includes('airTicket')}
                        className={formData.products.includes('airTicket')  ? 'selected' : ''}
                        >
                        Passagem Aérea
                        </OptionsButton>
                        <OptionsButton
                        type="button"
                        onClick={() => handleOptionClick('hotelDaily')}
                        isActive={formData.products.includes('hotelDaily')}
                        className={formData.products.includes('hotelDaily') ? 'selected' : ''}
                        >
                        Diárias
                        </OptionsButton>
                        <OptionsButton
                        type="button"
                        onClick={() => handleOptionClick('insurance')}
                        isActive={formData.products.includes('insurance')}
                        className={formData.products.includes('insurance') ? 'selected' : ''}
                        >
                        Seguro
                        </OptionsButton>
                    </Container>
                    <Container maxWidth="md" sx={{marginTop: 5 }}>
                        <Divider />
                    </Container>
                </Container>
                <div className="form-buttons">
                    <SecondaryButton variant="contained" onClick={handleSaveAndClose}>SALVAR PARA DEPOIS</SecondaryButton>
                    <PrimaryButton variant="contained"  type='submit'>ENVIAR</PrimaryButton>
                </div>
            </form>
        </Card>
    </Backdrop>
  );
};

export default NewTripForm;
