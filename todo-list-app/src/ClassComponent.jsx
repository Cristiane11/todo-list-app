import {Component}from 'react';
class ClassComponent extends Component{
    constructor(){
        super();
        this.state ={
            message: "welcome to the Class"
        }
        this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage(){
        this.setState({message: "Tenha um Bom Dia!"});
    }
    
    render()
{
    return (
        <div>
            <h1>Hello from Class Component</h1>
            <p>{this.state.message}</p>
            <button onClick={this.changeMessage}>Change Message</button>
        </div>
    );
}
}
export default ClassComponent;