<template>
  <div class="seating-area">
    <div
      class="row"
      v-for="seatList in bookingStore.book.seatLists"
      :key="seatList.idx"
    >
      <div class="row-number" v-if="seatList.length > 0">
        {{ seatList[0].row }}
      </div>
      <div
        @click="clickSeat($event, seat)"
        v-for="seat in seatList"
        :class="[
          'seat',
          { occupied: !seat.active },
          { inactive: !seat.enable },
        ]"
        :key="seat.idx"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, watch, defineProps } from 'vue';
import { useBookingStore } from '@/stores/useBookingStore';

const emit = defineEmits(['seatInfo']);
const type = defineProps(['type']);

const bookingStore = useBookingStore();
const selectedSeat = ref(null);
const selectedSeatInfo = ref(null);

onMounted(async () => {
  if (type.type == 'purchase') {
    await bookingStore.getSeatLists();
  } else if (type.type == 'exchange') {
    await bookingStore.getExchangeSeatLists();
  }
});

watch(
  () => bookingStore.book.sectionId,
  async (newSectionId, oldSectionId) => {
    if (newSectionId !== oldSectionId) {
      resetSelectedSeat();
      if (type.type == 'purchase') {
        await bookingStore.getSeatLists();
      } else if (type.type == 'exchange') {
        await bookingStore.getExchangeSeatLists();
      }
    }
  }
);

watch(
  () => bookingStore.book.timesId,
  async (newTimesId, oldTimesId) => {
    if (newTimesId !== oldTimesId) {
      resetSelectedSeat();
      if (type.type == 'purchase') {
        await bookingStore.getSeatLists();
      } else if (type.type == 'exchange') {
        await bookingStore.getExchangeSeatLists();
      }
    }
  }
);

// 섹션 클릭 시 선택된 좌석 초기화
const resetSelectedSeat = () => {
  if (selectedSeat.value) {
    selectedSeat.value.classList.remove('selected');
  }
  selectedSeat.value = null;
  selectedSeatInfo.value = null;
  emit('seatInfo', selectedSeatInfo.value);
};

const clickSeat = (e, seatInfo) => {
  const seat = e.target;

  if (
    seat.classList.contains('seat') &&
    !seat.classList.contains('occupied') &&
    !seat.classList.contains('inactive')
  ) {
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
