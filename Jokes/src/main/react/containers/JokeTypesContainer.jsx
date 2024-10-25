
import React, { useEffect, useState } from "react";
import JokeView from "../components/JokeView";
import { useStore } from "../createStore";

//functional component
const JokeTypesContainer = () => {
    const newJoke = useStore()

    useEffect(() => {
        newJoke.fetchJokeTypes()
        newJoke.fetchJokeByType(null)
    },[])

    function handleClick(){
        newJoke.fetchJokeByType(newJoke.typeOfJoke)
    }
    
    return newJoke.typeJokeStatus === "SUCCESS" ? 
        <>
            <div>
                {/*
                <select onChange={(event) => newJoke.changeType(event.target.value)}>
                    <option value="general">General</option>
                    <option value="dad">Dad</option>
                    <option value="knock-knock">Knock-Knock</option>
                    <option value="programming">Programming</option>
                </select>
                */}

                <select onChange={(event) => newJoke.changeType(event.target.value)}>
                    <option>Please select a type</option>
                    {newJoke.jokeTypes.map((type, index) => {
                        return(
                            
                            <option key={index} value={type}>{type}</option>
                            
                        )
                    })}
                </select>
                

                {/** 
                {typeList.jokeTypes.map((type, index) => {
                    return(
                        <select onChange={(event) => this.setState({jokeType: event.target.value})}>
                            <option key={index} value={type}>{type}</option>
                        </select>
                    )
                })}
                */}
                

                    {/*<select
                        placeholder="Choose a Joke Type"
                        type="text"
                        value={jokeType}
                        onChange={(event) => this.setState({jokeType: event.target.value})}
                    />*/}
                <button disabled={!newJoke.typeOfJoke} type="button" className="btn btn-info" onClick={handleClick}>
                    Fetch This Type of Joke
                </button>
            </div>
            <div className="row justify-content-center">
            <div className="card">
            <div className="card-body">
            <JokeView 
                jokeInfo={newJoke.typeJoke}
            />
            </div>
            </div>
            </div>
        </>
        
        : newJoke.typeJokeStatus === "FAILURE" ?
            onFailure()
            : <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

    function onFailure(){
        return(
            <div>
                Oops something went wrong, please try again later...
            </div>
        )
    }
    
}

export default JokeTypesContainer