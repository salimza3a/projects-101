
let moviePoster = document.getElementById('moviePoster');
let movieTitle = document.getElementById('movieTitle');
let movieAwards = document.getElementById('movieAwards');
let movieRatings = document.getElementById('movieRatings')
let movieYear = document.getElementById('movieYear')

let container = document.getElementById('container')

 async function getMovieData (title) {
 	try{
        let firstResult = await fetch(`http://www.omdbapi.com/?apikey=e4825e4b&t=${title}`);
    let secondResult = await firstResult.json()
    console.log(secondResult)
    updateData(secondResult)
}catch(err) {
    console.log(err)
}
 }




 document.getElementById('btn').addEventListener('click', () => {

    let inputValue = document.getElementById('movieValue')
 
    getMovieData(inputValue.value)
    inputValue.value = "";
 })


function updateData (value) {
    moviePoster.src = `${value.Poster}`;
    movieTitle.innerHTML = ` Title: ${value.Title}`
    movieAwards.innerHTML = ` Awards: ${value.Awards}`
    movieYear.innerHTML = ` Year: ${value.Year}`
    movieRatings.innerHTML = `${value.imdbRating}/10`
}








