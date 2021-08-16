import Container from './components/container'
import './styles/sass/container__body.scss'
import ItemHeader from './components/ItemHeader'
import FAQContainer from './components/FAQContainer'
import './styles/sass/general.scss'

function App() {
  return(

      <Container className='container__body'>
        <ItemHeader text="سوالات پرتکرار"></ItemHeader>
        <FAQContainer></FAQContainer>
      </Container>
    
  );
}

export default App;
