import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class AssignmentUppercase extends React.Component{
  constructor(){
    super()
    this.state = {
      input: '' ,
      showText:false,
    }
  }
  render(){
    return (
      <div className='box'>
        <textarea className='in'
        value={this.state.input}
        onChange={(e)=>this.setState({input:e.target.value})}
        />
        <br/>

        <button onClick={()=>{
          this.setState({
            showText : !this.state.showText
          })
        }}
    > Display in uppercase </button>

     {this.state.showText && <p>{this.state.input.toUpperCase()}</p>}


      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AssignmentUppercase/>
  </React.StrictMode>
)




export default AssignmentUppercase
