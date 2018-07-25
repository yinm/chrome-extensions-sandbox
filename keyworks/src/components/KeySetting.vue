<template>
  <tbody>
  <tr>
    <td>
      <kbd>{{ keyString }}</kbd>
    </td>
    <td>
      <button @click="onDelete">x</button>
    </td>
  </tr>
  </tbody>
</template>

<script>
  export default {
    name: 'key_setting',
    props: {
      keyString: String,
    },
    data() {
      return {
        key: 'Ctrl-L',
      }
    },
    methods: {
      onDelete() {
        alert('deleted!!!')
      }
    }
  }
</script>

