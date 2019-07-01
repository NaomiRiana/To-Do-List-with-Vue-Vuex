<template>
  <div class="container">
    <div>
      <h1 class="title">
        Hello Naomi
      </h1>
      <h2 class="subtitle">
        Let's get productive today!
      </h2>
      <div class="button">
        <button
          @click="changeModalState"
          class="button-add"
        >Add New Task</button>
        <ModalAddTask v-if="modalState" @close="changeModalState" />
      </div>
      <div v-for="task in tasks" :key="task.id">
        <task :dataTask="task"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Task from './Task.vue'
import ModalAddTask from './ModalAddTask.vue'

export default {
  name:'Page',
  components: {
   Task, ModalAddTask
  },

  data(){
    return{
      modalState: false,
    }
  },


  computed: {
    ...mapState(['tasks']),
  },
  
  mounted(){
    this.loadTasks()
    console.log('c',this.$store.state);
  },

  methods:{
    ...mapActions({
      loadTasks: 'loadTasks'
    }),
    changeModalState(){
      this.modalState = !this.modalState
    },

    countTasks(){
      return this.$store.state.tasks.length
    }
  }
  
}

</script>

<style lang="scss" scoped>
   @import '../assets/css/style.scss';
</style>
