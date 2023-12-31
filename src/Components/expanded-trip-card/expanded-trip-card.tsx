import { Backdrop, Box, ButtonProps, Card, CardContent, CardMedia, Container, Divider, Grid, IconButton, Typography, styled } from "@mui/material";
import { ReactElement } from "react";
import { ExpandedTripCardProps } from "../../Components/expanded-trip-card/types";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { common, grey } from '@mui/material/colors';
import { PrimaryButton } from "../../Components/button-styles/primary-button";
import { InformationStepper } from "../../Components/information-stepper/information-stepper";

const BackButton = styled(IconButton)<ButtonProps>(({ theme }) => ({
    color: "black",
    backgroundColor: common.white,
    '&:hover': {
      backgroundColor: grey[300],
    },
}));

export const ExpandedTripCard = ({
    isOpened,
    onCLose,
    photoUrlsObject,
    tripCardInfo
}: ExpandedTripCardProps): ReactElement => {
    return (
        <Backdrop open={isOpened} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Card
                sx={{
                    width: { xs: 500, sm: 600, md: 800, lg: 800},
                    height: { xs: 600, sm: 550, md: 700, lg: 600},
                }}
            >
                <Box sx={{ position: "relative", color: "white", opacity: 1 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={`${photoUrlsObject.full}`}
                        alt={`${tripCardInfo.cardTitle}`}
                    />
                    <BackButton
                        sx={{ position: "absolute", bottom: 150, left: 16 }}
                        onClick={onCLose}
                    >
                        <ArrowBackIcon/>
                    </BackButton>
                    <Typography
                        sx={{ backgroundColor: "grey", position: "absolute", bottom: 8, left: 16}}
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        {`${tripCardInfo.cardTitle}`}
                    </Typography>
                    <Typography
                        sx={{ backgroundColor: "grey", position: "absolute", bottom: 8, right: 16}}
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        {`${tripCardInfo.tripStartDate} - ${tripCardInfo.tripEndDate}`}
                    </Typography>
                </Box>
                <CardContent>
                    <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 6, lg: 4 }} mb={2}>
                        <Grid item>
                            <PrimaryButton variant="contained">Formulários</PrimaryButton>
                        </Grid>
                        <Grid item>
                            <PrimaryButton variant="contained">Documentos</PrimaryButton>
                        </Grid>
                    </Grid>
                    <Container maxWidth="md" sx={{marginBottom: 5 }}>
                        <Divider />
                    </Container>
                    <InformationStepper
                        activeStep={3}
                        steps={["Formulários", "Documentos", "Escolha do Voo", "Compra dos assentos", "Cartão de embarque"].map((label) => {
                            return { label }
                        })}
                    />
                    <InformationStepper
                        activeStep={1}
                        steps={["Formulários", "Comprovante de pagamento"].map((label) => {
                            return { label }
                        })}
                    />
                    <InformationStepper
                        activeStep={3}
                        steps={["Formulário", "Apólice do seguro"].map((label) => {
                            return { label }
                        })}
                    />
                </CardContent>
            </Card>
        </Backdrop>
    )
}