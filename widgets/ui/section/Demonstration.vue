<script setup lang="ts">
import { ref } from 'vue';
import { Scale } from '@/entities';

</script>

<template>
  <div class="container">
    <div class="scales">
      <div key="myScale" class="scales-item">
        <p>Состояние 1</p>
        <Scale :points="20" />
      </div>
      <div class="scales-item">
        <p>Состояние 2</p>
        <Scale :points="25" />
      </div>
      <div class="scales-item">
        <p>Состояние 3</p>
        <Scale :points="540" />
      </div>
      <div class="scales-item">
        <p>Состояние 4</p>
        <Scale :points="1000" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.scales
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 70px 0 40px

  .scales-item
    margin-bottom: 40px

  p
    color: #420042
    font-weight: 600
    font-size: 18px
    margin-bottom: 10px
</style>
