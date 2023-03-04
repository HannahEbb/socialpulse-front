import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Header from "../../components/Header";
import Table from "./Table";

export default function Dashboard() {
    const navigate = useNavigate(); 

    const [ fbLoged, setFbLoged ] = useState(true); //mudar para false depois de ter domínio do app
    const [ userId, setUserId ] = useState("");
    const [ userTokenFB, setUserTokenFB ] = useState("");
    const [ pageMessege, setPageMessege ] = useState("Problems to load the page");

    // FB.getLoginStatus(function(response) {
    //     if(response.status === 'connected') {
    //         setFbLoged(true);
    //         setUserId(response.authResponse.userID);
    //         setUserTokenFB(response.authResponse.accessToken);
    //     } else if(response.status === 'unknown') {
    //         navigate('/fb-sign-in');
    //     } else {
    //         setPageMessege("Are you allowed to use this app? Check with your team if you may be granted access.")
    //     }
    //   }, true);

    return (
        <Container>
        <Header/>
        { fbLoged ? <Table/> : <h3>{ pageMessege }</h3>}
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`