import React from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import Anime from 'react-anime';

const Container = styled.div`
    width: 40px;
    height: 700px;
    margin-right: 40px;
`;

class NavBar extends React.Component {
    constructor() {
        super();

        this.state = { hover: false };
    }

    onHover = () => this.setState({ hover: !this.state.hover });

    render() {
        const config = { stiffness: 140, damping: 14 };
        const toCSS = scale => ({
            transform: `scale3d(${scale}, ${scale}, ${scale})`
        });

        return (
            <Container>
                <Motion
                    defaultStyle={{ scale: 0 }}
                    style={{ scale: spring(1, config) }}
                >
                    {value => (
                        <i
                            className="material-icons"
                            onClick={this.props.addTask}
                            style={toCSS(value.scale)}
                        >
                            add
                        </i>
                    )}
                </Motion>
            </Container>
        );
    }
}

export default NavBar;
