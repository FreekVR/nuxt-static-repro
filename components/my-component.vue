<template>
  <div>
    {{ items }}
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: []
      }
    },

    async fetch() {
        this.items = await fetch(
            'https://api.nuxtjs.dev/mountains'
        ).then(res => res.json());
    }
}
</script>
