<template>
    <div id="controller">
        <Row style="height: 100%;" type="flex" justify="start" align="middle">
            <i-col class="play-controller" style="margin:0 1rem 0 8.6rem;">
                <play-controller></play-controller>
            </i-col>
            <i-col  style="padding:0 .6rem;">
                <img class="cover"  src="../../assets/404.jpg" alt="">
            </i-col>
            <i-col style="padding:0 .6rem;">
                <progress-bar></progress-bar>
            </i-col>
        </Row>
    </div>
</template>

<script>
import playController from './playController/index'
import progressBar from './progressBar/index'

export default {
    data() {
        return {

        }
    },
    components: {
        playController: playController,
        progressBar: progressBar
    }
}
</script>

<style lang="less" scoped>
    #controller {
        height: 100%;
        width: 100%;
        .play-controller {
            width: 8.56rem;
        }
        .cover {
            width: 2rem;
            height: 2rem;
        }
    }
</style>