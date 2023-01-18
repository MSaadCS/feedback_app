import { Header } from "./Components/Header";
import { FeedbackList } from "./Components/FeedbackList";
import { FeedbackStats } from "./Components/FeedbackStats";
import { FeedbackFormState } from "./Components/FeedbackFormState";
import { Link } from 'react-router-dom';
import { About } from './pages/About';
import {FeedbackContext} from './Context/Feedback-data';
// we can use HashRouter but BrowserRouter is the most common
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <FeedbackContext>
      {/* what is placed here is passed as children  */}
      <Router>
          
            <Header header_text="FeedBack App"/>
            <div className="container">
              <Routes>
                <Route path='/' exact element={
                  <>
                  <FeedbackFormState/>
                  <FeedbackStats/>
                  <FeedbackList/>
                  <Link className='text-white' to={{
                    pathname : '/about',
                    search : 'sort=name',
                    hash : '#about'
                    }}>ABOUT</Link>
                  </>
                }>
                  
                </Route>

                {/* create routing  */}
                {/* open about component in this path */}
                <Route path='/about' element={<About/>} />
              </Routes>
            </div>
        
      </Router>
      {/* what is placed here is passed as children  */}
    </FeedbackContext>
  );
}

export default App;
