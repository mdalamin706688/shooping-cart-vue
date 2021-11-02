<template>
  <div>
    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Alamin Store</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form @submit.prevent="searchItem" class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="keyword"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default{
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchItem(){
      this.$emit('search', this.keyword)
    }
  }
}
</script>