<template>
  <div class="seating-area">
    <div class="row" v-for="seatList in seatLists" :key="seatList.idx">
      <div class="row-number">{{ seatList.idx }}</div>
      <div
        :class="'seat' + seat.active ? '' : 'ocupied'"
        @click="clickSeat"
        v-for="seat in seatList"
        :key="seat.idx"
      ></div>
    </div>

    <!-- <div class="row">
      <div class="row-number">1</div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
    </div>

    <div class="row">
      <div class="row-number">2</div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
    </div>

    <div class="row">
      <div class="row-number">3</div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
      <div class="seat occupied" @click="clickSeat"></div>
    </div>

    <div class="row">
      <div class="row-number">4</div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
    </div>

    <div class="row">
      <div class="row-number">5</div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
      <div class="seat" @click="clickSeat"></div>
    </div>
      -->
  </div>
</template>

<script>
export default {
  name: 'SeatComponent',
  data() {
    return { seatLists: [] };
  },
  methods: {
    clickSeat(e) {
      const seat = e.target;

      if (
        seat.classList.contains('seat') &&
        !seat.classList.contains('occupied')
      ) {
        if (seat.classList.contains('selected')) {
          seat.classList.remove('selected');
        } else {
          seat.classList.add('selected');
        }
      }
    },
  },
};
</script>

<style scoped>
.seating-area {
  display: flex; /* Flexbox 사용 */
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 가운데 정렬 */
}

.row {
  display: flex; /* Flexbox 사용하여 가로 정렬 */
  align-items: center; /* 행에서 수직 가운데 정렬 */
  margin-bottom: 10px; /* 각 행 간 간격 */
  gap: 10px;
}

.row-number {
  position: absolute;
  left: 3rem;
  margin-right: 10px; /* 행 번호와 좌석 간 간격 */
  font-weight: bold;
}

.seat {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 2px solid #444;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seat.selected {
  background-color: rgb(190, 97, 190);
}

.seat.occupied {
  visibility: hidden;
  background-color: #444;
  cursor: not-allowed;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  width: 80%;
}

.legend .item {
  display: flex;
  align-items: center;
}

.legend .item .seat {
  margin-right: 10px;
}
</style>
