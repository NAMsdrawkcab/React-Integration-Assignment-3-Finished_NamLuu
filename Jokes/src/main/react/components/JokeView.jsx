import React from "react";

//functional component
const JokeView = (props) => {
    const {jokeInfo} = props

    if(!jokeInfo || !jokeInfo.setup){
        <div>Nothing is here</div>
    }

    if(Array.isArray(jokeInfo)){
        return(
            <div>
                {jokeInfo.map((joke, index) => (
                    <div key={index}>
                        <h1>
                            Here's a joke for you!
                        </h1>
                        <div>
                            {joke.setup}
                        </div>
                        <div>
                            {joke.punchline}
                        </div>
                        <div>
                            This is a {joke.type} joke.
                        </div>
                    </div>
                ))}
             </div>
        )
    }else{
        return(
            <div>
                <h1>
                    Here's a joke for you!
                </h1>
                <div>
                    {jokeInfo.setup}
                </div>
                <div>
                    {jokeInfo.punchline}
                </div>
                <div>
                    This is a {jokeInfo.type} joke.
                </div>
            </div>
        )
    }
    
}

export default JokeView;