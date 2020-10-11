<template>
    <div id="progress-bar">
        <Row :gutter="32" type="flex" justify="start" align="middle">
            <i-col>囍（Chinese Wedding）</i-col>
            <i-col>葛东琪</i-col>
        </Row>
        <Row  type="flex" justify="start" align="middle">
            <i-col class="background">
                <div class="progress"></div>
                <div class="ball"></div>
            </i-col>
            <i-col style="margin-left: .6rem;"> 1:46 / 4:32 </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    #progress-bar {
        width: 38rem;
        height: 2.3rem;
        .background {
            height: 0.6rem;
            background: #d4effc;
            border-radius: 2rem;
            width: 32rem;
            .progress {
                border-radius: 2rem;
                height: 0.6rem;
                width: 50%;
                background: #1c92d2;
                float: left;
            }
            .ball {
                float: left;
                width: .8rem;
                height: .8rem;
                margin-top: -0.1rem;
                margin-left: -0.2rem;
                background: #1c92d2;
                border-radius: 50%;
            }
            .ball:hover {
                box-shadow:0 0 .8rem #5cc2f5;
                width: 1rem;
                height: 1rem;
                margin-top: -0.2rem;
            }
        }
    }
</style>