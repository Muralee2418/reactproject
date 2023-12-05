import { Component } from "react";

class Child extends Component{
    constructor(){
        super()
        this.state={content:"Click"}
    }

    render(){
        console.log("childComponent render..")
        return(<h1>
            {this.state.content}
        </h1>)
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("get derived state from props...")
        if (props.info!==state.content){
            return {content:props.info}
            
        }
        return null
        
    }

    shouldComponentUpdate(nextprops){
        if(this.props.info==nextprops.info){
            return false
        }
        return true

    }
    componentWillRecieveProps(nextprops){

        console.log("Component will recieve props executed..")
        
    }

    componentDidMount(){
        console.log("childComponent did mount executed..")
    }

    componentWillUnmount(){
        console.log("child will unmount executed")
    }
}

export default Child