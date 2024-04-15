<template></template>

<script setup lang="ts">
const lastPost = await getPosts('last');
await navigateTo(lastPost._path)
</script>