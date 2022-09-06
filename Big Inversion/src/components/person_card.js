import React from 'react';

const PersonCard = props =>{
    //constructor(props) {
    //    super(props);
    //    this.state = {
    //        age : this.props.age
    //    };
    //}

    //birthday = () => {
    //    this.setState({ age: this.state.age + 1 })
    //}

    
    //const { firstName, lastName, age, hairColor } = this.props;
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
    
}

export default PersonCard;