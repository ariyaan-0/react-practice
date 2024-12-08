import React from "react";

export default class ClickCounter2 extends React.Component{

    render(){

        const {count, incrementCount} = this.props

        return(
            <>
                <button type="button" onClick={incrementCount}>Clicked {count} times</button>
            </>
        )
    }
}