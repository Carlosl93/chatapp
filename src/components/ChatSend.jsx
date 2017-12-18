import React from "react";
import styled from "styled-components";

const Container = styled.form`
    width: 96%;
    height: 70px;
    border-top: 3px solid #ff77a9;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InputChat = styled.input`
    width: 85%;
    height: 80%;
    font-size: 28px;
    background: transparent;
    border: none;
    margin-left: 10px;
    color: #ff77a9;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #ff77a9;
        opacity: 0.7;
    }
`;

const SendButton = styled.button`
    width: 60px;
    height: 60px;
    margin: 5px;
    color: #ff77a9;
    background: transparent;
    outline: none;
    border: 3px solid #ff77a9;
    border-radius: 50%;
    transition: 0.2s linear all;
    :hover {
        background: #ff77a9;
        color: #fce4ec;
        width: 62px;
        height: 62px;
        transform: translate(3px, 2px);
        transition: 0.1s linear all;
    }
`;

const Icon = styled.i`
    font-size: 36px;
    padding: 5px;
    :focus {
        outline: none;
    }
    :hover {
        color: #fce4ec !important;
    }
`;

class ChatSend extends React.Component {
    constructor() {
        super();
        this.state = { value: '' };
    }

    //Change on the input value 
    onChange = (e) => {
        console.log(this.state);
        this.setState({
          value: e.target.value,
        })
      };

    //On Submit 
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.sendMessage(this.state.value);
        console.log('funcionsendmessage', this.props.sendMessage); 
        this.setState({
            value: ""
        });
    };

    render() {
        return (
            <Container>
                <InputChat type="text" placeholder={this.state.value} value={this.state.value} onChange={this.onChange} />
                <SendButton>
                    <Icon
                        onMouseEnter={this.onHover}
                        onMouseLeave={this.omHover}
                        onClick={this.handleSubmit}
                        className="material-icons"
                    >
                        send
                    </Icon>
                </SendButton>
            </Container>
        );
    }
}

export default ChatSend;
