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
    <div v-for="movie in movies_map" class="movie-container">
        <img v-bind:src="IMAGE_URL + movie[1] " alt="" class="movie-image">
        <section class="about-movie">
            <h1 class="title">{{ movie[0] }}</h1>
            <p class="description"> {{ movie[2] }}</p>
        </section>
    </div>
</template>
<style scoped lang="scss">
.movie-container{
    margin-top: 2rem;
    align-self: center;
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
        margin-bottom: 1rem;
        width: 90%;
        text-align: center;
        color: var(--font-color);
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
</style>