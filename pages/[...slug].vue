<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <div id="notfound">
          <h1>Post don't exist, redirecting to the newest one</h1>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
onMounted(async () => {
  const isNotFound = document.querySelector('#notfound');

  if (isNotFound) {
    const lastPost = await getPosts('last');
    await navigateTo(lastPost._path)
  }
})
</script>