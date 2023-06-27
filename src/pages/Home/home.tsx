import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { TripCard } from "../../components/trip-card/trip-card";
import { Plus } from "../../components/Plus/Plus";
<<<<<<< refs/remotes/origin/main:src/Components/home/home.tsx
import { useEffect, useState } from "react";
import NewTripForm from "../../components/NewTripForm/NewTripForm"
import { isOpaqueType } from "@babel/types";
=======
import CssBaseline from '@mui/material/CssBaseline';
>>>>>>> Add routing and correct folders:src/pages/Home/home.tsx


export const Home = (): ReactElement => {

    const [addNewForm, setAddNewForm] = useState(false);

    const handleCloseForm = () => {
        setAddNewForm(false);
      };
    
    const addNewFormClick = () => {
        setAddNewForm(true);
      };

    return (
<<<<<<< refs/remotes/origin/main:src/Components/home/home.tsx
        <>
            
            {addNewForm && <NewTripForm
                isOpened={addNewForm}
                onClose={handleCloseForm}
            />}
            
=======
        <div>
            <CssBaseline/>
>>>>>>> Add routing and correct folders:src/pages/Home/home.tsx
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