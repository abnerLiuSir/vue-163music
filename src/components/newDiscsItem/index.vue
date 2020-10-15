<template>
    <div id="newDiscsItem">
        <div class="content">
            <div class="circle"></div>
            <div class="border"></div>
            <img :src="discsInfo.picUrl" >
        </div>
        <div class="discsInfo">
            <div>{{discsInfo.name}}</div>
            <div style="color: #666">{{discsInfo.artist.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        discsInfo: {
            type: Object,
            default: new Object
        }
    }
}
</script>

<style lang="less" scoped>
    #newDiscsItem {
        float: left;
        .content {
            width:  100px;
            height: 100px;
            float: left;
            position: relative;
            .circle {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background: #000;
                position: absolute;
                top: 50%;
                margin-top: -35px;
                right: -20px;
                z-index: 10;
                box-shadow: 0 0 10px #222;
            }
            .border {
                width: 105px;
                height: 80px;
                border: 1px solid #ccc;
                position: absolute;
                margin-top: 10px;
                z-index: 100;
            }
            img {
                position: absolute;
                width: 100px;
                height: 100px;
                z-index: 1000;
            }
        }
        .discsInfo {
            font-size: 12px;
        }
    }
</style>