import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Error404 from './containers/errors/Error404'
import Login from './containers/pages/Login'
import Monitoring from './containers/pages/Monitoring'
import UserRegular from './containers/pages/UserRegular'

function App() {
  return (
    <Router>
      <Routes>
        {/*Error 404*/}
        <Route path="*" element={<Error404 />}/>
        {/*Login*/}
        <Route path="/" element={<Login />}/>
        <Route path="/monitoring" element={<Monitoring />}/>
        <Route path="/user" element={<UserRegular />}/>
      </Routes>
    </Router>
  );
}

export default App;

