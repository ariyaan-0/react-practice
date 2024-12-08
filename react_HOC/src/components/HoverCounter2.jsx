import React from "react";

export default class HoverCounter2 extends React.Component{

    state = {
        count: 0,
    }

    incrementCount = () =>{
        this.setState((prevState)=>({count: prevState.count+1}))
    }


    render(){
        const {count} = this.state
        return(
            <>
                <h1 onMouseOver={this.incrementCount}>Hovered {count} times</h1>
            </>
        )
    }
}