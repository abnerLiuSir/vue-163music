<template>
	<div id="app">
		<Row class="top">			
			<music-nav class="music-nav "></music-nav>
		</Row>
		<Row class="center">
			<router-view></router-view>
		</Row>
		<Row class="bottom">
			<music-nav class="music-nav "></music-nav>
		</Row>
	</div>
</template>

<script>
import musicNav from './components/nav/index'

export default {
	name: 'app',
	components: {
		musicNav: musicNav,
	}
}
</script>


<style lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: flex;
		flex-direction: column;
		position: absolute;
		width: 100%;
		top: 0;
		bottom: 0;
		.top {
			height: 4.375rem;
			background: rgb(36,36,36);
		}
		.center {
			flex: 1;
		}
		.bottom {
			height: 3.3125rem;
			background: rgb(51,51,51);
		}
	}
</style>
