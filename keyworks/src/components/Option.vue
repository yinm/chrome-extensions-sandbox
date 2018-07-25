<template>
  <div>
    {{ message }}
    <table>
      <tbody>
        <key-setting
          v-for="keyString in keyStrings"
          :key="keyString"
          :keyString="keyString"
          :actionDefinitions="settings.actionDefinitions[keyString]"
          @child-on-delete="onDelete"
        />
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
        settings: {
          actionDefinitions: {},
        },
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
    methods: {
      onDelete(value) {
        alert(`parent delete ${value}`)
      }
    }
  }
</script>

<style>
  div {
    color: #f0f;
  }
</style>
