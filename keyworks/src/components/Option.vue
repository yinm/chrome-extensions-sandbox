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
    <input-key-setting @child-on-submit="onSubmit" />
  </div>
</template>

<script>
  import KeySetting from './KeySetting'
  import InputKeySetting from './InputKeySetting'

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
      InputKeySetting,
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
      },

      onSubmit(keyString, value) {
        console.log(keyString)
        console.log(value)
      },
    }
  }
</script>

<style>
  div {
    color: #f0f;
  }
</style>
