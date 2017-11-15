import React from 'react';
import styled from 'styled-components';

//Components
import SignUp from './components/SignUp.jsx';
import Chat from './components/Chat.jsx';
  
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Chat />
      </Container>
    );
  }
}

export default App;
