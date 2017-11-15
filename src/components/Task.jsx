import React from "react";
import styled from "styled-components";

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

        console.log(this.widthCircle(numberOfCircle));

        return <Container widthCircle={this.widthCircle(numberOfCircle)} />;
    }
}

export default Task;
