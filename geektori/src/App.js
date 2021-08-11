import Container from './components/container.js'
import './styles/sass/container__body.scss'
import ItemHeader from './components/ItemHeader.js'

function App() {
  return(
      <Container className={'container__body'}>
        <ItemHeader text="سوالات پرتکرار"></ItemHeader>
      </Container>
    
  );
}

export default App;
