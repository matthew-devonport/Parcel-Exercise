import React from 'react';


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
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      newsletter: this.state.newsletter
    };

}

   render () {
    return (
  
    <div>
    <form onSubmit={this.handleSubmit}>
    <input name="length" value={this.state.length} onChange={this.handleChange}/>
    <input name="breadth" value={this.state.breadth} onChange={this.handleChange}/>
    <input name="height" value={this.state.height} onChange={this.handleChange}/>
    <input name="weight" value={this.state.weight} onChange={this.handleChange}/>
    <input type='submit' value='submit'/>
    </form>   
    </div>
  );
}
}
export default Form;



// State - value of the 4 fields

// UI Form - 4 fields, submit button and div with JS