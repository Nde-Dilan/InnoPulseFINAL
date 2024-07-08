import Header from "@/components/Header";
import MyJobsPage from "@/components/jobOpportunities/page";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
 

    return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/myjob" element={<MyJobsPage/>} />
            
  
          </Routes>
        </Router>
        
      </div>
    );
  }
  
  export default App;