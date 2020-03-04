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
          cost: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
 
    handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;
    
        this.setState({
       [name]: value
        });
   }

   handleSubmit(event) {
    event.preventDefault();
    const data = {
      length: this.state.length,
      breadth: this.state.breadth,
      height: this.state.height,
      weight: this.state.weight,
      cost: this.state.cost
    };
   getShippingCost(data);
  
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
    <p>Cost is: <span name="cost" value={this.state.cost}/></p>
    </form>   
    </div>
  );
}
}
export default Form;


