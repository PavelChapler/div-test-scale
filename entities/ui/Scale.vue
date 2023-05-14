<script setup lang="ts">

import { computed, ref } from 'vue';

const currentPoints = ref(43);

const stages = [
  {
    name: 'Этап первый',
    id: 1,
    thresholdPoints: 25,
    games: [
      {
        name: 'Игра 1.1',
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    name: 'Этап второй',
    id: 2,
    thresholdPoints: 50,
    games: [
      {
        name: 'Игра 2.1',
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    name: 'Этап третий',
    id: 3,
    thresholdPoints: 100,
    games: [
      {
        name: 'Игра 2.1',
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    name: 'Этап четвертый',
    id: 4,
    thresholdPoints: 200,
    games: [
      {
        name: 'Игра 3.1',
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    name: 'Этап пятый',
    id: 5,
    thresholdPoints: 500,
    games: [
      {
        name: 'Игра 4.1',
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    name: 'Этап шестой',
    id: 6,
    thresholdPoints: 1000,
    games: [
      {
        name: 'Игра 6.1',
        bestResult: 0,
        isPlayed: false,
      },
      {
        name: 'Игра 6.2',
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
];

const progressFill = computed(() => {
  const marks = [25, 50, 100, 200, 500, 1000];
  const currentValue = currentPoints.value; // текущее значение на шкале
  let progress = 0;

  for (let i = 0; i < marks.length; i++) {
    if (currentValue >= marks[i]) {
      const addition = currentValue < 100 ? (((currentValue - marks[i]) / 10) * marks.length) : (((currentValue - marks[i]) / 100) * marks.length);
      progress = (((i + 1) * 100) / marks.length) + addition;
    }
  }

  return progress;
});
</script>

<template>
  <div class="scale">
    <div class="scale_wrapper">
      <div class="scale_segments">
        <div v-for="(stage, i) in stages" :key="stage.id" class="scale_segment" :style="{ width: `${100 / stages.length}%` }">
          <i v-if="i === stages.length - 1" class="fa fa-trophy segment_icon"></i>
          <i v-else-if="currentPoints >= stage.thresholdPoints" class="fa fa-star segment_icon"></i>
          <i v-else class="fa fa-star-o segment_icon"></i>

          <p v-if="currentPoints <= stage.thresholdPoints && currentPoints > stages[i - 1]?.thresholdPoints" class="segment_point">
            {{ currentPoints }} / {{ stage.thresholdPoints }}
          </p>
          <p v-else class="segment_point">
            {{ stage.thresholdPoints }}
          </p>

          <p v-if="i === 0" class="segment_null">
            0
          </p>
        </div>
      </div>
      <div class="scale_fill-wrapper">
        <div class="scale_fill" :style="{ width: `${progressFill}%` }">
        </div>
      </div>
    </div>
  </div>
  <input v-model="currentPoints" type="text" class="input">
</template>

<style scoped lang="sass">
.scale
  margin-top: 80px
  margin-left: 40px
  .scale_wrapper
    border: 1px solid blue
    border-radius: 25px
    width: 500px
    height: 50px
    position: relative
    .scale_fill-wrapper
      overflow: hidden
      border-radius: 25px
      height: 100%
      width: 100%
      .scale_fill
        height: 100%
        background: blue

  .scale_segments
    display: flex
    position: absolute
    width: 100%
    height: 100%
    opacity: .25
    .scale_segment
      position: relative
      height: 100%
      &:not(:first-child)
        border-left: 1px solid red
      &:last-child
        .segment_icon
          position: absolute
          right: 0
          top: -33px
          transform: translateX(0%)
          font-size: 22px
        .segment_point
          position: absolute
          right: 0
          bottom: -30px
          transform: translateX(0%)
      .segment_point
        position: absolute
        right: 0
        bottom: -30px
        transform: translateX(50%)
      .segment_icon
        position: absolute
        right: 0
        top: -30px
        transform: translateX(50%)

    .segment_null
      position: absolute
      transform: translateX(0%)
      bottom: -30px

.input
  margin-top: 100px
  margin-left: 100px
</style>
