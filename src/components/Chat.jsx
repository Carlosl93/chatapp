import React from "react";
import styled from "styled-components";
import messagesContainer from '../containers/messagesContainer.js';

import ChatElement from "./ChatElement.jsx";
import NavBar from "./NavBar.jsx";
import ChatSend from "./ChatSend.jsx";

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;


    class Chat extends React.Component {

        componentDidMount() {
            this.props.listMessages();
        }

        render() {

            const { sendMessage } = this.props;

            return (
                <Container>
                    <NavBar addTask={() => this.addTask()} />
                    <Box>
                        <ChatHeader />
                        <ChatBox>
                            {this.props.messages.map(item => (
                                <ChatElement
                                    user={item.user}
                                    message={item.message}
                                />
                            ))}
                        </ChatBox>
                        <ChatSend 
                            {...this.props}
                        />
                    </Box>
                </Container>
            );
        }
    }


export default Chat;

/*

*/
