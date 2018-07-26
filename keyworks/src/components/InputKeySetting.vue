<template>
  <form @submit="onSubmit">
    <div>
      <label>
        Key
        <input type="text" @keydown="onKeyDown" :value="keyString" required />
      </label>
    </div>
    <div>
      <label>
        Value
        <input type="text" @change="onChange" :value="value" required />
      </label>
    </div>
    <input type="submit" value="Add"/>
  </form>
</template>

<script>
  import { detectKeyString } from 'key-string'

  export default {
    name: 'input-key-setting',
    data() {
      return {
        keyString: '',
        value: '',
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault()
        this.$emit('child-on-submit', this.keyString, 'CopyToClipboard', this.value)
      },

      onKeyDown(e) {
        const keyString = detectKeyString(e)
        if (!keyString.includes('Unknown')) {
          this.keyString = keyString
        }
      },

      onChange(e) {
        this.value = e.target.value
      },
    }
  }
</script>
