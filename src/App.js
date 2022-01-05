import './App.css';
import Marquee from "react-fast-marquee";
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import React from "react";

const { TextArea } = Input;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "", marqueeValue: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.setState({marqueeValue: this.state.value, value: this.state.value});
        console.log(this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Marquee gradient={false} pauseOnHover={true} speed={250} loop={1}>
                        { this.state.marqueeValue }
                    </Marquee>
                    <TextArea value={this.state.value} className="Text-area" allowClear onChange={this.handleChange} />
                    <Button onClick={this.handleSubmit}>Start reading</Button>

                </header>
            </div>

            // <form onSubmit={this.handleSubmit}>
            //     <label>
            //         Name:
            //         <input type="text" value={this.state.value} onChange={this.handleChange} />
            //     </label>
            //     <input type="submit" value="Submit" />
            // </form>
        );
    }
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// function App() {
//   let textAreaValue = "";
//
//   const onTextAreaChange = (event) => {
//      console.log(event.currentTarget.value);
//      textAreaValue = event.currentTarget.value;
//   }
// }
export default App;
