import Header from './components/Header/Header'
import {StyledGlobal} from './Global.styled' 
import Bookmark from './components/Bookmark/Bookmark'
import {FlexContainer} from'./components/Flex/Flex'
function App() {
  return (
    <> 
      <StyledGlobal/>
      <Header/>
      <FlexContainer fd ="column" >
        <Bookmark/>
      </FlexContainer>
    </>
  );
}

export default App;
