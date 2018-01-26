import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperExampleSimple from './PaperExampleSimple';
const App = () => (
  <MuiThemeProvider >
  <div style={{marginLeft:500,marginTop:20,fontFamily:"Times New Roman",fontWeight:"bold"}}>
  <font size="500"  color="#FFFFFF">NPTEL COURSE FINDER</font>
  </div>
  <div>
   <PaperExampleSimple/>
  </div>
  </MuiThemeProvider>
);

export default App;
