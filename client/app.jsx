import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name : "",
    //         email : "",
    //         password : "",
    //         street1: "",
    //         street2 : "",
    //         state : "",
    //         zip : "",
    //         phone : "",
    //         cardNumber : "",
    //         expiration : "",
    //         zipCode : ""


    //     };
    // }
    render(){
        return(
            <h1>'heloooooooooooooooooo'</h1>
        )
    }
    
}
// class CreateAcc extends React.Component{
//     render(){
//         return (
//             <div>
//             <form action="" method="POST">
//             <input type ="text"/>
//             <input type ="email"/>
//             <input type ="password"/>
//             <button id="F1"> Next</button>
        
//             </form>
//             </div>
//         )
//     }
// }
// class Shipping extends React.Component{
//     render(){
//         return (
//             <div>
//             <form action="" method="POST">
//             <input type ="text" id="street1"/>
//             <input type ="text" id="street2"/>
//             <input type ="text" id="state"/>
//             <input type ="text" id="zip"/>
//             <input type ="phone" id="phone"/>
//             <button id="F2"> Next</button>
        
//             </form>
//             </div>
//         )
//     }
// }

// class Payment extends React.Component{
//     render(){
//         <div>
//             <form action="" method="POST">
//             <input type ="text" id="cardNumber"/>
//             <input type ="date" id="expiration "/>
//             <input type ="text" id="zipCode"/>
//             <button id="F2"> Next</button>
        
//             </form>
//             </div>
//     }
// }
// class Confirmation extends React.Component{
//     render(){
//         <div>
//         <button id="F2"> Next</button>
//         </div>
//     }
// }



ReactDom.render(<App/> , document.getElementById('App'));