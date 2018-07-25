<template>
  <div>
    {{ message }}
    <key-setting></key-setting>
  </div>
</template>

<script>
  import KeySetting from './KeySetting'

  export default {
    data() {
      return {
        message: 'Hello Vue'
      }
    },
    components: {
      'key-setting': KeySetting
    }
  }
</script>

<style>
  div {
    color: #f0f;
  }
</style>
