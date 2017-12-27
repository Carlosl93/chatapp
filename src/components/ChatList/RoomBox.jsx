import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 200px;
    border: 4px solid #ff77a9;
    border-radius: 12px;
    margin: 10px 10px 10px 10px;
    transition: all 0.2s ease;

    :hover{
        transform: translateY(-4px);
        box-shadow: #c9b2ba 0px 4px 8px 0px;
        transition: all 0.1s ease;
    }

    width: ${props => props.widthContainer}
`;

const CenteredTextBox = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff77a9;
    width: 100%;

    font-size: ${props => props.textSize};
    font-weight: ${props => props.fontWeight};
    letter-spacing: ${(props = "1px") => props.letterSpacing}
`;

class RoomBox extends React.Component {
    
    /*//
    Returns the width of the container based on the number of floaters on the room //*/
    calcContainerWidth = () => {
        let width = this.props.floaters * 100 * 3 / this.props.totalFloaters;
        return width < 100 ? `${width}%` : '100%'
    }

    /*//
    Returns the width of the container based on the number of floaters on the room //*/
    calcFontSize = () => {
        const width = this.calcContainerWidth();
        let fontSize = '';
        console.log(width);

        if(width >= "80%"){
            fontSize = "56px";
            console.log('56');
        } else if(width < "80%" && width >= "40%"){
            fontSize = "48px";
            console.log('48');
        } else if(width < "40%" && width >= "20%"){
            console.log('38');
            fontSize = "38px";
        } else if(width < "20%"){
            console.log('28');
            fontSize = "28px";
        }
        console.log(fontSize);
        return fontSize;
    }

    render() {
        const { totalFloaters, floaters, roomName } = this.props;

        return (
            <Container widthContainer={this.calcContainerWidth}>
                <CenteredTextBox textSize={this.calcFontSize}>{roomName}</CenteredTextBox>
                <CenteredTextBox textSize={"16px"} fontWeight={"500"}>{floaters} floaters</CenteredTextBox>
            </Container>
        )
    }
}

export default RoomBox;