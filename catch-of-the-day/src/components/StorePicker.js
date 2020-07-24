
import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    
    constructor() {
        super();
        console.log('Gonna create a component!');
    }

    myInput = React.createRef();

    goToStore(event) {
         
        event.preventDefault();
        console.log(this.myInput);
    }



    render(){
        return (
            <Fragment>
        { /* React.Fragment */ }

        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input 
            type="text"
            ref={this.myInput}
            requiered placeholder="Store Name" 
            defaultValue={getFunName()} 
            />
            <button type="submit">Visit Store</button>
        </form> 

            </Fragment>
            
        );

    }

}

export default StorePicker;
