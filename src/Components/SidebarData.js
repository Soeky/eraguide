import React from 'react';
import '../App.css';
import TutorialIcon from '@mui/icons-material/HelpOutline'
import AutomatIcon from '@mui/icons-material/SettingsEthernet'
import BefehlIcon from '@mui/icons-material/Memory'
import PipelineIcon from '@mui/icons-material/Timeline'
import BddIcon from '@mui/icons-material/SwapCalls'
import AigIcon from '@mui/icons-material/MultilineChart'
import SatIcon from '@mui/icons-material/Lan'
import KontaktIcon from '@mui/icons-material/GitHub'


export const SidebarData = [
  {
    title: "Tutorial",
    icon: <TutorialIcon />,
    link: "/tutorial"
  },

  {
    title: "Automaten Generieren",
    icon: <AutomatIcon />,
    link: "/automat"
  },

  {
    title: "RISC-V Befehle",
    icon: <BefehlIcon />,
    link: "/befehl"
  },

  {
    title: "Pipeline Konflikte",
    icon: <PipelineIcon />,
    link: "/pipeline"
  },

  {
    title: "BDD Generator",
    icon: <BddIcon />,
    link: "/bdd"
  },

  {
    title: "AIG Generator",
    icon: <AigIcon />,
    link: "/aig"
  },

  {
    title: "SAT Solver",
    icon: <SatIcon />,
    link: "/sat"
  },

  {
    title: "Kontakt",
    icon: <KontaktIcon />,
    link: "/kontakt"
  }

]
