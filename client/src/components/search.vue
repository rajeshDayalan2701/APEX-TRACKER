<template>
  <section class="search">
    <h1>Track Player Stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="psn">Playstation</option>
          <option value="xbl">X-Box</option>
          <option value="origin">Origin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">Gamertag</label>
        <select name="gamertag" id="gamertag" v-model="gamertag">
          <option value="SiimonSZN">Simon</option>
          <option value="Gsnk_Denchu">Denchu</option>
          <option value="C9ninexT">C9</option>
          <option value="J1NQS-">Origin</option>
        </select>
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn">
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      platform: "psn",
      gamertag: "Gsnk_Denchu"
    }
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        this.$toasted.show("Please enter a Gamertag", {
          duration: 10000,
          icon: "exclamation-circle"
        });
      }else {
        this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
      }
    }
  }
}
</script>

<style>

</style>
