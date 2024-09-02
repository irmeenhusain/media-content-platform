import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserLogin from './pages/UserLogin'
import AdminLogin from './pages/AdminLogin'
import UserRoute from './components/routing/UserRoute'
import AdminRoute from './components/routing/AdminRoute'
import DashboardUser from './components/dashboard/DashboardUser'
import DashboardAdmin from './components/dashboard/DashboardAdmin'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Articles from "./pages/Articles";
import Videos from "./pages/Videos";
import Images from "./pages/Images";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <ToastContainer />
    <Router>
      <Header />
      <Routes>
        <Route exact path="/user/dashboard" element={<UserRoute />}>
          <Route path='/user/dashboard' element={<DashboardUser />} />
        </Route>
        <Route exact path="/admin/dashboard" element={<AdminRoute />}>
          <Route path='/admin/dashboard' element={<DashboardAdmin />} />
        </Route>
        <Route path='/dashboard/:id' element={<DashboardUser />} />

        <Route path="/" exact element={<Home />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path='/Images' element={<Images/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

