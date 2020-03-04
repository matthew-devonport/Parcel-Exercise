import React from 'react';

import getShippingCost from '../Parcel'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          length: '',
          breadth: '',
          height: '',
          weight: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
 
    handleChange(event) {
     this.setState(
       {[event.target.length]: event.target.value, 
        [event.target.breadth]: event.target.value,
        [event.target.height]: event.target.value,
        [event.target.weight]: event.target.value
        }
       );
   }

   handleSubmit(event) {
    event.preventDefault();
    const data = {
      length: this.state.length,
      breadth: this.state.breadth,
      height: this.state.height,
      weight: this.state.weight
    };
console.log(hello)
   getShippingCost(data);
   document.getElementById('form').innerHTML = 
   document.getElementById("displayCost").value;
}

   render () {
    return (
    <div>
    <form id="form" onSubmit={this.handleSubmit}>
    <input name="length" value={this.state.length} onChange={this.handleChange}/>
    <input name="breadth" value={this.state.breadth} onChange={this.handleChange}/>
    <input name="height" value={this.state.height} onChange={this.handleChange}/>
    <input name="weight" value={this.state.weight} onChange={this.handleChange}/>
    <input type='submit' value='submit'/>
    <p>Cost is: <span id="displayCost"/></p>
    </form>   
    </div>
  );
}
}
export default Form;


