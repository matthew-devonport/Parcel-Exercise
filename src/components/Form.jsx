import React from 'react';

import getShippingCost from '../Parcel'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          length: '',
          breadth: '',
          height: '',
          weight: '',
          result: {
              error: null,
              cost: null
          }};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
 
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

   handleSubmit(event) {
    event.preventDefault();
    const data = {
      length: this.state.length,
      breadth: this.state.breadth,
      height: this.state.height,
      weight: this.state.weight,
    };
  const result = getShippingCost(data);
  
  this.setState({
    result: result
})
}
  render () {  
 
    return (
    <div>
    <form id="form" onSubmit={this.handleSubmit}>
    <h1>SEND A PACKAGE!</h1>
    <p>Length (mm):</p>
    <input name="length" value={this.state.length} onChange={this.handleChange}/>
    <p>Breadth (mm):</p>
    <input name="breadth" value={this.state.breadth} onChange={this.handleChange}/>
    <p>Height (mm):</p>
    <input name="height" value={this.state.height} onChange={this.handleChange}/>
    <p>Weight (kg Maximum 25kg):</p>
    <input name="weight" value={this.state.weight} onChange={this.handleChange}/>
    <br />
    <br />
    <input type='submit' value='submit'/>
    <p>Total cost: {this.state.result.error ? this.state.result.error : this.state.result.cost} </p>
    </form>   
    </div>
  );
}
}
export default Form;


