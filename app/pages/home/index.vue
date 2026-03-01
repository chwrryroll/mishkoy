<style lang="sass">
  @use "./style.sass"
</style>
<template>
  <div class="chapter">
    <div class="chapter__heading">
      <h1 class="chapter__heading__title">Chapter 1</h1>
      <p class="chapter__heading__stats">2/6 lessons completed</p>
    </div>
    <ul class="chapter__class space-y-8">
      <li class="class__lesson class__lesson--completed">
        <div class="lesson__icon"></div>
        <div class="lesson__title">
          <p class="text-lg font-bold">Vowels</p>
        </div>
      </li>
      <li class="class__lesson class__lesson--completed">
        <div class="lesson__icon"></div>
        <div class="lesson__title">
          <p class="text-lg font-bold">Not Vowels</p>
        </div>
      </li>
      <li v-for="n in 4" class="class__lesson">
        <div class="lesson__icon"></div>
        <div class="lesson__title">
          <p class="text-lg font-bold">Blablabla</p>
        </div>
      </li>
    </ul>
  </div>
</template>
