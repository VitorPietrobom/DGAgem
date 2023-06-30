import { Box, Grid, Typography } from "@mui/material";
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
import ExpandedForm from "../../Components/ExpandedForm/ExpandedForm";
import { FormPatterns } from "../../Utils/FormPatterns";

import { db } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";


export const Home = (): ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();
    const userUid = location.state?.userUid;
    const userPhoto = location.state?.userPhoto;
    const userName = location.state?.userName;

    const userRef = doc(db, "users", userUid);

    const [addNewForm, setAddNewForm] = useState(false);
    const [requiredInformation, setRequiredInformation] = useState([]);

    const [visitExpandedForm, setVisitExpandedForm] = useState(false);

    const [requests, setRequests] = useState<DocumentData[]>([]);

    const handleCloseForm = () => {
        setAddNewForm(false);
    };

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/login');
        }).catch((error) => {
            console.log(error);
        });
    };
    
    const handleFormSent = (formData: any, isInternational: any) => {
        /*
        APLICAR LÓGICA
        Viagem nacional
            3 Diárias – Solicitação de Antecipação de Despesa de Viagem (diária)
            2 Passagens aéreas – Requisição de passagem aérea
            5 Seguro – Solicitação de Seguro – Viagens Acadêmicas no país

        Viagem Internacional
            1 Aprovação prévia de despesas – internacional
            3 Diárias – Solicitação de Antecipação de Despesa de Viagem (diária)
            2(int) Passagens aéreas – Requisição de passagem aérea (internacional)
            4 Seguro – Solicitação de Seguro  internacional

        OPÇOES: DIARIA, PASSAGEM E SEGURO
        */
        const formsRequired: any[] = [];
        if (isInternational){

            formsRequired.push(FormPatterns.aprovaçãoPréviaDeDespesas())

            if (formData.products.includes("airTicket")){
                formsRequired.push(FormPatterns.requisicaoPassagemAereaInternacional())
            }
            if (formData.products.includes("hotelDaily")){
                formsRequired.push(FormPatterns.solicitacaoAntecipacaoDespesaViagem())
            }
            if (formData.products.includes("insurance")){
                formsRequired.push(FormPatterns.solicitacaoSeguroViagemInternacional())
            }

        } else {    
            
            if (formData.products.includes("airTicket")){
                formsRequired.push(FormPatterns.requisicaoPassagemAereaNacional())
            }
            if (formData.products.includes("hotelDaily")){
                formsRequired.push(FormPatterns.solicitacaoAntecipacaoDespesaViagem())
            }
            if (formData.products.includes("insurance")){
                formsRequired.push(FormPatterns.solicitacaoSeguroViagemAcademicasPais())
            }

        }

        const joinedArray = formsRequired.reduce((result, currentArray) => {
            console.log(currentArray)
            currentArray.forEach((obj: { subSection: any; data: any; }, index: any) => {
                const existingIndex = result.findIndex((item: { subSection: any; }) => item.subSection === obj.subSection);
                if (existingIndex !== -1) {
                    const uniqueData = Array.from(new Set([...result[existingIndex].data, ...obj.data]));
                    result[existingIndex].data = uniqueData;
                } else {
                    result.push(obj);
                }
            });
            return result;
        }, []);
        
        console.log(joinedArray);
        setRequiredInformation(joinedArray)

        setVisitExpandedForm(true)
      }
    
    const addNewFormClick = () => {
        setAddNewForm(true);
      };

    const handleCloseExpandedForm = () => {
        setVisitExpandedForm(false);
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
                onSend={handleFormSent}
                userUid={userUid}
            />}

            {visitExpandedForm && <ExpandedForm
                isOpened={visitExpandedForm}
                onClose={handleCloseExpandedForm}
                requiredInformation={requiredInformation}
            />}
        
            <CssBaseline/>

                <div className="profile">
                    <ProfileDropdown onClick={handleLogout} src={userPhoto} name={userName}/>
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