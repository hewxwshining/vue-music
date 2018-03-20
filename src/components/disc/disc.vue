<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>
<script type="text/javascript">
import MusicList from 'components/music-list/music-list'
import { getSongList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'
import { createReSong } from 'common/js/song'

export default {
  data() {
    return {
      songs: []
    }
  },
  computed: {
    title() {
      return this.disc.dissname;
    },
    bgImage() {
      return this.disc.imgurl;
    },
    ...mapGetters([
      'disc'
    ])
  },
  components: {
    MusicList
  },
  mounted() {
    this._getSongList();
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) {
        this.$router.push('/recommend')
        return
      }
      getSongList(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.cdlist[0].songlist)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []

      list.forEach((musicData) => {
        if (musicData.id && musicData.album.mid) {
          ret.push(createReSong(musicData))
        }
      })
      return ret
    }
  }
}

</script>
<style type="scss" scoped>
  .slide-enter-active,.slide-leave-active{ transition: all 0.3s; } .slide-enter, .slide-leave-to{ transform: translate3d(100%, 0, 0); }
</style>
