import React from "react";
import styled from "styled-components";
import { Motion, spring } from 'react-motion';

const Container = styled.div`
    width: ${props => props.widthCircle};
    height: ${props => props.widthCircle};
    border: 3px solid #ff77a9;
    border-radius: 50%;
    margin: 10px;
`;

class Task extends React.Component {
    widthCircle = number => {
        if(number <= 3){
            return `${300 / number*1.5}px`
        } else {
            return `${300 / 3 * 1.5}px`
        }
    };

    render() {
        let { numberOfCircle } = this.props;

        const config = { stiffness: 100, damping: 10 };
        const toCSS = (scale) => ({ transform: `scale3d(${scale}, ${scale}, ${scale})` })

        return(
            <Motion 
                defaultStyle={{ scale: 0 }} 
                style={{ scale: spring(1, config) }}
            >
                {
                    (value) => <Container style={toCSS(value.scale)} widthCircle={this.widthCircle(numberOfCircle)} />
                }
            </Motion>
        )
    }
}

export default Task;
