<template>
    <div class="flex-box" >
        <div >
            <img :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`" alt="">
        </div>
        <div class="sinopse">
            <h4>{{ movie.title }}</h4>
            <p>{{ movie.overview }}</p>
            <ul class="genre-list">
                <li
                    v-for="genre in movie.genres" :key="genre.id"
                >{{ genre.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "MovieDescription",
  props: ["movie"]
}
</script>

<style lang="scss" scoped>
@import "@/scss/var.scss";
    .flex-box {
        background-color: $black-var;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        & .sinopse {
            width: 60%;
            text-align: justify;
            line-height: 40px;
            text-indent: 15px;
            & h4 {
                margin: 0 0 0 10px;
            }
            & .genre-list {
                display: flex;
                flex-direction: row;
                list-style: none;
                color: $red-var;
                font-weight: bold;
            }
        }
        & img {
            border-radius: 8px;
        }
    }

</style>