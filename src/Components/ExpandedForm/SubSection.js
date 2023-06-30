// import React, { useState } from 'react';
// import { Backdrop, Box, Card, Container, Divider, Grid, Typography, TextField} from "@mui/material";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import UploadIcon from '@mui/icons-material/Upload';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
// import { PrimaryButton } from "../button-styles/primary-button";
// import { OptionsButton } from "../button-styles/options-button";
// import CloseIcon from '@mui/icons-material/Close';
// import { SecondaryButton } from '../button-styles/secondary-button';
// import { collection, addDoc, doc } from "firebase/firestore";
// import { db } from '../../firebase';

// const ExpandedForm = ({requiredInformation, onChange}) => {

//     return (
//     <Backdrop open={isOpened} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        
//         <Card
//             sx={{
//                 width: 700,
//                 height: 700,
//             }}
//             >
//             <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                     <Box m={4}>
//                     <Typography variant="h3">Informações</Typography>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={6} align="right">
//                     <Box m={4}>
//                     <CloseIcon onClick={() => onClose()}/>
//                     </Box>
//                 </Grid>
//             </Grid>

//             <Grid container spacing={2}>
//                 <form onSubmit={handleSubmit}>

//                     {formData.map((subsection, index) => (
//                         <Grid item xs={12} key={index} sx={{ marginLeft: '20px' }}>
//                             <Box m={1}>
//                                 <Typography variant="h5">{subsection['subSection']}</Typography>
//                             </Box>
//                             <Container maxWidth="md">
//                                 <Divider />
//                             </Container>
//                             {subsection['data'].map((element, index) => (
//                                 <Box m={1}>
//                                     <Typography variant="subtitle1">{element}:</Typography>
//                                     <TextField variant="standard" InputProps={{ underline: "true" }}          
//                                     type="text"
//                                     id={element}
//                                     value={subsection['value']}
//                                     onChange={handleChange} />
//                                 </Box>
//                             ))}
//                         </Grid>
//                     ))}
                
//                 </form>
            
//             </Grid>
        
//         </Card>
//     </Backdrop>
//     );
// };

// export default ExpandedForm;
