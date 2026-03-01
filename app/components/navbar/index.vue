<style lang="sass">
  @use "./style.sass"
</style>
<template>
  <nav class="navbar md:hidden">
    <ol class="container">
      <li>
        <div class="navbar__tab">
          <Icon class="tab__icon" name="lucide:star" />
          <p class="tab__title">Leagues</p>
        </div>
      </li>
      <li>
        <div class="navbar__tab navbar__tab--active">
          <Icon class="tab__icon" name="lucide:home" />
          <p class="tab__title">Home</p>
        </div>
      </li>
      <li>
        <div class="navbar__tab">
          <Icon class="tab__icon" name="lucide:user" />
          <p class="tab__title">Profile</p>
        </div>
      </li>
    </ol>
  </nav>
</template>
