import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import History from './components/History';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            operation: '',
            result : '',
            history: []
        }
    }

    write = (e) => {
        this.setState( {operation : this.state.operation+e['target']['value']});
    }

    getResult = () => {
        const result = eval(this.state.operation);
        this.setState( {result: result, operation: this.state.operation}) ;
    }

    clearScreen = () => {
        this.state.history.push({operation: this.state.operation , result : this.state.result});
        this.setState( {operation: '', result: ''}) ;
    }

    render() {
        return (
            <div className="App">
                <Numbers write={this.write} />
                <Operators write={this.write} getResult={this.getResult} clearScreen={this.clearScreen} />
                <br/>
                <Screen operation={this.state.operation} result={this.state.result} />
                <br/>
                <p>History :</p>
                <History history={this.state.history} />
            </div>
        );
    }
}


export default App;
