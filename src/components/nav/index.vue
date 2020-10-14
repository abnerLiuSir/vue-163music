<template>
    <div id="music-nav">
        <Row class="nav"  :gutter="16" type="flex" justify="center" align="middle" style="width: 100%">
            <i-col >
                <Row :gutter="8" type="flex" justify="center" align="middle">
                    <i-col >
                        <img src="../../assets/logo.png" class="logo">
                    </i-col>
                    <i-col class="logoFont" style="color: #ffffff">
                        网抑云音乐
                    </i-col>
                </Row>
            </i-col>
            <i-col style="height: 100%">
                <ul @click="routeHander">
                    <li v-for="items in navConfig" :key="items.id" :type="items.type">
                        {{items.name}}
                        <div :class="{arrow:items.type == navType}"></div>
                    </li>
                </ul>
            </i-col>
            <i-col style="margin-left: 8rem;">
                <search></search>
            </i-col>
            <i-col>
                <i-button shape="circle" type="ghost">创作者中心</i-button>
            </i-col>
            <i-col >
                <span>登录</span>
            </i-col>
        </Row>
        <Row class="childNav">
            <ul :class="{tabs: true, hide: navType !== '/discovery' }" @click="discoveryRouteHandle">
                <li v-show="navType == '/discovery'" v-for="(items, key) in childNavList" :key="key"  :type="items.type">{{items.name}}</li>
            </ul>     
        </Row>
    </div>
</template>

<script>
import search from "../search/index"
import navConfig from "./config.js" 

export default {
    data(){
        return {
            navConfig: navConfig,
            navType: "/discovery",
            childNavList: [
                {
                    type: "/",
                    name: "推荐"
                },
                {
                    type: "/leaderboard",
                    name: "排行榜"
                },
                {
                    type: "/songList",
                    name: "歌单"
                },
                {
                    type: "/radio",
                    name: "主播电台"
                },
                {
                    type: "/singer",
                    name: "歌手"
                },
                {
                    type: "/newDiscs",
                    name: "新碟上架"
                },
            ]
        }
    },
    components: {
        search: search
    },
    methods: {
        routeHander(e) {
            this.$router.push({ path: e.target.type })
            this.navType = e.target.type
        },
        discoveryRouteHandle(e) {
            this.$router.push({ path: '/discovery' + e.target.type })
        }
    }
}
</script>



<style  lang="less" scoped>
    #music-nav {
        .nav {
            .logo {
                width: 3rem;
            }
            .logoFont {
                font-family: "STLiti",sans-serif;
                font-size: 1.5rem;
            }
            ul {
                overflow: hidden;
                height: 4.375rem;
                li {
                    color: rgb(204, 204, 204);
                    float: left;
                    padding: 0 1.19rem;
                    height: 100%;
                    line-height: 4.375rem;
                    position: relative;
                    .arrow {
                        width: 0;
                        height: 0;
                        border: .5rem solid;
                        border-color: transparent transparent #1c92d2;
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        margin-left: -0.5rem ;
                    }
                }
                li:hover {
                    background-color: #000a33;
                    cursor: pointer;
                }
                
            }
            /deep/ .ivu-btn-ghost {
                color: rgb(204, 204, 204);
            }
            /deep/ .ivu-btn:hover {
                color: #ffffff;
                border: 0.5px solid rgb(255, 255, 255);
            }
            .user {
                width: 2rem;
            }
            .user:hover {
                background: rgba(0, 0, 0, 0);
                border: 0;
            }
        }
        .childNav {
            z-index: 10;
            .tabs {
                background: #1c92d2;
                color: #ffffff;
                height: 2rem;
                padding-left: 16rem;
                transition: 1 linear;
                li {
                    float: left;
                    height: 2rem;
                    line-height: 2rem;
                    padding: 0 1.5rem;
                }
                li:hover {
                    cursor: pointer; 
                    background: #085981;
                }
            }
            .hide {
                height: 5px;
            }
        }
    }
</style>