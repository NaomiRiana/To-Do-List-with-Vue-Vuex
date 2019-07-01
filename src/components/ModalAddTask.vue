<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
              Add new task
              <span class="close" @click="$emit('close')">&times;</span>
          </div>
          <div class="modal-body">
              <div class="desc-input">
                  <p>Task Description</p>
                  <input id="desc" v-model="description" placeholder="Study for Math Exam" />
              </div>
              <div class="date-and-checkbox">
                  <p>Due Date</p>
                  <input id="date-input" v-model="due_date" type="date" />
                  <input type="checkbox" v-model="important" />Tag as important
              </div>
          </div>

          <div class="modal-action">
            <button class="button-cancel" @click="$emit('close')">
            Cancel
            </button>
            <button class="button-submit" @click="addNewTask">
            Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex';

export default {
    name: 'ModalAddTask',
    data (){
        return{
            description: '',
            due_date: '',
            important: ''
        }
    },

    methods:{
        ...mapActions(['addTask']),
        addNewTask(){
            this.addTask({
                description: this.description,
                due_date: this.due_date,
                important: this.important
            })
            this.$emit('close')
        }
    }
}
</script>


C
