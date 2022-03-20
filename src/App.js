import Header from './components/Header/Header'
import {StyledGlobal} from './Global.styled' 
import Bookmark from './components/Bookmark/Bookmark'
import {FlexContainer} from'./components/Flex/Flex'
import Modal from './components/Modal/Modal'
import ModalSubmission from './components/Modal/ModalSubmission/ModalSubmission'
import PledgeProgressBar from './components/PledgeProgressBar/PledgeProgressBar'

function App() {
  return (
    <> 
      <StyledGlobal/>
      <Header/>
      <FlexContainer fd ="column" >
        <Bookmark/>
        <PledgeProgressBar/>
        <Modal/>
      </FlexContainer>
    </>
  );
}

export default App;
