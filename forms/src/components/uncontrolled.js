import React, { Component } from 'react';

class Uncontrolled extends Component {

    //In this approach, we use less logic to get the user data from the form, however, If we use react then it's better to use react with %100 which means that using Controlled approach is 
    //better. Eventhough it requires more code and logic, we can take the control and lead the process with more priveliges.

    handleSubmitClick = (event) => {
        //This prevents page to relaod on default configuration (submitting empty form etc.)
        event.preventDefault();

        const values = {
            name:this.name.value,
            lastname:this.lastname.value
        }

        console.log(values)
    }



    render() {
        return (
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input
                            type="text"
                            ref={input=>this.name = input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter lastname</label>
                        <input
                            type="text"
                            ref={input=>this.lastname = input}
                        />
                    </div>
                </form>
                <button onClick={this.handleSubmitClick}>Sign In</button>
            </div>
        )
    }
}

export default Uncontrolled;