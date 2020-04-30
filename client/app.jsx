class App extends React.Component {
       constructor(props){
           super(props);
           this.state = {
               count : 0,
               name : "",
               email : "",
               password : "",
               street1: "",
               street2 : "",
               state : "",
               zip : "",
               phone : "",
               cardNumber : "",
               expiration : "",
               zipCode : ""


           };
       }
       next() {

           this.setState({count:this.state.count +1})
           console.log(this.state.count +1)
              
       }
       render(){
           if(this.state.count===0){
               return <CreateAcc next={this.next.bind(this)}/>
           }else if(this.state.count===1){
               return <Shipping next={this.next.bind(this)}/>
           }
           else if(this.state.count===2){
               return <Payment next={this.next.bind(this)}/>
           }
       }
    
    
}
   class CreateAcc extends React.Component{
       render(){
           return (
               <div>
            <form action="" method="Post" name="" >
            <label ><b>Name</b></label>
              <input type="text" placeholder="Enter Email" />
          
              <label ><b>Email</b></label>
              <input type="email" placeholder="Enter Password"  />
          
              <label ><b> Password</b></label>
              <input type="password" placeholder="Password"  />
          
              <label>
                <input type="checkbox" /> 
              </label>
            <button type="button" onClick = {this.props.next}>Next</button>
            </form>
          </div>
           )
       }
   }
   class Shipping extends React.Component{
       render(){
           return (
               <div>
               <form action="" method="POST">
               <input type ="text" id="street1"/>
               <input type ="text" id="street2"/>
               <input type ="text" id="state"/>
              <input type ="text" id="zip"/>
               <input type ="phone" id="phone"/>
               <button type="button" onClick = {this.props.next}>Next</button>
        
             </form>
             </div>
         )
     }
 }

 class Payment extends React.Component{
     render(){
         <div>
             <form action="" method="POST">
             <input type ="text" id="cardNumber"/>
             <input type ="date" id="expiration "/>
             <input type ="text" id="zipCode"/>
             <button id="F2"> Next</button>
             <button type="button" onClick = {this.props.next}>Next</button>
        
             </form>
             </div>
     }
 }
 class Confirmation extends React.Component{
     render(){
         <div>
          <button type="button" onClick = {this.props.next}>Next</button>
         </div>
     }
 }



ReactDOM.render(<App/> , document.getElementById('App'));