import React, { Component } from 'react';
import './App.css';
import Green from './nest1';


//Static Function
// const Blue = (props) => {
//   let angka = props.number;

//   const back = (dat) => {
//     angka = dat.number;
//     console.log(dat, 'Angka: '+angka);
//     return angka;
//   }

//   return(
//     <div className="box blue">
//       {console.log(angka)}
//       <Green number={angka} back={back}/>
//     </div>
//   )
// }

//Class
// const foo = 'asd';
// console.log(foo);
class Blue extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: props.number
    }
  }
  back = (dat) => {
    // console.log(dat);
    this.setState({
      data: dat.number
    }, () => this.props.kembali(this.state.data));
    // this.setState
    // this.setState() 
    // angka = dat.number;
    // console.log(dat, 'Angka: '+angka);
    // return angka;
  }
  render(){
    // console.log(this.state);
    return(
      <div className="box blue">
        {this.state.data}
        <Green number={this.state.data} back={this.back}/>
      </div>
    )
  }
}

class App extends Component {
  state = {
    number: 10
  }
  kembali = (dats) => {
    console.log(dats);
    this.setState({number: dats});
  }
  render() {
    return (
      <div className="box red">
        {this.state.number}
        <Blue number={this.state.number} kembali={this.kembali}/>
      </div>
    );
  }
}

export default App;
