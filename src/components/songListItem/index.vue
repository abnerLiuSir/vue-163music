<template>
    <div id="songList-item">
        <div class="cover">
            <img :src="listInfo.picUrl">
            <Row class="coverInfo" type="flex" justify="start" align="middle">
                <i-col class="listen"></i-col>
                <i-col style="color: rgb(204, 204, 204)"> {{ listInfo.playCount / 10000 >= 1 ? Math.floor(listInfo.playCount / 10000) : listInfo.playCount }} 万</i-col>
                <i-col class="play">
                    <div></div>
                </i-col>
            </Row>
        </div>
        <Row class="name">{{listInfo.name}}</Row>
    </div>
</template>

<script>
export default {
    props: {
        listInfo: {
            type: Object,
            default: new Object
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    #songList-item {
        float: left;
        width: 140px;
        .cover {
            position: relative;
            float: left;
            img {
                width: 140px;
                height: 140px;
            }
            .coverInfo {
                height: 27px;
                width: 140px;
                padding: 2px;
                position: absolute;
                bottom: 0;
                background: rgba(0, 0, 0,.3);
                border: 1px solid #000;
                .listen {
                    width: 16px;
                    height: 16px;
                    margin: 0 8px;
                    background: url("../../assets/listen.png");
                }
                .play {
                    border: 2px solid rgb(204, 204, 204);
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                    position: absolute; 
                    right: 10px;
                    cursor: pointer;
                    div {
                        border: 6px solid;
                        border-color:transparent transparent  transparent rgb(204, 204, 204);
                        margin-left: 4px;
                    }
                }
            }
        }

        .name {
            float: left;
            width: 140px;
            height: 48px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            padding-top: 6px;
        }

    }
</style>