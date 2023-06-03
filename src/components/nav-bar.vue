<template>
    <nav class="navigation-bar">
        <img src="../../src/assets/Logo.svg" alt="Logo" class="logo">
        <section class="list">
            <ul class="unordered-list">
                <li class="list-item" @click="$router.push('/')">Descubre</li>
                <li class="list-item" @click="$router.push('/search')">Busca</li>
                <li class="list-item">Mas info</li>
            </ul>
        </section>
    </nav>
</template>
<style lang="scss" scoped>
.navigation-bar{
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 3rem;
    display: flex;
    z-index: 1000;
    justify-content: space-between;
    background-color: var(--contrast-color);
    .logo{
        margin-left: .5rem;
        position: relative;
        height: 90%;
        align-self: center;
    }
    .list{
        position: relative;
        display: flex;
        height: 3rem;
        align-items: center;
        justify-content: center;
        .unordered-list{
            margin-right: 1rem;
            display: flex;
            .list-item{
                color: var(--font-contrast-color);
                position: relative;
                align-self: center;
                justify-self: center;
                list-style-type: none;
                margin-left: .5rem;
                padding-right: .5rem;
                cursor: pointer;
                border-right: 1px solid var(--font-color);
                &:last-child{
                    border: none;
                }
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>