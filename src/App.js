

import React from 'react'

import DashBoard from './DashBoard';
import Question from './components/Question.js';
import Authentication from './authentication/Authentication';
import { RecoilRoot } from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <Authentication />
    </RecoilRoot>
  );
}

export default App;
