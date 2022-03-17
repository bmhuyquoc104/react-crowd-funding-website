import {grommet, Grommet} from 'grommet'
import imagesResource from './assets/images'
function App() {
  return (
    <Grommet className="App">
      <img src = {imagesResource.CheckIcon} alt = "Test icon"/>
    </Grommet>
  );
}

export default App;
