<template>
    <div id="swiper">
        <Carousel
            :autoplay="setting.autoplay"
            :autoplay-speed="setting.autoplaySpeed"
        >
            <Carousel-item v-for="(items, keys) in banners" :key="keys">
                <img class="image" :src="items.imageUrl">
            </Carousel-item>
        </Carousel>
        <div class="download"></div>
    </div>
</template>

<script>


export default {
    props: {
        banners: {
            type: Array,
            default: new Array()
        },
    },
    data() {
        return {
            setting: {
                autoplay: true,
                autoplaySpeed: 2000
            }
        }
    },
}
</script>

<style lang="less" scoped>
    #swiper {
        height: 100%;
        position: relative;
        .image {
            height: 285px;
            width: 722px;
        }
        /deep/ .ivu-carousel-arrow.right {
            right: -6rem;
        }
        /deep/ .ivu-carousel-arrow.left {
            left: -6rem;
        }
        .download {
            width: 254px;
            height: 285px;
            background: url("../../assets/download.png");
            position: absolute;
            right: 0;
            top: 0;
        }
    }
</style>