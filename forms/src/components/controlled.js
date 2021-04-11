import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: 'francis',
        lastname: 'jones'
    }

    //EVENT LİSTENERS TO CHANGE STATE'S PROPS 

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })

        console.log(this.state.name)
    }

    handleLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })

        console.log(this.state.name)
    }

    onshandler = (event) => {
        event.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onshandler}>
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={(e)=>this.handleNameChange(e)}

                        />
                    </div>
                    <div className="form_element">
                        <label>Enter lastname</label>
                        <input
                            type="text"
                            value={this.state.lastname}
                            onChange={(e)=>this.handleLastnameChange(e)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                Controlled
            </div>
        )
    }
}

export default Controlled;