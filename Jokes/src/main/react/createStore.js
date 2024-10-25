import { create } from "zustand";
import axios from "axios";

export const useStore = create((set, get) => ({
    randomJoke: {},
    randomJokeStatus: "",
    typeJoke: {},
    typeJokeStatus: "",
    typeOfJoke: "",
    jokeTypes: [],
    jokeTypesStatus: "",
    fetchRandomJoke: async() =>{
        set({randomJokeStatus: 'PENDING'})
        try{
            const res = await axios.get('/random')
            set({randomJoke: res.data, randomJokeStatus: 'SUCCESS'})
        }catch(err){
            set({randomJokeStatus: 'FAILURE'})
            console.log(err)
        }
    },
    fetchJokeByType: async(newJoketype) =>{
        set({typeJokeStatus: 'PENDING'})
        try{
            const res = await axios.get(`/jokes/${!newJoketype ? 'general' : newJoketype}`)
            set({typeJoke: res.data, typeJokeStatus: 'SUCCESS'})
        }catch(err){
            set({typeJokeStatus: 'FAILURE'})
            console.log(err)
        }
        //set({typeJokeStatus: 'PENDING'})
        //axios.get(`/jokes/${!newJoketype ? 'general' : newJoketype}`)
        //.then((res) => {
        //    set({typeJoke: res.data, typeJokeStatus: 'SUCCESS'})
        //})
        //.catch(() =>{
        //    set({typeJokeStatus: 'FAILURE'})
        //})
    },
    fetchJokeTypes: async() =>{
        set({jokeTypesStatus: 'PENDING'})
        try{
            const res = await axios.get('/types')
            set({jokeTypes: res.data, jokeTypesStatus: 'SUCCESS'})
        }catch(err){
            set({jokeTypesStatus: 'FAILURE'})
            console.log(err)
        }
    },
    changeType: (type) =>{
        set({typeOfJoke: type})
    }
}))