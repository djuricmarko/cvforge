<script setup lang="ts">
const { values } = defineProps<{
  values?: {
    name: string,
    position: string
  }
}>();
</script>

<template>
  <div class="frame">
    <div class="header">
      <div class="header__image">Image</div>
      <div class="header__info">
        <h1>{{ values?.name }}</h1>
        <p>{{ values?.position }}</p>
      </div>
    </div>
    <div class="links">
      <div>
        <img src="/icons/github.svg" alt="icon">
        <p>github.com/djuricmarko</p>
      </div>
      <div>
        <img src="/icons/linkedin.svg" alt="icon">
        <p>linkedin.com/djuricmarko</p>
      </div>
      <div>
        <img src="/icons/mail.svg" alt="icon">
        <p>marko.stojanovic1994@gmail.com</p>
      </div>
    </div>
    <div class="main">
      <div class="sidebar">
        <div class="sidebar__section">
          <div class="sidebar__section__heading">
            <h2>Personal information</h2>
            <hr>
          </div>
          <div>
            <p>Email: </p>
          </div>
        </div>
        <div class="sidebar__section">
          <div class="sidebar__section__heading">
            <h2>Contact</h2>
            <hr>
          </div>
          <div>
            <p>HTML</p>
          </div>
        </div>
        <div class="sidebar__section">
          <div class="sidebar__section__heading">
            <h2>Contact</h2>
            <hr>
          </div>
          <div>
            <p>English (native)</p>
          </div>
        </div>
      </div>
      <div class="content"/>
    </div>
  </div>
</template>

<style lang="css">
  .frame {
    --sidebar-bg-color: #27282D;
    --bar-bg-color: #E0C692;
    height: 842px;
    width: 595px;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .header {
    min-height: 150px;
    max-height: 150px;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    justify-content: center;
    padding: 0 45px;
  }

  .header__image {
    min-width: 200px;
    height: 100%;
    background-color: var(--sidebar-bg-color);
  }

  .header__info > h1 {
    font-size: 40px;
  }

  .header__info > p {
    font-size: 16px;
    color: #616161;
  }

  .main {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .links {
    width: 100%;
    min-height: 65px;
    max-height: 65px;
    background-color: var(--bar-bg-color);
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;
  }

  .links > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .links > div > p {
    font-size: 11px;
  }

  .links > div > img {
    height: 15px;
  }

  .sidebar {
    height: 100%;
    width: 200px;
    background-color: var(--sidebar-bg-color);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    color: white;
  }

  .sidebar__section {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .sidebar__section h2 {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: #E0C692;
  }

  .sidebar__section > div > p {
    font-size: 11px;
  }

  .sidebar__section__heading {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .sidebar__section__heading > hr {
    width: 80px;
    border-width: 2px;
  }
</style>
