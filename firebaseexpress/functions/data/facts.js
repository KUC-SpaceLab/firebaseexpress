const  fetch = require('isomorphic-fetch');

export default function getFacts(){
    return fetch("https://fir-express-c55f5.firebaseio.com/facts.json")
        .then(res => res.json());
}