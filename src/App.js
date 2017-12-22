import React from 'react';
import styled from 'styled-components';

//Components
import SignUp from './components/SignUp.jsx';
import Chat from './components/ChatRoom/Chat.jsx';

import messagesContainer from './containers/messagesContainer.js';
  
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const App = messagesContainer(
  class App extends React.Component {
    render() {
      return (
        <Container>
          <SignUp {...this.props}/>  
        </Container>
      );
    }
  }
)

export default App;
