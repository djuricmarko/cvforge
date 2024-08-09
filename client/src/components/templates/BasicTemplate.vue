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
      <h1>{{ values?.name }}</h1>
      <p>{{ values?.position }}</p>
    </div>
    <div class="bar">Bar</div>
    <div class="main">
      <div class="sidebar">
        <div class="sidebar__section">
          <h2>Contact</h2>
          <div>
            <p>Email: </p>
          </div>
        </div>
        <div class="sidebar__section">
          <h2>Skills</h2>
          <div>
            <p>HTML</p>
          </div>
        </div>
        <div class="sidebar__section">
          <h2>Languages</h2>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 200px;
  }

  .header > h1 {
    font-size: 40px;
  }

  .header > p {
    font-size: 16px;
    color: #616161;
  }

  .main {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .bar {
    width: 100%;
    background-color: var(--bar-bg-color);;
    min-height: 65px;
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
    gap: 5px;
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
</style>
