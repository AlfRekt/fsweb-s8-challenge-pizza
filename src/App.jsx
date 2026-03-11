import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Main from './components/Main';
import SiparisFormu from './components/SiparisFormu';
import SiparisOnay from "./components/SiparisOnay";

function App() {
  const [siparisData, setSiparisData] = useState(null);
  const [sayfa, setSayfa] = useState("main");

  return (
    <>

      {sayfa === "main" && (
        <Main setSayfa={setSayfa} />
      )}

      {sayfa === "siparis" && (
        <SiparisFormu
          setSayfa={setSayfa}
          setSiparisData={setSiparisData}
        />
      )}

      {sayfa === "onay" && (
        <SiparisOnay siparisData={siparisData} />
      )}

    </>
  );
}

export default App
