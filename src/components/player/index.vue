<template>
    <div id="player">
        <audio :pause="flag" src="https://music.163.com/song/media/outer/url?id=21803760.mp3"></audio>
    </div>
</template>

<script>
export default {
    name: "music-player",
    data() {
        return {
            flag: false
        }
    }
}
</script>