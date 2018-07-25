<template>
  <div>
    {{ message }}
    <table>
      <tbody>
        <key-setting
          v-for="keyString in Object.keys(settings.actionDefinitions)"
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
      }
    },
    components: {
      'key-setting': KeySetting
    },
    mounted() {
      chrome.storage.sync.get('settings', ({ settings }) => {
        this.settings = settings
      })
    },
    methods: {
      onDelete(keyString) {
        this.$delete(this.settings.actionDefinitions, keyString)
        chrome.storage.sync.set({ settings: this.settings })
      }
    }
  }
</script>

<style>
  div {
    color: #f0f;
  }
</style>
