import { Component } from "react";
import Child from "./Childcomp";

class LifecycleDemo extends Component{
    constructor()
    {
        super()
        this.state={msg:"Good Morning",displayChild:true}
        console.log("constructor is executed..")
        setTimeout(() => {
            this.setState({msg:"Good Morning"})
         }, 3000)

    }

    chnageState(){

        console.log("get initial state executed..")
    }


    render(){
        console.log("render is executed..")
        console.log(this.state.displayChild)
        return(
        <div>
        <h1>{this.state.msg}</h1>
        {this.state.displayChild?<Child info={this.state.msg}/>:<p>false</p>}
        <button onClick={()=>{this.setState({displayChild:false})}}>hide/dispaly Child</button>
        </div>
        )


    }
shouldComponentUpdate(){
    return true

}    


    componentDidMount(){
        console.log("Component did mount is executed...")
    }

    componentWillUnmount(){
        console.log("Component will unmount executed...")
    }


}

export default LifecycleDemo