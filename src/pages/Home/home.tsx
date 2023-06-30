import { Box, Button, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import { TripCard } from "../../Components/trip-card/trip-card";
import { Plus } from "../../Components/Plus/Plus";
import { useEffect, useState } from "react";
import NewTripForm from "../../Components/NewTripForm/NewTripForm"
import CssBaseline from '@mui/material/CssBaseline';
import titulo from '../../assets/titulo.png';
import './home.css';
import { Stack } from "@mui/system";
import ProfileDropdown from "../../Components/ProfileDropdown/ProfileDropdown ";
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db, auth, googleProvider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export const Home = (): ReactElement => {
    const userRef = doc(db, "users", "57Lx42AzPp8eAn2p8fSE");

    const [addNewForm, setAddNewForm] = useState(false);
    const [requests, setRequests] = useState<DocumentData[]>([]);

    const handleCloseForm = () => {
        setAddNewForm(false);
      };
    
    const addNewFormClick = () => {
        setAddNewForm(true);
      };

    const loginTest = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            
            
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
      };

    useEffect(() => {
        const fetchRequests = async () => {
            const querySnapshot = await getDocs(collection(userRef, "requests"));
            const requestsData = querySnapshot.docs.map((doc) => doc.data());
            setRequests(requestsData);
        };
      
        fetchRequests();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [addNewForm]);

    return (
        <div className="home-container">
            
            {addNewForm && <NewTripForm
                isOpened={addNewForm}
                onClose={handleCloseForm}
            />}
            
        
            <CssBaseline/>

                <div className="profile">
                    <ProfileDropdown/>
                </div>


                <img src={titulo} alt='title'/>

            <h1>Minhas Viagens</h1>
            
            <Stack direction="row" spacing={ 0 }>
            <Box sx={{ width: 50, height: 50 }}>
                <Plus onClick={addNewFormClick}/>
            </Box>
            <Grid 
                container
                spacing={2}
                justifyContent={'start'}
                paddingLeft={{xs: 2, md: 10, lg: 15}}
                >
                {requests.map((request, index) => {
                    return (
                        <Grid
                        item
                        key={index+1}
                        >
                            <Box sx={{ position: 'relative' }}>
                                {request.savedForLater && (
                                    <Box
                                        sx={{
                                        position: 'absolute',
                                        backgroundColor: 'brown',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '100%',
                                        }}
                                    >
                                        <Typography sx={{alignSelf: "center"}}>Salvo para depois</Typography>
                                    </Box>
                                )}
                                    <TripCard
                                    cardTitle={request.destination}
                                    tripStartDate={'17/07/2023'}
                                    tripEndDate={'31/07/2023'}
                                    airlineTickets={'Confirmado'}
                                    reservations={'Aguardando Resposta'}
                                    insurance={'Confirmado'}
                                    savedForLater={request.savedForLater}
                                    />
                            </Box>   
                        </Grid>
                    )
                })}
            </Grid>
            </Stack>
        </div>
    )
}