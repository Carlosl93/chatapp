import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`;

const Box = styled.div`
    width: 600px;
    height: 900px;
    border: 4px solid #ff77a9;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Message = styled.div`
    color: #ff77a9;
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 200px;
`;

const Letter = styled.span`
    color: #ff77a9;
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 200px;
`;

const FormContainer = styled.form`
    margin-top: -5rem;
`;

const Input = styled.input`
    margin: 10px;
    width: 300px;
    height: 50px;
    border: 4px solid #ff77a9;
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
    background: transparent;
    padding: 0px 10px;

    :focus{
        transform: translateY(-4px);
        box-shadow: #c9b2ba 0px 4px 8px 0px;
        transition: all 0.2s ease;
        outline: 0;
    }
`;

const InputName = styled.p`
    color: #ff77a9;
    font-size: 24px;
    padding-left: 30px;
    margin-bottom: -10px;
`;

class SignUp extends React.Component{
    render(){
        return(
            <Container>
                <Box>
                    <Message>
                        <Letter>W</Letter>elcome <Letter>B</Letter>ack !
                    </Message>      
                    <FormContainer>          
                        <InputName>Username</InputName>
                        <Input type="text"/>    
                        <InputName>Password</InputName>
                        <Input type="password"/>        
                    </FormContainer>
                </Box>
            </Container>
        );
    }
}

export default SignUp;