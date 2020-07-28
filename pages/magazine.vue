<template>
    <div>
        <nuxt-link to="/magazine/category/foo">Category Foo</nuxt-link>
        <nuxt-link to="/magazine/category/bar">Category Bar</nuxt-link>

        <hr>

        <sidebar />

        <hr>

        <nuxt-child :key="`magazine_${$route.path}`" />
    </div>
</template>

<script>

export default {
    name: 'Magazine',
};
</script>
