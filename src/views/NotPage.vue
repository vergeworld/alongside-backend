<template>
  <div class="not-page" :style="{ backgroundColor: bColor }">
    <h1>404</h1>
    <span>对不起，没有找到你请求的页面</span>
  </div>
</template>

<script>
import generateColor from '@/unit/generateColor'

export default {
  name: 'NotPage',
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {
    this.bColor = generateColor()
  },
  mounted() { },
  methods: {}
}
</script>
<style lang='less' scoped>
.not-page {
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 160px;
    letter-spacing: 2;
  }

  span {
    letter-spacing: 4px;
    line-height: 2;
  }
}
</style>
