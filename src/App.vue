<template>
	<div id="app">
		<Row class="top">			
			<music-nav></music-nav>
		</Row>
		<Row class="center">
			<router-view></router-view>
		</Row>
		<Row class="bottom">
			<music-controller></music-controller>
		</Row>
	</div>
</template>

<script>
import musicNav from './components/nav/index'
import musicController from './components/controller/index'

export default {
	name: 'app',
	components: {
		musicNav: musicNav,
		musicController: musicController
	}
}
</script>


<style lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-moz-user-select: none; 
        -webkit-user-select: none; 
        -ms-user-select: none; 
        -khtml-user-select: none; 
        -o-user-select: none; 
        user-select: none;
		text-align: center;
		display: flex;
		flex-direction: column;
		position: absolute;
		width: 100%;
		top: 0;
		bottom: 0;
		.top {
			background: #000C40;
		}
		.center {
			flex: 1;
			background: linear-gradient( #000C40, #F0F2F0);
		}
		.bottom {
			height: 3.3125rem;
			background: linear-gradient(#F0F2F0, #FAFFD1);
		}
	}
</style>
