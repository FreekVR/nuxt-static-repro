<template>
    <section class="magazine" v-if="items && activeFilter">
        <h2>
            {{ activeFilter.title }}
        </h2>

        <p>
            {{ activeFilter.description }}
        </p>

        <my-component v-if="!$fetchState.pending" />
    </section>

    <p v-else>
      No results
    </p>
</template>

<script>
'use strict';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MagazineOverviewFiltered',
    scrollToTop: true,

    data() {
      return {
        items: []
      }
    },

    async fetch() {
        const payload = { slug: null };
        // Clear any active filters set in the store.
        if (this.$route.params.slug) {
            payload.slug = this.$route.params.slug;
        }
        await this.setActiveFilter(payload);
    },

    computed: {
        ...mapGetters({ activeFilter: 'filter/activeFilter' })
    },

    destroyed() {
        this.setActiveFilter({ slug: null });
    },

    methods: {
        ...mapActions({ setActiveFilter: 'filter/setActiveFilter' })
    }
};
</script>
