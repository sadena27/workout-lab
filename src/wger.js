import axios from 'axios';

// var url = 'https://wger.de/api/v2/exerciseimage/?is_main=True/?language=2/?limit=40';

var url = 'https://wger.de/api/v2/exercise/?limit=50&language=2'

var data = getData(url);

async function getData (url) {
    return axios.get(url)
    .then(response => {
        // console.log(response.data);
        data = response.data;
        return response.data;
    })
    .catch(error => {
        console.log(error);
    })
}

await getData(url);

// console.log(data.map ((exercise) => {
//     console.log(exercise.id);
//     console.log(exercise.image);
//     console.log("");
//     }
// ));

console.log(data);

