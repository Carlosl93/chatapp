import React from 'react';
import styled from 'styled-components';

//Components
import RoomBox from './RoomBox.jsx';

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

const ChatHeader = styled.div`
    width: 96%;
    height: 70px;
    border-bottom: 3px solid #ff77a9;
    background: #fce4ec;
    z-index: 2;
`;

const ChatBox = styled.div`
    width: 100%;
    height: 740px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    overflow: auto;
`;

const ChatBottom = styled.form`
    width: 96%;
    height: 70px;
    border-top: 3px solid #ff77a9;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CenteredTextBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;    
    width: 100%;
    margin: -8px 0px;
    color: #ff77a9;
    font-weight: 700;
    font-size: ${props => props.textSize};
    letter-spacing: ${(props = "1px") => props.letterSpacing}
`;


class ChatList extends React.Component{
    render(){
        return(
            <Container>
                <Box>

                    <ChatHeader>
                        <CenteredTextBox textSize={"36px"} letterSpacing={"3px"}>
                            Local Rooms 
                        </CenteredTextBox> 
                        <CenteredTextBox textSize={"18px"}>
                            108 floaters
                        </CenteredTextBox>        
                    </ChatHeader>

                    <ChatBox>
                        <RoomBox totalFloaters={108} floaters={38} roomName={"Pizza"}/>
                        <RoomBox totalFloaters={108} floaters={16} roomName={"Chicken"}/>
                        <RoomBox totalFloaters={108} floaters={16} roomName={"Talking"}/>
                        <RoomBox totalFloaters={108} floaters={10} roomName={"COD"}/>
                        <RoomBox totalFloaters={108} floaters={8} roomName={"Festival"}/>
                        <RoomBox totalFloaters={108} floaters={8} roomName={"Rock"}/>                    
                    </ChatBox> 

                    <ChatBottom /> 
                </Box>
            </Container>
        );
    }
}

export default ChatList;