<template>
    <div id="discovery">
       <div class="swiper">
           <swiper :banners="banners" ></swiper>
       </div>
       <Row class="content">
           <i-col class="content-left">
               <music-title sort="playlist"  :linkList="recommendLinkList"></music-title>
               <Row>
                   <sing-list-item class="singList-item" v-for="(items, keys) in singList" :key="keys" :listInfo="items"></sing-list-item>
               </Row>
           </i-col>
           <i-col class="content-right"></i-col>
       </Row>
    </div>
</template>

<script>
import swiper from '../../components/swiper/index'
import { DISCOVERY_BANNER, DISCOVERY_HOT_RECOMMEND } from '../../api/list'
import musicTitle from '../../components/title/index'
import singListItem from '../../components/songListItem/index'

export default {
    data() {
        return {
            banners: [],
            recommendLinkList: {
                description: "热门推荐",
                list: [
                    {
                        name: "华语"
                    },
                    {
                        name: "流行"
                    },
                    {
                        name: "摇滚"
                    },
                    {
                        name: "民谣"
                    },
                    {
                        name: "电子"
                    },
                ]
            },
            singList: []
        }
    },
    components: {
        swiper: swiper,
        musicTitle: musicTitle,
        singListItem: singListItem
    },
    methods: {

    },
    mounted() {
        DISCOVERY_BANNER({type: 0})
            .then((res) => {
                this.banners = res.data.body.banners ? res.data.body.banners  : res.data.banners ;
            });
        DISCOVERY_HOT_RECOMMEND({limit: 8})
            .then((res) => {
                this.singList = res.data.body.result ? res.data.body.result : res.data.result;
            });
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
        .content {
            width: 61rem;
            margin: 0 auto;
            .content-left {
                float: left;
                width: 722px;
                padding: 20px;
                border: 1px #ccc solid;
                .singList-item {
                    padding: 10px 20px;
                    margin: 10px;
                }
            }
            .content-right {
                float: left;
                width: 254px;
            }
        }
    }
</style>