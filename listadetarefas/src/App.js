import logo from './logo.svg';
import './App.css';

import Images from './components/Images';
import Hooks from './components/Hooks'
import List from './components/List'
import RenderCond from './components/RenderCond'
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      {/* <Images/>
      <Hooks/>
      <List/>
      <RenderCond x={10} />
  <Fragment/> */}
      <Container>
        <h1>Este é filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
