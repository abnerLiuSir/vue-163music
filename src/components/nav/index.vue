<template>
    <div id="music-nav">
        <Row  :gutter="16" type="flex" justify="center" align="middle" style="width: 95%">
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
                    <li v-for="items in navConfig" :key="items.id" :type="items.type">{{items.name}}</li>
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
    </div>
</template>

<script>
import search from "../search/index"
import navConfig from "./config.js" 

export default {
    data(){
        return {
            navConfig: navConfig
        }
    },
    components: {
        search: search
    },
    methods: {
        routeHander(e) {
            this.$router.push({ path: e.target.type })
        }
    }
}
</script>



<style  lang="less" scoped>
    #music-nav {
        height: 100%;
        .logo {
            width: 3rem;
        }
        .logoFont {
            font-family: "STLiti",sans-serif;
            font-size: 1.5rem;
        }
        ul {
            overflow: hidden;
            height: 100%;
            li {
                color: rgb(204, 204, 204);
                float: left;
                padding: 0 1.19rem;
                height: 100%;
                line-height: 4.375rem;
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
</style>