import styled from "styled-components";
import logo from "../assets/images/logo-socialpulse.png";

export default function Header() {
    return (
      <Container>
        <Left>
            <h2>SocialPulse</h2>
        </Left>
        <Right>
            <div><h2>Hello, name!</h2></div>
            <div><button>Sign Out</button></div>
        </Right>
      </Container>
    ); 
}

const Container = styled.div`
    background-color: var(--light-grey);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;

`

const Left = styled.div`
    display: flex;

    h2 {
        font-family: Ranille;
        font-size: 20px;
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    
    div {
        margin-right: 20px;
    }

    button {
        width: 120px;
        height: 40px;
        background-color: var(--tiffany-blue);
        border: 1px solid var(--dark-grey);
        box-shadow: 6px 6px 0px #000000;
        font-size: 16px;
    }
`