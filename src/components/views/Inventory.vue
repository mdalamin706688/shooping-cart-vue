<template>
  <div class="row px-4 pt-3 border bg-light">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card py-3"
      style="width: 10rem"
    >
      <img :src="item.photo" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">${{ item.price }}K</p>
        <a @click="addToCart(item)" class="btn btn-primary">+add</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
     return {
       items: []
     }
  },
  methods: {
    addToCart(item) {
      this.$emit("newItemAdded", item);
    },
  },
};
</script>
