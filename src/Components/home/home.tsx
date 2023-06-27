import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { TripCard } from "../trip-card/trip-card";
import { Plus } from "../Plus/Plus";


export const Home = (): ReactElement => {
    return (
        <>
            
            
            <Grid 
                sx={{backgroundColor: "white"}}
                container
                spacing={2}
                columns={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                justifyContent={'center'}
                alignItems={'center'}
                >
                <Grid item key={0} >
                    <Plus onClick={console.log('test')}/>
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