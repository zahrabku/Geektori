import Container from './components/container.js'
import './styles/sass/container__body.scss'
import ItemHeader from './components/ItemHeader.js'
import FAQContainer from './components/FAQContainer.js'

function App() {
  return(

      <Container className={'container__body'}>

        <ItemHeader text="سوالات پرتکرار"></ItemHeader>
        
        <FAQContainer></FAQContainer>
      </Container>

    
  );
}

export default App;
