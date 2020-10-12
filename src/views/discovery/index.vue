<template>
    <div id="discovery">
       <div class="swiper">
           <swiper :banners="banners" ></swiper>
       </div>
    </div>
</template>

<script>
import swiper from '../../components/swiper/index'
import { DISCOVERY_BANNER } from '../../api/list'

export default {
    data() {
        return {
            banners: []
        }
    },
    components: {
        swiper: swiper
    },
    methods: {

    },
    mounted() {
        DISCOVERY_BANNER({type: 0})
            .then((res) => {
                this.banners = res.data.banners;
            })
    }
}
</script>

<style lang="less" scoped>
    #discovery {
        .swiper {
            width: 61rem;
            height: 285px;
            margin: 0 auto;
        }
    }
</style>