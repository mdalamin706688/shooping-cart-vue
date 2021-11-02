<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price float-end">Price</span>
    </li>

    <hr />
    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <button @click="removeItem(index)" class="btn btn-sm btn-danger" >-</button>
      <span class="item-name m-1">{{ item.title }}</span>
      
      <span class="item-price float-end">${{ item.price }}K</span>

      
    </li>
    <hr />

    <li class="list-group-item">
      <span class="item-name">Total</span>
      <span class="item-price float-end">${{ totalPrice }}K</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["items"],
  computed: {
    totalPrice() {
      var total = 0;
      this.items.forEach((item) => {
        total += parseFloat(item.price);
      });
      return total;
    },
  },
  methods: {
    removeItem(index) {
      this.$emit('removableItem', index)
    }
  }
};
</script>
