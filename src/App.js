import React from "react";
import './App.css';
import ContentBox from "./component/ContentBox";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            tweets: ['a', 'b', 'c', 'd', 'e', 'f']
        }
    }

    deleteTweets(index){
        console.log("?? ", index);
        const newTweets = this.state.tweets.filter((tweet, idx) => idx != index);
        console.log("?? ", newTweets);
        this.setState({tweets: newTweets});
    }


    render(){
        const {tweets} = this.state;
        console.log("RENDER", tweets);
        return(
            <div>
                {tweets.map((tweet, idx) => (
                    <ContentBox tweetId={idx} name={tweet} key={idx} closeBtn={()=>this.deleteTweets(idx)}/>
                ))}
            </div>
        )
    }
}

export default App;
