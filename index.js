movieContainer = document.querySelector("#movies");
movieList = document.querySelector("#my-movie");
const movieDrama = document.querySelector("#drama-movie");
const paginationEl = document.querySelectorAll(".pagination ul li");

const API_KEY = "346be7827b730d1b76b663853cd48756";
const url = "https://api.themoviedb.org/3/authentication";
const movieUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=$page=&sort_by=popularity.desc";
const searchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=346be7827b730d1b76b663853cd48756&query="';
const dramaUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18";
const comedyUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35";
const actionUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDZiZTc4MjdiNzMwZDFiNzZiNjYzODUzY2Q0ODc1NiIsInN1YiI6IjY1MDE0OWE0ZTBjYTdmMDBjYmVhZGM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BwBhgWu6h6lTkRYF4jjflDu7xMKQf8V0VrjrIx7aDcQ",
  },
};


function getMovie() {
  fetch(movieUrl, options)
    .then((res) => res.json())
    .then((res) => renderMovies(res.results))
    .catch((err) => console.error("error:" + err));
}

function renderMovies(movieList) {
  console.log(movieList);
  movieList.forEach((movie) => {
    movieContainer.innerHTML += `
      <div class='movie-card'>
      
        <img class='movie-poster'  src='https://image.tmdb.org/t/p/w1280${movie.poster_path}'/>
        <h2 class='movie-title'>${movie.title}</h2>

      </div>
      `
  });
}
getMovie(movieUrl);


//drama movie
function getDrama() {
  fetch(dramaUrl, options)
    .then((res) => res.json())
    .then((res) => renderDrama(res.results))
    .catch((err) => console.error("error:" + err));
}
function renderDrama(dramaMovies) {
  console.log(dramaMovies);
  dramaMovies.forEach((movie) => {
    movieDrama.innerHTML += `
      <div class='movie-card'>
        <img class='movie-poster'  src='https://image.tmdb.org/t/p/w1280${movie.poster_path}'/>
        <h2 class='movie-title'>${movie.title}</h2>
      </div>
      `
  });
}
getMovie(dramaUrl);

// comedy movie
const movieComedy = document.querySelector("#comedy-movie");
getComedy(comedyUrl);
function getComedy() {
  fetch(comedyUrl, options)
    .then((res) => res.json())
    .then((res) => rendercomedy(res.results))
    .catch((err) => console.error("error:" + err));
}
function rendercomedy(comedyMovies) {
  console.log(comedyMovies);
  comedyMovies.forEach((movie) => {
    movieComedy.innerHTML += `
      <div class='movie-card'>
         <img class='movie-poster'  src='https://image.tmdb.org/t/p/w1280${movie.poster_path}'/>
         <h2 class='movie-title'>${movie.title}</h2>
        
      </div>
      `
  });
}

// action movies
const movieAction = document.querySelector("#action-movie");
getActionMovies(actionUrl);
function getActionMovies() {
  fetch(actionUrl, options)
    .then((res) => res.json())
    .then((res) => renderActionMovies(res.results))
    .catch((err) => console.error("error:" + err));
}

function renderActionMovies(actionMovies) {
  console.log(actionMovies);
  actionMovies.forEach((movie) => {
    movieAction.innerHTML += `
  <div class='movie-card'>
    <img class='movie-poster' src='https://image.tmdb.org/t/p/w1280${movie.poster_path}'/>
    <h2 class='movie-title'>${movie.title}</h2>

  </div>
  `
  });
}
 
//contact validation

const Name =  document.getElementById("name").value;
const email = document.getElementById("email").value;

const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function formValidation(){
  
  if(ame===''){
    alert('Please enter your name.')
    return false
  }
  if(email===''){
    alert('Please enter your email')
    return false
  }
  if(!emailPattern.test(email)){
    alert('Enter coreect email')
    return false
  }
  if(subject===''){
    alert('Subject is require')
    return false
  }
  if(message===''){
    alert('Please enter your Meassage')
    return false
  }
  return true

}
formValidation()