<template>
    <div class="card_wrapper">
        <div class="poster">
            <img :src="tv.poster" :alt="`Poster de: ${tv.origin_title}`" />
        </div>
        <div class="card_info">
            <h3>
                Titolo:
                <span class="card_content">
                    {{ tv.title }}
                </span>
            </h3>
            <p>
                Titolo originale:
                <span class="card_content">
                    {{ tv.origin_title }}
                </span>
            </p>
            <p>
                Lingua:
                <span class="card_content">
                    <span v-if="tv.flag">
                        <img height="20px" :src="tv.flag.src" :alt="`${tv.lang}`" />
                    </span>
                    <span v-else>
                        <img height="20px" :src="tv.flag.default" :alt="`${tv.lang}`" />

                    </span>
                </span>
            </p>
            <p class="card_vote">
                Voto:
                <!-- {{ tv.vote }} -->
                <span v-for="star in 5" :key="`${star}.star`">
                    <span class="vote_average" v-if="star <= tv.vote">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="vote" v-else-if="star > tv.vote">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </span>
            </p>
            <p class="card_overview">
                Overview:
                <span class="card_content">
                    {{ tv.overview}}
                </span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardTvComponent',
    props: {
        tv: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';
</style>