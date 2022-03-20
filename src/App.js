import Header from './components/Header/Header'
import {StyledGlobal} from './Global.styled' 
import Bookmark from './components/Bookmark/Bookmark'
import {FlexContainer} from'./components/Flex/Flex'
import AboutUsSection from './components/AboutUsSection/AboutUsSection'
import PledgeProgressBar from './components/PledgeProgressBar/PledgeProgressBar'

function App() {
  return (
    <> 
      <StyledGlobal/>
      <Header/>
      <FlexContainer fd ="column" >
        <Bookmark/>
        <PledgeProgressBar/>
        <AboutUsSection/>
      </FlexContainer>
    </>
  );
}

export default App;
