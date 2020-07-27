<template>
  <div>
    <div v-if="activeFilter">
      The currently active filter is: {{ activeFilter.title }}
    </div>
    <p v-else>There is no active filter</p>

    <h2>Items:</h2>
    {{ items }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
      return {
        items: []
      }
    },

    async fetch() {
        const res = await import('~/fake/items.json');
        this.items = res.default;
    },

    computed: {
        ...mapGetters({ activeFilter: 'filter/activeFilter' }),
    }
}
</script>
