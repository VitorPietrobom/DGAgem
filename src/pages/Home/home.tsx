import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import { TripCard } from "../../Components/trip-card/trip-card";
import { Plus } from "../../Components/Plus/Plus";
import { useEffect, useState } from "react";
import NewTripForm from "../../Components/NewTripForm/NewTripForm"
import Documents from "../../Components/Documents/Documents"
import { isOpaqueType } from "@babel/types";
import CssBaseline from '@mui/material/CssBaseline';
import titulo from '../../assets/titulo.png';
import './home.css';
import { Stack } from "@mui/system";
import ProfileDropdown from "../../Components/ProfileDropdown/ProfileDropdown ";
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ExpandedForm from "../../Components/ExpandedForm/ExpandedForm";



export const Home = (): ReactElement => {
    const userRef = doc(db, "users", "57Lx42AzPp8eAn2p8fSE");

    const [addNewForm, setAddNewForm] = useState(false);
    const documents = [
        {
            "name": "CNH",
            "status": "uploaded"
        },
        {
            "name": "Passaporte",
            "status": "missing"
        }
      ];

    const requiredInformation = [
        {
            "subSection": "Dados pessoais",
            "data": [
                "nome",
                "email",
                "tel"
            ]
        },
        {
            "subSection": "Dados Bancários",
            "data":[
              "Banco",
              "Agência",
              "Conta"]
        }
    ]

    const [visitExpandedForm, setVisitExpandedForm] = useState(false);

    const [requests, setRequests] = useState<DocumentData[]>([]);

    const handleCloseForm = () => {
        setAddNewForm(false);
        setVisitExpandedForm(true)
      };
    
    const addNewFormClick = () => {
        setAddNewForm(true);
      };

    const handleCloseExpandedForm = () => {
        setVisitExpandedForm(false);
      };

    // const updateDocuments = (updatedDocuments : { name: string; status: string; }[]) => {
    //     setVisitDocuments(false)
    //     setDocuments(updatedDocuments)
    //     console.log("update documents when closing")
    // }

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

            {visitExpandedForm && <ExpandedForm
                isOpened={visitExpandedForm}
                onClose={handleCloseExpandedForm}
                requiredInformation={requiredInformation}
                initial_documents={documents}
            />}
            
        
            <CssBaseline/>
            <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
                <div className="logo">
                    <img src={titulo} alt='title'/>
                </div>
                <div className="profile">
                    <ProfileDropdown/>
                </div>
            </Stack>
            
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
                            <TripCard
                            cardTitle={request.destination}
                            tripStartDate={'17/07/2023'}
                            tripEndDate={'31/07/2023'}
                            airlineTickets={'Confirmado'}
                            reservations={'Aguardando Resposta'}
                            insurance={'Confirmado'}
                            savedForLater={request.savedForLater}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            </Stack>
        </div>
    )
}