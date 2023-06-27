import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { TripCard } from "../../Components/trip-card/trip-card";
import { Plus } from "../../Components/Plus/Plus";
import { useEffect, useState } from "react";
import NewTripForm from "../NewTripForm/NewTripForm"
import { isOpaqueType } from "@babel/types";


export const Home = (): ReactElement => {

    const [addNewForm, setAddNewForm] = useState(false);

    const handleCloseForm = () => {
        setAddNewForm(false);
      };
    
    const addNewFormClick = () => {
        setAddNewForm(true);
      };

    return (
        <>
            
            {addNewForm && <NewTripForm
                isOpened={addNewForm}
                onClose={handleCloseForm}
            />}
            
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
        </>
    )
}