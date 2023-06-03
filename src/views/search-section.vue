<script setup>
import { ref } from 'vue'
let movies_search_result = ref([])
let reference = ref('')
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'
const API_KEY = 'api_key=da40ee18ea76f7db098434af1d23a761'
const BASE_URL = 'https://api.themoviedb.org/3/'
const API_URL = BASE_URL + 'search/movie?include_adult=true&language=es-MX&page=1'+API_KEY+'&query='
const getMovies = (url) =>{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQwZWUxOGVhNzZmN2RiMDk4NDM0YWYxZDIzYTc2MSIsInN1YiI6IjY0NzU3ZDUwNjc0M2ZhMDBjMjliYTE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FmbXq9cg2R5cIA8TDbjCAgCMqFz7VtRsCTWtpR3T2oU'
        }
    }
    fetch(url,options).then(res => res.json()).then(data=>{
        mapComponents(data.results)
    }).catch(error => console.log(error))
}
const mapComponents = (data) =>{
    movies_search_result.value = []
    data.forEach(movie =>{
        movies_search_result.value.push([movie.title, movie.poster_path, movie.overview])
    })
}
</script>
<template>
    <div class="search-container">
        <form class="search-form" @submit.prevent="getMovies(API_URL + reference)">
            <input type="text" class="search-input" placeholder="Busca tu pelicula..." v-model="reference">
            <button class="search-button"><span class="material-symbols-outlined">search</span></button>
        </form>
        <section class="search-result">
            <h1 class="advice" v-if="!movies_search_result.length">No has realizado busquedas</h1>
            <div v-else v-for="movie in movies_search_result" class="movie-container">
            <img v-bind:src="IMAGE_URL + movie[1] " loading="lazy" alt="" class="movie-image">
            <section class="about-movie">
                <h1 class="title">{{ movie[0] }}</h1>
                <p class="description"> {{ movie[2] }}</p>
            </section>
        </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.search-container{
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 3rem);
    margin-top: 3rem;
    .search-form{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        min-width: 320px;
        max-width: 500px;
        margin-top: 1rem;
        background-color: var(--input-selected-background);
        border-radius: 15px;
        .search-input{
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            padding-left: .5rem;
            width: calc(100% - 3rem);
            height: 1.5rem;
            border-right: 1px solid var(--background-color);
            &:focus{
                background-color: var(--input-background);
            }
        }
        .search-button{
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 3rem;
            &:hover{
                background-color: var(--input-background);
            }
        }
    }
    .search-result{
        display: grid;
        height: calc(100%);
        margin-top: 1rem;
        width: 100%;
        flex-direction: column;
        overflow-y: scroll;
        gap: 2rem;
        grid-template-columns: repeat(3,1fr);
        grid-auto-rows: 25rem;
        .advice{
            position: absolute;
            align-self: center;
            justify-self: center;
            color: var(--font-color);
        }
        .movie-container{
            margin-top: .5rem;
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
}
</style>