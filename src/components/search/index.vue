<template>
    <div id="music-search">
        <i-input icon="ios-search" > </i-input>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    #music-search {
        width: 9.875rem;
        /deep/ .ivu-input {
            width: 100%;
            border-radius: 0.7rem;
        }
        /deep/ .ivu-input:focus {
            border-color: #000C40;
        }
        /deep/ .ivu-input-icon {
            left: 0;
        }
    }
</style>