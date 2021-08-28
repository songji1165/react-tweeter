import React from "react";

class ContentBox extends React.Component{
    constructor(props) {
        super(props);

        console.log("constructor", this.props.name);
        this.state= {
            content:"input text, please",
            showContent: true
        };

        this.inputBox = React.createRef();
    }

    handleClickClose(){
        this.props.closeBtn();
    }

    handleClickButton(){
        let {showContent, content} = this.state;
        if(!showContent){
            content = this.inputBox.current.value;
            this.inputBox.current.value = "";
        }
        console.log("??", content)
        this.setState({showContent: !showContent, content});
    }

    handleChangeInput(e){
        console.log(e.target.value);
    }

    render(){
        const contentBoxStyle = {border: '1px solid', display: this.state.showContent ? 'block' : 'none'};
        const inputBoxStyle = {border: '1px solid', display: !this.state.showContent ? 'block' : 'none'};

        return(
            <div style={{border: '1px solid', padding: '3px'}}>
                <div style={{textAlign: 'right'}}>
                    <button onClick={()=>this.handleClickClose(this.props.tweetId)}>X</button>
                </div>
                <div>
                    <span style={{background: 'skyblue'}}>name: {this.props.name}</span>
                </div>
                <div>
                    <p style={contentBoxStyle}>
                        {this.state.content}
                    </p>
                    <input type='text' ref={this.inputBox} style={inputBoxStyle} onChange={this.handleChangeInput}/>
                </div>
                <div style={{textAlign: 'right'}}>
                    <button onClick={()=>this.handleClickButton()}>{this.state.showContent? "수정":"저장"}</button>
                </div>
            </div>
        )
    }
}

export default ContentBox;
