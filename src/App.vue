<template>
  <div id="app">

  <!-- <router-link :to="{path: '/'}">Home</router-link>

  <router-link :to="{path: '/test/1'}">Test1</router-link>
  <router-link :to="{path: '/test/2'}">Test2</router-link>
  <router-link :to="{path: '/test/3'}">Test3</router-link>

  <router-view></router-view> -->

    <navbar @search="itemSearch"></navbar>

    <div class="container overflow-hidden">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
          <!-- <inventory @newItemAdded="addCartItem" :items="items"></inventory> -->
        </div>

        <div class="col-sm-3 border bg-light px-5 pt-3">
          <cart @removableItem="itemremove" :items="cart"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
//import Inventory from "./components/Inventory";
import data from "./data.js";
export default {
  components: {
    Navbar,
    Cart,
    //Inventory,
  },
  data() {
    return {
      items: [],
      cart: [],
    };
  },
  mounted() {
    this.items = data;
  },
  methods: {
    itemSearch(keyword) {
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) != -1
      })
    },
    addCartItem(item) {
      this.cart.push(item);
    },
    itemremove(index) {
      this.cart.splice(index,1)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

