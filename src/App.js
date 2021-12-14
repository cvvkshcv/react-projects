import './App.css';
import styled from 'styled-components';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';

const Button = styled.button`
  background: unset;
  border: unset;
  cursor: pointer;
  background: ${props => props.primary ? 'palevioletred' : '#eee'};
  color: ${props => props.primary ? '#fff' : '#333'};
  padding: .3rem 1rem;
  box-sizing: border-box;
`;

const ButtonRed = styled(Button)`
  border: 1px solid red;
  color: red;
`;

const Container = styled.div`
  width: ${props => props.width};
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React app</h1>
        <Container width="50%">
          <Button primary as={Link} to="/">Hello</Button>
          <Button>Hello</Button>
          <ButtonRed as={Link} to="/home">Hello red</ButtonRed>
        </Container>
      </div>
      <Routes>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
