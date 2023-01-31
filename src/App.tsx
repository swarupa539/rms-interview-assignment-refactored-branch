import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContectProvider";
import StartQuiz from "./screens/quiz/StartQuiz";
import RoutesPage from "./routes/RoutesPage";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = ()  => navigate('/candidate');
  const handleBackClick = ()  => navigate(-1);
  // Show the loading spinner while the user is not authenticated
  if (!authContext.isAuthenticated) {
    return <p>Loading</p>;
  }
  // If the user is authenticated display the home component
  else {
    return (
      <>
        {/* {console.log(
          "the valueof authcontext is",
          authContext,
          authContext.isAuthenticated
        )} */}
        {/* <Canvas componentProps={componentProps} getComponent={GET_ALL_COMPONENTS} layoutConfig={uiJson} /> */}
        {/* <StartQuiz /> */}
        {/* <button onClick={authContext.logout}>logout</button> */}
        {/* <Routes>
        <Route path="/" element={<RoutesPage />} />
        </Routes> */}
        {/* <RoutesPage /> */}      
        {/* <button onClick={handleClick}>Candidate</button>  */}
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/candidate' element={<RoutesPage/>} />
        </Routes>
      </>
    );
  }
}

export default App;
