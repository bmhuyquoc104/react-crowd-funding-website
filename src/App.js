import { useState, useReducer } from "react";
import Header from "./components/Header/Header";
import { StyledGlobal } from "./Global.styled";
import Bookmark from "./components/Bookmark/Bookmark";
import { FlexContainer, AbsoluteFlexContainer } from "./components/Flex/Flex";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import PledgeProgressBar from "./components/PledgeProgressBar/PledgeProgressBar";
import Modal from "./components/Modal/Modal";
import { ModalContext, PledgeContext } from "./hooks/useContext";
import ModalSubmission from "./components/Modal/ModalSubmission/ModalSubmission";

function App() {
  // AbsouteFlexContainer state
  const defaultAmount = 89914;
  const defaultBackers = 5007;
  const defaultDaysLeft = 56;
  const [displayFlex, setDisplayFlex] = useState("none");

  const [pledge, setPledge] = useState({
    totalAmount: 89914,
    totalBackers: 5007,
    totalDaysLeft: 56,
  });

  console.log(pledge.totalAmount);

  // Reducer to control the pledgeProgressBar

  // Assign the initial state for reducer
  const initialState = {
    display: "none",
    displayModalSubmission: "none",
  };

  // Reducer function that have 4 cases to control two modals
  const reducer = (state, action) => {
    switch (action.type) {
      case "DISPLAYMODAL":
        return {
          display: (state.display = "flex"),
          displayModalSubmission: state.displayModalSubmission,
        };
      case "CLOSEDISPLAYMODAL":
        return {
          display: (state.display = "none"),
          displayModalSubmission: state.displayModalSubmission,
        };
      case "DISPLAYMODALSUBMISSION":
        return {
          display: (state.display = "none"),
          displayModalSubmission: (state.displayModalSubmission = "flex"),
        };
      case "CLOSEMODALSUBMISSION":
        return {
          display: (state.display = "flex"),
          displayModalSubmission: (state.displayModalSubmission = "none"),
        };
      default:
        return {
          display: (state.display = "none"),
          displayModalSubmission: (state.displayModalSubmission = "none"),
        };
    }
  };

  // Reducer state for control 2 modals
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ModalContext.Provider
        value={{
          displayFlex,
          setDisplayFlex,
          state,
          dispatch,
        }}
      >
        <PledgeContext.Provider value = {{pledge,
          setPledge}}>
          <StyledGlobal />
          <Header />
          <FlexContainer fd="column">
            <Bookmark />
            <PledgeProgressBar />
            <AboutUsSection />
          </FlexContainer>
          <AbsoluteFlexContainer dp={displayFlex}>
            <Modal dp={state.display} />
            <ModalSubmission dp={state.displayModalSubmission} />
          </AbsoluteFlexContainer>
        </PledgeContext.Provider>
      </ModalContext.Provider>
    </>
  );
}

export default App;
