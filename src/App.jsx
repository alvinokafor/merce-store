import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/onboarding/SignIn'
import DashBoard from './pages/seller-view/DashBoard';
import Home from './pages/customer-view/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          {/* SignIn */}
          <Route path='/' element={<SignIn />}/>

          {/* Sellers view routes */}
          <Route path='/dashboard' element={<DashBoard />} />

          {/* Customers view routes */}
          <Route path='/home' element={<Home />} />
        </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
