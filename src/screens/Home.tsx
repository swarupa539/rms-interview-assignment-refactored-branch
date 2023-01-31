import RoutesPage from "../routes/RoutesPage";
import {Route, Routes } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import {ButtonGroup, Button } from "rsuite";

  const Home = () => {
    const navigate = useNavigate();
  return(  
    <>
    <div><h1>RMS Home Page</h1></div>   
    <ButtonGroup style={{ margin: "20px" }} vertical size="lg">
    {/* <button  onClick={()=>navigate("/candidate")}>Interviewer</button>
    <button onClick={()=>navigate("/candidate")}>Candidate</button>
    <button onClick={()=>navigate("/candidate")}>Subject expert</button> */}
    <Button onClick={()=>navigate("/candidate")} appearance="primary">Interviewer</Button>
    <Button onClick={()=>navigate("/candidate")}>Candidate</Button>
    <Button onClick={()=>navigate("/candidate")}>Subject expert</Button>
   
        <Routes>
        <Route path='/candidate' element={<RoutesPage/>} />
        <Route path='/candidate' element={<RoutesPage/>} />
        <Route path='/candidate' element={<RoutesPage/>} />
        </Routes>
        </ButtonGroup>
    </>
  )};

   export default Home;


