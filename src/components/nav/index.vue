<template>
    <div id="music-nav">
        <Row  gutter=16 type="flex" justify="center" align="middle" style="height: 100%">
            <i-col >
                <h1 class="logo">
                    <a hidefocus="true" href="#" style="color: #fff"></a>
                </h1>
            </i-col>
            <i-col style="height: 100%">
                <ul @click="routeHander">
                    <li type="discovery">发现音乐</li>
                    <li type="myMusic">我的音乐</li>
                    <li type="friend">朋友</li>
                    <li type="Musician">音乐人</li>
                    <li type="downloadApps">下载客户端</li>
                </ul>
            </i-col>
            <i-col>
                <search></search>
            </i-col>
        </Row>
    </div>
</template>

<script>
import search from "../search/index"
export default {
    data(){
        return {

        }
    },
    components: {
        search: search
    },
    methods: {
        routeHander(e) {
            console.log(e.target.type)
        }
    }
}
</script>



<style  lang="less" scoped>
    #music-nav {
        height: 100%;
        .logo {
            background-image: url(../../assets/163music.png);
            width: 10.25rem;
            height: 2.5rem;
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
                color: #fffff !important;
                background-color: #000;
                cursor: pointer;
            }
            
        }
    }
</style>