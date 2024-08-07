<template>
  <div class="seating-area">
    <div
      class="row"
      v-for="seatList in bookingStore.book.seatLists"
      :key="seatList.idx"
    >
      <div class="row-number">{{ seatList[0].row }}</div>
      <div
        @click="clickSeat($event, seat)"
        v-for="seat in seatList"
        :class="[
          'seat',
          { occupied: !seat.active },
          { inactive: !seat.enabled },
        ]"
        :key="seat.idx"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useBookingStore } from '@/stores/useBookingStore';

const emit = defineEmits(['seatInfo']);

const bookingStore = useBookingStore();
const selectedSeat = ref(null);
const selectedSeatInfo = ref(null);

// const seatLists = [
//   [
//     {
//       seatId: 66,
//       row: 'A',
//       seatNumber: 1,
//       active: true,
//       enabled: true,
//     },
//     {
//       seatId: 67,
//       row: 'A',
//       seatNumber: 2,
//       active: true,
//       enabled: true,
//     },
//     {
//       seatId: 68,
//       row: 'A',
//       seatNumber: 3,
//       active: true,
//       enabled: true,
//     },
//     {
//       seatId: 69,
//       row: 'A',
//       seatNumber: 4,
//       active: true,
//       enabled: true,
//     },
//   ],
//   [
//     {
//       seatId: 70,
//       row: 'B',
//       seatNumber: 1,
//       active: true,
//       enabled: false,
//     },
//     {
//       seatId: 71,
//       row: 'B',
//       seatNumber: 2,
//       active: true,
//       enabled: false,
//     },
//     {
//       seatId: 72,
//       row: 'B',
//       seatNumber: 3,
//       active: true,
//       enabled: false,
//     },
//     {
//       seatId: 73,
//       row: 'B',
//       seatNumber: 4,
//       active: false,
//       enabled: true,
//     },
//   ],
//   [
//     {
//       seatId: 74,
//       row: 'C',
//       seatNumber: 1,
//       active: true,
//       enabled: true,
//     },
//     {
//       seatId: 75,
//       row: 'C',
//       seatNumber: 2,
//       active: true,
//       enabled: true,
//     },
//     {
//       seatId: 76,
//       row: 'C',
//       seatNumber: 3,
//       active: false,
//       enabled: true,
//     },
//     {
//       seatId: 77,
//       row: 'C',
//       seatNumber: 4,
//       active: false,
//       enabled: true,
//     },
//   ],
//   [
//     {
//       seatId: 78,
//       row: 'D',
//       seatNumber: 1,
//       active: true,
//       enabled: true,
//     },
//     {
//       seatId: 79,
//       row: 'D',
//       seatNumber: 2,
//       active: false,
//       enabled: false,
//     },
//     {
//       seatId: 80,
//       row: 'D',
//       seatNumber: 3,
//       active: false,
//       enabled: false,
//     },
//     {
//       seatId: 81,
//       row: 'D',
//       seatNumber: 4,
//       active: false,
//       enabled: false,
//     },
//   ],
// ];

const clickSeat = (e, seatInfo) => {
  const seat = e.target;

  if (seat.classList.contains('seat') && !seat.classList.contains('occupied')) {
    if (selectedSeat.value) {
      selectedSeat.value.classList.remove('selected');
    }

    if (!seat.classList.contains('selected')) {
      seat.classList.add('selected');
      selectedSeat.value = seat;
      selectedSeatInfo.value = seatInfo;

      emit('seatInfo', selectedSeatInfo.value);
    } else {
      selectedSeat.value = null;
      seat.classList.remove('selected');
    }
  }
};
</script>

<style scoped>
.seating-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
}

.row-number {
  position: absolute;
  left: 3rem;
  margin-right: 10px;
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

.seat.inactive {
  background-color: #cecece;
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
