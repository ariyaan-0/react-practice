import React from "react";

export default class Form extends React.Component{
    state = {
        title: 'JavaScript',
        text: "JS is cool"
    }

    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            title: e.target.value,
        })
    }

    render(){
        const {title, text} = this.state;
        return(
            <div>
                <form>
                    <input type="text" placeholder="title" value={title} onChange={this.handleChange} />
                    <br />
                    <br />
                    <textarea name="text" value={text} onChange={(e)=>(this.setState({text: e.target.value}))}></textarea>
                </form>
            </div>
        )
    }


}