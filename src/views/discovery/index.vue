<template>
    <div id="discovery">
       <div class="swiper">
           <swiper :banners="banners" ></swiper>
       </div>
       <Row class="content">
           <i-col class="content-left">
                <music-title sort="playlist"  :linkList="recommendLinkList"></music-title>
                <Row class="songList">
                    <sing-list-item class="singList-item" v-for="(items, keys) in singList" :key="keys" :listInfo="items"></sing-list-item>
                </Row>
                <music-title sort="newDiscs"  :linkList="newDiscs"></music-title>
                <Row class="newDiscs">
                    <new-discs-item class="newDiscsItem" v-for="(item, keys) in discsList" :key="keys" :discsInfo="item"></new-discs-item>
                </Row>
                <music-title sort="leaderboard"  :linkList="variousList"></music-title>
                <Row class="variousList">

                </Row>
           </i-col>
           <i-col class="content-right"></i-col>
       </Row>
       <music-player></music-player>
    </div>
</template>

<script>
import swiper from '../../components/swiper/index'
import { DISCOVERY_BANNER, DISCOVERY_HOT_RECOMMEND, DISCOVERY_HOT_ALBUM } from '../../api/list'
import musicTitle from '../../components/title/index'
import singListItem from '../../components/songListItem/index'
import newDiscsItem from '../../components/newDiscsItem/index'
import player from '../../components/player/index'

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
                ],
            },
            newDiscs: {
                description: "新碟上架"
            },
            variousList: {
                description: "榜单"
            },
            singList: [],
            discsList: []
        }
    },
    components: {
        swiper: swiper,
        musicTitle: musicTitle,
        singListItem: singListItem,
        newDiscsItem: newDiscsItem,
        musicPlayer: player
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
        DISCOVERY_HOT_ALBUM({
                offset: 0,
                limit: 5   
        }).then((res) => {
            this.discsList = res.data.body.monthData ? res.data.body.monthData : res.data.monthData;
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
                .newDiscs {
                    padding: 20px 0 20px 24px;
                    margin: 20px 0;
                    background: rgba(245, 245, 245, 0.2);
                    .newDiscsItem {
                        padding-right: 28px;
                    }
                }
            }
            .content-right {
                float: left;
                width: 254px;
            }
        }
    }
</style>