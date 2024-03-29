import 'antd/dist/antd';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { BuildOutlined, CodeOutlined, ForkOutlined, GithubFilled, HomeOutlined, OrderedListOutlined, RadarChartOutlined, RedoOutlined } from "@ant-design/icons";
import { Menu } from 'antd';

import Home from './Components/Home/Home';
import Automat from './Components/Automat/Automat';
import Aig from './Components/Aig/Aig';
import Befehl from './Components/Befehl/Befehl';
import Pipeline from './Components/Pipeline/Pipeline';
import Bdd from './Components/Bdd/Bdd';
import Sat from './Components/Sat/Sat';



function App() {
  const navigate = useNavigate()
  return (
    <div className='navigation'>

      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          { label: 'Home', key: '/', icon: <HomeOutlined /> },
          { label: 'Automaten Generieren', key: '/automat', icon: <RedoOutlined /> },
          { label: 'RISC-V Befehle', key: '/befehl', icon: <CodeOutlined /> },
          { label: 'Pipeline Konflikte', key: '/pipeline', icon: <OrderedListOutlined /> },
          { label: 'BDD Generator', key: '/bdd', icon: <ForkOutlined /> },
          { label: 'AIG Generator', key: '/aig', icon: <BuildOutlined /> },
          { label: 'SAT Solver', key: '/sat', icon: <RadarChartOutlined /> },
          {
            label: 'Kontakt', key: '/kontakt', icon: <GithubFilled />, onClick: () => {
              window.location.href = "https://github.com/Soeky/eraguide/issues";
            }
          },
        ]}>

      </Menu>
      <div>
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path='/' element=<Home />></Route>
        <Route path='/automat' element=<Automat />></Route>
        <Route path='/befehl' element=<Befehl />></Route>
        <Route path='/pipeline' element=<Pipeline />></Route>
        <Route path='/bdd' element=<Bdd />></Route>
        <Route path='/aig' element=<Aig />></Route>
        <Route path='/sat' element=<Sat />></Route>
        <Route path='/kontakt' element=<Home />></Route>
      </Routes>
    </div>
  )
}

export default App;
