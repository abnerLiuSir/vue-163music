<template>
    <div id="title">
        <Row type="flex" justify="start" align="middle">
            <i-col class="circle"></i-col>
            <i-col class="description">{{linkList.description}}</i-col>
            <i-col class="linkList">
                <ul>
                    <li v-for="(items, keys) in linkList.list" :key="keys" >
                        <router-link :to="'/discovery/' + sort + '?cat='+items.name">{{items.name}}</router-link>
                    </li>
                </ul>
            </i-col>
            <i-col offset="9">
                <router-link style="color: #666;font-size: 16px" :to="'/discovery/' + sort">更多...</router-link>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    props: {
        linkList: {
            type: Object,
            default: new Object()
        },
        sort: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="less" scoped>
    #title {
        border-bottom: 2px solid #1c92d2;
        .circle {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #ffffff;
            border: 5px solid #1c92d2;
            margin: 0 9px;
        }
        .description {
            font-size: 20px;
        }
        .linkList {
            ul {
                margin-left: 20px;
                li {
                    float: left;
                    padding: 0 10px;
                    a {
                        color: #666;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>