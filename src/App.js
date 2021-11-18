import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Rocket from './components/rockets/Rocket';
import Mission from './components/mission/Mission';
import MyProfile from './components/myprofile/MyProfile';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
