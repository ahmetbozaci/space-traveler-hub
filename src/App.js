import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Mission from './components/mission/Mission';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/mission" element={<Mission />} />
    </Routes>
  </>
);

export default App;
