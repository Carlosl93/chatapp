import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%; 
    height: 100%;
    padding: 10% 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 700px;
    height: 500px;
    border: 2px  solid #ff77a9;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Profile = styled.div`
    width: 120px; height: 120px;
    border-radius: 50%;
    border: 2px solid #ff77a9;
    box-shadow: #c9b2ba 0px 2px 6px 0px;
    margin-bottom: 60px;
`;

const Button = styled.div`
    margin: 10px;
    width: 300px;
    height: 50px;
    border: 2px solid #ff77a9;
    border-radius: 12px;
    color: #ff77a9;
    font-weight: 500;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: #c9b2ba 0px 2px 6px 0px;
    cursor: pointer;

    :hover{
        transform: translateY(-4px);
        box-shadow: #c9b2ba 0px 4px 8px 0px;
        transition: all 0.2s ease;
    }
`;

class SignUp extends React.Component{
    render(){
        return(
            <Container>
                <Box>
                    <Profile>                        
                    </Profile>
                    <Button>
                        Sign Up
                    </Button>    
                    <Button>   
                        Log In
                    </Button>     
                </Box>
            </Container>
        );
    }
}

export default SignUp;