import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 40px;
    height: 700px;
    margin-right: 40px;
`;

class NavBar extends React.Component {
    render() {

        console.log(() => this.props.addTask);

        return (
            <Container>
                <i className="material-icons" onClick={this.props.addTask}>
                    add
                </i>
            </Container>
        )
    }
}

export default NavBar;
