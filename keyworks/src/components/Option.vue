<template>
  <div>
    {{ message }}
    <table>
      <tbody>
        <key-setting v-for="keyString in keyStrings" :keyString="keyString" />
      </tbody>
    </table>
  </div>
</template>

<script>
  import KeySetting from './KeySetting'

  export default {
    data() {
      return {
        message: 'Hello Vue',
        settings: {},
        keyStrings: [],
      }
    },
    components: {
      'key-setting': KeySetting
    },
    mounted() {
      chrome.storage.sync.get('settings', ({ settings }) => {
        this.settings = settings
        this.keyStrings = Object.keys(this.settings.actionDefinitions)
      })
    },
  }
</script>

<style>
  div {
    color: #f0f;
  }
</style>
