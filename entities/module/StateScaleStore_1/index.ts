import { defineStore } from 'pinia';

export const useStateScaleStore1 = defineStore('StateScale1', {
  state: () => ({
    points: 125,
  }),
  actions: {
    setPoints(value: number) {
      this.points = value;
      console.log(this.points);
    },
  },
  getters: {
    getPoints: (state) => state.points,
  },
});
