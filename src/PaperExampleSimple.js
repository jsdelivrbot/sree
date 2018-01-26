import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SearchBar from 'material-ui-search-bar';
const style = {
  height: 70,
  width: 520,
  margin: 20,

  marginLeft:50,
  marginTop:150,
  display: 'inline-block',
  borderRadius:20
};

const PaperExampleSimple = () => (
  <div>
  <div><span style={{marginLeft:200,fontFamily:"Times New Roman",fontWeight:"bold",fontSize:50,color:"#ffffff"}}>Enter Your Query Here:</span>
    <Paper style={style} zDepth={4}  >
   <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 500,
        marginTop:15
      }} hintText="Enter course to be found!!"
    />
    </Paper>
   </div>
   

  </div>
);

export default PaperExampleSimple;
