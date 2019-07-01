<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
              Update task
              <span class="close" @click="$emit('close')">&times;</span>
          </div>
          <div class="modal-body">
              <div class="desc-input">
                  <p>Task Description</p>
                  <input id="desc" v-model="task.description" placeholder="Study for Math Exam" />
              </div>
              <div class="date-and-checkbox">
                  <p>Due Date</p>
                  <input id="date-input" v-model="task.due_date" type="date" />
                  <input type="checkbox" v-model="task.important" />Tag as important
                  <input type="checkbox" v-model="task.completed" />Tag as completed
              </div>
          </div>

          <div class="modal-action">
            <button class="button-cancel" @click="$emit('close')">
            Cancel
            </button>
            <button class="button-submit" @click="updateThisTask(task)">
            Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { mapActions, mapGetters } from 'vuex';

export default {
  // data (){
  //     return{
  //         task:''
    
  //     }
  // },

  props: {
    task: Object
  },

    methods:{
      ...mapGetters(['getTask']),
      ...mapActions(["updateTask"]),
        updateThisTask(task){
            this.updateTask({
                id : task.id,
                description: this.task.description,
                due_date: this.task.due_date,
                important: this.task.important,
                completed: this.task.completed,
            })
            this.$emit('close')
        }
    },

    // mounted() {
    //     this.task = this.$store.getters.getTask(this.id)
    //     console.log(this.id);
    // }

}
</script>


<style lang="scss" scoped>
   @import '../assets/css/style.scss';
</style>
