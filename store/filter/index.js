export const state = () => ({
    filters: [],
    activeFilterSlug: null
});

export const getters = {
    filters: ({ filters }) => filters,
    activeFilter: ({ filters, activeFilterSlug }) => {
        if (activeFilterSlug) {
          return filters[0];
        }
        return null;
    }
};

export const actions = {
    async setActiveFilter({ getters: contextGetters, commit }, { slug, filters }) {
        commit('setActive', { slug });

        if (slug) {
          const data = await import('~/fake/category.json');

          if (data) {
              commit('appendCategory', { topic: data.default });
          }
          return data;
        }
    }
};

export const mutations = {
    setActive(stateArg, payload) {
        if (typeof payload !== 'undefined' && typeof payload.slug !== 'undefined') {
            stateArg.activeFilterSlug = payload.slug;
        }
    },

    appendCategory(stateArg, payload) {
        stateArg.filters.push(payload.topic);
    },
};
