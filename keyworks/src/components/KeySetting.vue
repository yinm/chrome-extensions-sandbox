<template>
  <tr>
    <td>
      <kbd>{{ keyString }}</kbd>
    </td>
    <td>
      {{ actionDefinitions.type }}
    </td>
    <td>
      {{ actionDefinitions.value }}
    </td>
    <td>
      <button @click="onDelete">x</button>
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'key_setting',
    props: {
      keyString: String,
      actionDefinitions: Object,
    },
    data() {
      return {
        key: 'Ctrl-L',
      }
    },
    methods: {
      onDelete() {
        this.$emit('child-on-delete', this.keyString)
      }
    }
  }
</script>

