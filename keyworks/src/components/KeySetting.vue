<template>
  <div>
    <span>{{ key }}</span>
    <button @click="onDelete">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'key_setting',
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

