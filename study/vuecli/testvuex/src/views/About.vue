<template>
  <div class="about">
    <h1>This is an about page</h1>
   
    <h2>{{count}}</h2>
    <h2>{{count1}}</h2>
    <button @click="add(10)">add</button>
    <button @click="addAction">add</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  /* methods:{
    add(){
      this.$store.commit('add');
    }
  }, */
  methods:{
    ...mapMutations(['add']),
    ...mapActions(['addAction'])
  },
    computed: {
    ...mapState(['count']),
    ...mapGetters(['count1'])
  }

 /*  computed:mapState(["count"]) */
/*   computed:mapState({
    count:state=>state.count
  }) */

/*   computed:{
    count(){
      return this.$store.state.count;
    }
  } */
}
</script>
