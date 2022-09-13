<template>
    <div class="card_wrapper">
        <div class="poster">
            <img :src="el.poster" :alt="`Poster de: ${el.origin_title}`" />
        </div>
        <div class="card_info">
            <h3>
                Titolo:
                <span class="card_content">
                    {{ el.title }}
                </span>
            </h3>
            <p>
                Titolo originale:
                <span class="card_content">
                    {{ el.origin_title }}
                </span>
            </p>
            <p>
                Lingua:
                <span class="card_content">
                    <img height="20px" :src="el.flag" :alt="`${el.lang}`" />
                </span>
            </p>
            <p class="card_vote">
                Voto:
                <!-- {{ el.vote }} -->
                <span v-for="star in 5" :key="`${star}.star`">
                    <span class="vote_average" v-if="star <= el.vote">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </span>
                    <span class="vote" v-else-if="star > el.vote">
                        <font-awesome-icon icon="fa-regular fa-star" />
                    </span>
                </span>
            </p>
            <p class="card_overview">
                Overview:
                <span class="card_content">
                    {{ el.overview}}
                </span>
            </p>
            <p class="card_people">
                Cast:
                <span class="card_content">
                    
                </span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardComponent',
    props: {
        el: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';
</style>