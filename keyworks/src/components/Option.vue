<template>
  <div>
    <Header />
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
  import Header from './Header'
  import KeySetting from './KeySetting'
  import InputKeySetting from './InputKeySetting'

  export default {
    data() {
      return {
        settings: {
          actionDefinitions: {},
        },
      }
    },
    components: {
      Header,
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

      onSubmit(keyString, type, value) {
        this.$set(
          this.settings.actionDefinitions,
          keyString,
          {
            type: type,
            value: value,
          }
        )

        chrome.storage.sync.set({ settings: this.settings })
      },
    }
  }
</script>

<style>
  div {
    background-color: #ddd;
  }
</style>
