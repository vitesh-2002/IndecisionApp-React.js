import React from 'react';
export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // this.setState(() => {
        //     return { error }
        // })
        this.setState(() => ({ error }))
        e.target.elements.option.value = ''
    }
    render() {

        return (
            <div>
                <br></br>
                Add options here:
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

