<script setup>
import { ref } from 'vue'
let movies_map = ref([])
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'
const API_KEY = 'api_key=da40ee18ea76f7db098434af1d23a761'
const BASE_URL = 'https://api.themoviedb.org/3/'
const API_URL = BASE_URL + 'discover/movie?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=popularity.desc&'+API_KEY
const getMovies = (url) =>{
    fetch(url).then(res => res.json()).then(data=>{
        mapComponents(data.results)
    }).catch(error => console.log(error))
}
const mapComponents = (data) =>{
    data.forEach(movie =>{
        movies_map.value.push([movie.title, movie.poster_path, movie.overview])
    })
}
getMovies(API_URL)
</script>
<template>
    <div class="movies-container">
        <div v-for="movie in movies_map" class="movie-container">
            <img v-bind:src="IMAGE_URL + movie[1] " loading="lazy" alt="" class="movie-image">
            <section class="about-movie">
                <h1 class="title">{{ movie[0] }}</h1>
                <p class="description"> {{ movie[2] }}</p>
            </section>
        </div>
    </div>
</template>
<style scoped lang="scss">
.movies-container{
  margin-top: 3rem;
  height: calc(100vh - 3rem);
  overflow-y: scroll;
  background-color: var(--background-color);
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 25rem;
  .movie-container{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    .about-movie{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--contrast-color);
        opacity: .7;
        width: 100%;
        height: 100%;
        transform: translateY(201%);
        transition: transform 1s;
    }
    .title, .description{
        padding: .5rem 0;
        width: 95%;
        text-align: center;
        color: var(--font-color);
    }
    .description{
        font-size: small;
        @media (min-width: 992px) {
            font-size: medium;
        }
        @media (max-width: 600px) {
            font-size: smaller;
        }
    }
    .title{
        @media (max-width: 600px) {
            font-size: small;
        }
    }
    .movie-image{
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    &:hover {
        .about-movie{
            transform: translateY(0%);
        }
    }
}
  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 30rem;
  }
  @media (max-width: 600px){
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: 15rem;
  }
}

</style>