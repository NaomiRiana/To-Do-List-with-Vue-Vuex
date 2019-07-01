<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
              Delete Task
              <span class="close" @click="$emit('close')">&times;</span>
          </div>
          <div class="modal-body">
              <div class="desc-input">
                  <p>Are you sure want to delete this task?</p>
              </div>
          </div>

          <div class="modal-action">
            <button class="button-cancel" @click="$emit('close')">
            Cancel
            </button>
            <button class="button-delete" @click="deleteThisTask(id)">
            Delete
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
    name: 'ModalDeleteTask',
    props: ['id'],
    methods:{
        ...mapActions(['deleteTask']),
        deleteThisTask(id){
            console.log(id);
            
            this.deleteTask(id)
            this.$emit('close')        
        }
    }
}
</script>


<style scoped>
input{
    padding: 5px 10px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  /* padding: 20px 30px; */
  /* background-color: #fff; */
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  
}

.modal-header {
  text-align: left;
  font-size:14px;
  font-weight: bold;
  padding: 5px 15px;
  background-color: #66BEB2;
  color: white;
}

.close {
  color: white;
  float: right;
  font-size: 18px;
  font-weight: bold;
}

.modal-body {
  background-color: white;
  padding: 20px 15px;
  text-align: left;
  font-family: inherit;
}

.desc-input{
    display: inline-block;
    margin-bottom: 20px;
    width: 100%
}

.modal-default-button {
  float: right;
}

.modal-action {
  background-color: white;
  padding-bottom:20px;
}

.button-cancel{
  display: inline-block;
  border-radius: 4px;
  border: none;
  background-color: none;
  color: #66BEB2;
  font-weight: bold;
  padding: 10px 20px;
}

.button-delete{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #66BEB2;
  background-color: #66BEB2;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

#desc{
    width: 100%;
}

#date-input{
    width:35%;
    margin-right:20px;
}
</style>
