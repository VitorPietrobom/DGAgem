import { Card, CardMedia, CardContent, Typography, Grid, CardActionArea, useTheme } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { getRandomCityPhoto } from "../../apis/unsplash/unsplash-api";
import { PhotoUrls } from "../../apis/unsplash/types";
import { TripCardProps } from "./types";
import { ExpandedTripCard } from "../expanded-trip-card/expanded-trip-card";

const GridSx = {
    margin: 0,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}

export const TripCard = ({
    cardTitle,
    tripStartDate,
    tripEndDate,
    airlineTickets,
    reservations,
    insurance,
    savedForLater
}: TripCardProps): ReactElement => {

    const theme = useTheme();

    const [photoUrlsObject, setPhotoUrlsObject] = useState<PhotoUrls>({
        full: "",
        raw: "",
        regular: "",
        small: "",
        small_s3: "",
        thumb: ""
    });

    const [mouseEntered, setMouseEntered] = useState(false);
    const [expandTripCard, setExpandTripCard] = useState(false);

    const getPhoto = (response: any) => {
        const resultsLength = response.results.length - 1;
        const randomIndex = Math.round(Math.random() * resultsLength);
        const photoUrls = response.results[randomIndex].urls;
        setPhotoUrlsObject(photoUrls);
    }

    useEffect(() => {
        getRandomCityPhoto(cardTitle, getPhoto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <ExpandedTripCard
                isOpened={expandTripCard}
                onCLose={() => setExpandTripCard(false)}
                tripCardInfo={{
                    cardTitle,
                    tripStartDate,
                    tripEndDate,
                    airlineTickets,
                    reservations,
                    insurance,
                    savedForLater
                }}
                photoUrlsObject={photoUrlsObject}
            />
            <CardActionArea
                onClick={() => setExpandTripCard(true)}
            >
                <Card
                    sx={{
                        width: mouseEntered ? 600 : 500,
                        height: mouseEntered ? 441 : "auto",
                        position: "relative"
                    }}
                    onMouseEnter={() => setMouseEntered(true)}
                    onMouseLeave={() => setMouseEntered(false)}
                    style={{transition: theme.transitions.create("all", {
                        easing: theme.transitions.easing.sharp, 
                        duration: theme.transitions.duration.leavingScreen
                    })}}
                >
                    
                        <CardMedia
                            component="img"
                            height={mouseEntered ? "280" : "200"}
                            image={`${photoUrlsObject.full}`}
                            alt={`${cardTitle}`}
                            />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6} m={6} lg={6} sx={GridSx}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardTitle}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} m={6} lg={6} sx={GridSx}>
                                    <Typography gutterBottom variant="body2" component="div">
                                        {`${tripStartDate} - ${tripEndDate}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} m={6} lg={6} sx={GridSx}>
                                    <Typography gutterBottom variant="body1" component="div">
                                        Passagens Aéreas
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} m={6} lg={6} sx={GridSx}>
                                    <Typography gutterBottom variant="body1" component="div">
                                        {airlineTickets}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} m={6} lg={6} sx={GridSx}>
                                    <Typography gutterBottom variant="body1" component="div">
                                        Diárias
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} m={6} lg={6} sx={GridSx}>
                                    <Typography gutterBottom variant="body1" component="div">
                                        {reservations}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6} m={6} lg={6} sx={GridSx}>
                                    <Typography gutterBottom variant="body1" component="div">
                                        Seguro
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} m={6} lg={6} sx={GridSx}>
                                    <Typography gutterBottom variant="body1" component="div">
                                        {insurance}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                </Card>
            </CardActionArea>
        </>
    )
}