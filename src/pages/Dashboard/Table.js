import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Table() {
    const [ userPosts, setUserPosts ] = useState([]);
    const userId = process.env.USER_ID;
    const accessToken = process.env.ACCESS_TOKEN;

    //quando já tiver recebido o token do back, vai user para GET `https://graph.facebook.com/v16.0/17841400064274648/media?access_token={}`

    return (
        <Container>
            <Top>
                <div><h2>YourPosts</h2></div>
                <div><h3>Count: 30</h3></div>
            </Top>
            <Data>
                <Posts>

                </Posts>
            </Data>
        </Container>
    );
}
const Container = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Data = styled.div`
    width: 70vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    background-color: var(--medium-grey);
`

const Top = styled.div`
    width: 70vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    
    h2 {
        font-family: Ranille;
        font-size: 26px;
    }

    h3 {
        font-size: 12px;
        color: var(--greenish-grey);
    }
`

const Posts = styled.div`
    display: flex;
    flex-direction: column;
`