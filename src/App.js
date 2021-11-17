import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Rocket from './components/rockets/Rocket';
import Mission from './components/mission/Mission';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/mission" element={<Mission />} />
    </Routes>
  </>
);

export default App;
