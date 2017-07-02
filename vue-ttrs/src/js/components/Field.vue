<template>
  <div class="field">
    <div v-for="n in fieldArray"></div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {
    methods: {
      initField() {
        let field = [];
        for (let i=0; i<10*15; i++) {
          field.push(0);
        }
      }
    },
    computed: {
      ...mapGetters([
        'fieldArray'
      ])
    },
    created () {
      this.initField();
    }
  }
</script>