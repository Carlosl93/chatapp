import React from "react";
import styled from "styled-components";
import FlipMove from "react-flip-move";
import Anime from 'react-anime';

import Task from "./Task.jsx";
import NavBar from "./NavBar.jsx";
import { TransitionMotion, spring } from "react-motion";

const taskList = [{ name: "Do dishes" }, { name: "Money" }];

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
    height: 90px;
    border-bottom: 2px solid #ff77a9;
    background: #fce4ec;
    z-index: 2;
`;

const ChatBox = styled.div`
    width: 100%;
    height: 810px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;

`;

const style = {
    flip: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        overflow: "auto"
        
    }
}

class Chat extends React.Component {
    constructor() {
        super();

        this.state = { taskList };
    }

    addTask = () => {
        let task = this.state.taskList;
        task.push({ name: "money" });
        this.setState({ taskList: task });
    };

    checkNumberOfCircle = () => {
        let count = 0;
        this.state.taskList.map(() => count++);
        return count;
    };

    getDefaultStyle = (data) => {
        let styleArray = [];
        data.map(
            (item, index) => {
                styleArray.push({ key: index, style:{scale: (0, 0)}});
            }
        );
        return styleArray;
    }

    getFinalStyle = (data) => {
        let styleArray = [];
        data.map(
            (item, index) => {
                styleArray.push({ key: index, style:{scale: (spring(5), spring(6))}});
            }
        );
        return styleArray;
    }

    render() {
        const { taskList } = this.state;

        console.log(this.addTask);
        return (
            <Container>
                <NavBar addTask={() => this.addTask()} />
                <Box>
                    <ChatHeader />
                    <ChatBox>
                        <TransitionMotion
                            defaultStyles={this.getDefaultStyle(taskList)}
                            styles={this.getFinalStyle(taskList)}
                            
                        >
                            {
                                interpolatedStyles => (
                                    <div style={style.flip}>
                                        {
                                            interpolatedStyles.map( 
                                                config => 
                                                    <Task
                                                        key={config.key}
                                                        style={config.style}
                                                        numberOfCircle={this.checkNumberOfCircle()}
                                                    />                                            
                                            )
                                        }
                                    </div>
                                )
                            }
                        </TransitionMotion>
                    </ChatBox>
                </Box>
            </Container>
        );
    }
}

export default Chat;
