<template>
  <div>
    {{ message }}
    <key-setting :keyString="keyString"></key-setting>
  </div>
</template>

<script>
  import KeySetting from './KeySetting'

  export default {
    data() {
      return {
        message: 'Hello Vue',
        keyString: 'Ctrl-L',
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
