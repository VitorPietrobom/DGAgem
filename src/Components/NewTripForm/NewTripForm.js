import React, { useState } from 'react';
import { Backdrop, Box, ButtonProps, Card, Button, CardContent, CardMedia, CardActions, Container, Divider, Grid, IconButton, Typography, styled, TextField} from "@mui/material";
import { PrimaryButton } from "../button-styles/primary-button";
import { OptionsButton } from "../button-styles/options-button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { common, grey } from '@mui/material/colors';
import { SecondaryButton } from '../button-styles/secondary-button';
import './NewTripForm.css'

const NewTripForm = ({isOpened, onClose}) => {
  const [formData, setFormData] = useState({
    destination: '',
    products: []
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
    // Handle form submission logic here
    console.log(formData);
    onClose()
  };

  const handleSaveAndClose = (e) => {
    e.preventDefault();
    // Handle save form logic here
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
                    <TextField label="Destino" variant="standard" InputProps={{ underline: true }}          
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange} />
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