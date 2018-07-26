<template>
  <form>
    <div>
      <label>
        Key
        <input type="text" @keydown="onKeyDown" :value="keyString" required />
      </label>
    </div>
  </form>
</template>

<script>
  import { detectKeyString } from 'key-string'

  export default {
    name: 'input-key-setting',
    data() {
      return {
        keyString: '',
      }
    },
    methods: {
      onKeyDown(e) {
        const keyString = detectKeyString(e)
        if (!keyString.includes('Unknown')) {
          this.keyString = keyString
        }
      },
    }
  }
</script>
