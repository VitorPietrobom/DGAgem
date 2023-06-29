import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { TripCard } from "../../Components/trip-card/trip-card";
import { Plus } from "../../Components/Plus/Plus";
import { useEffect, useState } from "react";
import NewTripForm from "../../Components/NewTripForm/NewTripForm"
import { isOpaqueType } from "@babel/types";
import CssBaseline from '@mui/material/CssBaseline';
import titulo from '../../assets/titulo.png';
import './home.css';
import { Stack } from "@mui/system";
import ProfileDropdown from "../../Components/ProfileDropdown/ProfileDropdown ";

export const Home = (): ReactElement => {

    const [addNewForm, setAddNewForm] = useState(false);

    const handleCloseForm = () => {
        setAddNewForm(false);
      };
    
    const addNewFormClick = () => {
        setAddNewForm(true);
      };

    return (
        <div className="home-container">
            
            {addNewForm && <NewTripForm
                isOpened={addNewForm}
                onClose={handleCloseForm}
            />}
            
        
            <CssBaseline/>
            <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
                <div className="logo">
                    <img src={titulo} alt='title'/>
                </div>
                <div className="profile">
                    <ProfileDropdown onClick={console.log("Profile Click")}/>
                </div>
            </Stack>
            
            <h1>Minhas Viagens</h1>
            <Grid 
                sx={{backgroundColor: "white"}}
                container
                spacing={2}
                columns={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                justifyContent={'center'}
                alignItems={'center'}
                >
                <Grid item key={0} >
                    <Plus onClick={addNewFormClick}/>
                </Grid>
                
                {Array(3).fill(null).map((_, index) => {
                    return (
                        <Grid
                        item
                        key={index+1}
                        >
                            <TripCard
                            cardTitle={'New York - EUA'}
                            tripStartDate={'17/07/2023'}
                            tripEndDate={'31/07/2023'}
                            airlineTickets={'Confirmado'}
                            reservations={'Aguardando Resposta'}
                            insurance={'Confirmado'}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}