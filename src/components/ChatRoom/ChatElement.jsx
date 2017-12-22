import React from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const Container = styled.div`
    max-width: 400px;
    height: 50px;
    border: 3px solid #ff77a9;
    border-radius: 310px;
    margin: 10px 40px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    transition: 0.1s ease all;
    :hover{
        background: #ff77a9;
        color: #fce4ec !important;
        transition: 0.2s ease all;
    }
    :hover>*{
        color: #fce4ec !important;
    }
`;

const ChatBox = styled.div`
    width: 100%;
    height: 20px;
    font-size: 20px;
`;

const UserBox = styled.div`
    width: 100%;
    height: 20px;
    position: relative;
    font-size: 20px;
    color: #ff77a9;
    opacity: 0.8;
`;

class ChatElement extends React.Component {
    render() {
        let { numberOfCircle } = this.props;

        const config = { stiffness: 100, damping: 10 };
        const toCSS = scale => ({
            transform: `scale3d(${scale}, ${scale}, ${scale})`
        });

        return (
            <Motion
                defaultStyle={{ scale: 0 }}
                style={{ scale: spring(1, config) }}
            >
                {value => (
                    <Container
                        style={toCSS(value.scale)}
                        onMouseEnter={this.osHover}
                        onMouseLeave={this.osHover}
                    >
                        <UserBox>{this.props.user}</UserBox>
                        <ChatBox>{this.props.message}</ChatBox>
                    </Container>
                )}
            </Motion>
        );
    }
}

export default ChatElement;
