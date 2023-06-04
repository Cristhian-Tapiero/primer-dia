<template>
    <div class="about-section">
        <h1 class="title">Busca Pelis</h1>
        <section class="about-sub-section">
            <div class="tmdb">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Data Base Logo" class="tmdb-logo">
                <p class="text">Esta pagina utiliza los recursos facilitados por TMDB, se ha utilizado fetch para la realización de todo este proyecto</p>
            </div>
            <div class="about-me">
                <h2 class="sub-title">Cristhian David Tapiero Padilla</h2>
                <p class="text">Soy estudiante de ingeniería de Sistemas de la universidad Libre, en estos momentos soy desarrollador junior orientado al front-end. Llevo 3 años programando y puedes contactarme a traves de:</p>
                <section class="social-media">
                    <a href="" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="icon"/></a>
                    <a href="" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" class="icon"/></a>
                    <a href="" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="icon"/></a>
                </section>
            </div>
        </section>
        <footer class="footer-section">
            <h3 class="more">Para mas proyectos así visita el siguiente <a href="" target="_blank">enlace</a></h3>
        </footer>
    </div>
</template>
<style lang="scss" scoped>
.about-section{
    position: relative;
    height: calc(100vh - 3rem);
    margin-top: 3rem;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--background-color);
    overflow-y: scroll;
    .title{
        color: var(--font-contrast-color);
        letter-spacing: .3rem;
    }
    .about-sub-section{
        position: relative;
        display: flex;
        width: 100%;
        height: 60%;
        align-items: center;
        justify-content: space-around;
        gap: 1rem;
        
        .tmdb{
            position: relative;
            width: calc(50% - 2rem);
            max-width: 30rem;
            display: flex;
            height: 15rem;
            flex-direction: column;
            margin-left: 1rem;
            box-shadow: .6rem 0.3em 1em var(--font-color);
            justify-content: center;
            padding: 1rem;
            .tmdb-logo{
                width: 50%;
                align-self: center;
                margin-bottom: 2rem;
            }
            .text{
                color: var(--font-color);
            }
        }
        .about-me{
            padding: 1rem;
            margin-right: 1rem;
            position: relative;
            width: calc(50% - 2rem);
            max-width: 30rem;
            height: 15rem;
            display: flex;
            flex-direction: column;
            box-shadow: .6rem 0.3em 1em var(--font-color);
            .sub-title{
                color: var(--font-contrast-color);
                margin-bottom: 1rem;
                text-align: center;
            }
            .text{
                color: var(--font-color);
                text-align: center;
            }
            .social-media{
                margin-top: 1rem;
                align-self: center;

                .icon{
                    text-decoration: none;
                    color: var(--font-color);
                    position: relative;
                    margin: 0 .5rem;
                    height: 2rem;
                    width: 2rem;
                    &:hover{
                        filter: drop-shadow(.2rem .1rem 1rem var(--font-color));
                    }
                }
            }
        }
        @media (max-width: 600px) {
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            height: 90%;
            .tmdb, .about-me{
                margin: 0;
                width: 100%;
                max-height: 15rem;
            }
        }
    }
    .more{
        position: relative;
        color: var(--font-color);
        align-self: flex-end;
        justify-self: end;
        a{
            text-decoration: none;
            color: var(--link-color);
            transition: color 1s, text-decoration 1s;
            &:hover{
                color: var(--link-hover-color);
                text-decoration: underline;
            }
        }
    }
}
</style>