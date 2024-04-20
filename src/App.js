import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import MeetTeam from './routes/MeetTeam';
import ApplicationSecurity from './routes/ApplicationSecurity'
import NetworkSecurity from './routes/NetworkSecurity';
import Resilience from './routes/Resilience';
import MobileComputing from './routes/MobileComputing';
import WirelessNetwork from './routes/WirelessNetwork';
import ProductComponent from './components/ProductComponent';
import CIS from './components/products/CIS';
import CSAA from './components/products/CSAA';
import ISO from './components/products/ISO';
import NIST from './components/products/NIST';
// import NISTA from './components/products/NISTA';
import CyberThreat from './components/products/CyberThreat'
import Cyber from './components/products/Cyber'
import Resil from './components/products/Resil'
import DataP from './components/products/DataP'
import AzureSec from './components/products/AzureSec'
import GCP from './components/products/GCP'


import CyberSec from './components/services/cyberSec'
import CloudSec from './components/services/cloudSec'
import SISO from './components/services/ISO'
import ITSupport from './components/services/ITSupport'
import NoCode from './components/services/noCode'
import SoftDevHelp from './components/services/softDevHelp'
import WebDev from './components/services/webDev'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<MeetTeam/>}/>
        <Route path='/ApplicationSecurity' element={<ApplicationSecurity/>}/>
        <Route path='/NetworkSecurity' element={<NetworkSecurity/>}/>
        <Route path='/Resilience' element={<Resilience/>}/>
        <Route path='/MobileComputing' element={<MobileComputing/>}/>
        <Route path='/WirelessNetwork' element={<WirelessNetwork/>}/>
        <Route path='/product/ISO' element={<ISO/>}/>
        <Route path='/product/CSAA' element={<CSAA/>}/>
        <Route path='/product/CIS' element={<CIS/>}/>
        <Route path='/product/NIST' element={<NIST/>}/>
        

        <Route path='/product/cyberthreat' element={<CyberThreat/>}/>
        <Route path='/product/cyber' element={<Cyber/>}/>
        <Route path='/product/resil' element={<Resil/>}/>
        <Route path='/product/datap' element={<DataP/>}/>
        <Route path='/product/azure' element={<AzureSec/>}/>
        <Route path='/product/gcp' element={<GCP/>}/>


        


        <Route path='/service/CyberSec' element={<CyberSec/>}/>
        <Route path='/service/CloudSec' element={<CloudSec/>}/>
        <Route path='/service/SISO' element={<SISO/>}/>
        <Route path='/service/ITSupport' element={<ITSupport/>}/>
        <Route path='/service/NoCode' element={<NoCode/>}/>
        <Route path='/service/SoftDevHelp' element={<SoftDevHelp/>}/>
        <Route path='/service/WebDev' element={<WebDev/>}/>




      </Routes>
    </div>
  );
}

export default App;
