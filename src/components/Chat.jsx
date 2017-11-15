import React from "react";
import styled from "styled-components";
import FlipMove from "react-flip-move";

import Task from "./Task.jsx";
import NavBar from "./NavBar.jsx";

const taskList = [{ name: "Do dishes" }, { name: "Money" }];

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 100%;
    height: 8%;
    border-bottom: 2px solid #ff77a9;
`;

const ChatBox = styled.div`
    width: 100%;
    height: 92%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const style = {
    flip: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap"
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

    render() {
        const { taskList } = this.state;

        console.log(this.addTask);
        return (
            <Container>
                <NavBar addTask={() => this.addTask()} />
                <Box>
                    <ChatHeader />
                    <ChatBox>
                        <FlipMove style={style.flip} enterAnimation="fade" leaveAnimation="fade">
                            {taskList.map((task, i) => (
                                <Task
                                    numberOfCircle={this.checkNumberOfCircle()}
                                />
                            ))}
                        </FlipMove>
                    </ChatBox>
                </Box>
            </Container>
        );
    }
}

export default Chat;
