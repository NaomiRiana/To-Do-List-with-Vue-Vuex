<template>
    <div class="card">
        <div class="task-detail">
            <span class="task-date">Due date: {{ dataTask.due_date | formatDate }} </span>
            <span>
            <span v-if="dataTask.completed===true" class="task-tag">Completed</span>
            <span v-else class="task-tag">Incomplete</span>
            <span v-if="dataTask.important===true" id="star1">★</span>
            <span v-if="!(dataTask.important===true)" id="star2">★</span></span>
        </div>
        <div class="task-detail2">
            <p class="task-desc">{{ dataTask.description }}</p>
            <div class="task-action">
                <button @click="changeModalUpdateState" class="button-update">Update</button>
                <modalUpdateTask v-bind:task="dataTask" v-if="modalUpdateState" @close="changeModalUpdateState" />
                <button @click="changeModalDeleteState" class="button-delete">Delete</button>
                <modalDeleteTask v-bind:id="dataTask.id" v-if="modalDeleteState" @close="changeModalDeleteState" />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import ModalUpdateTask from './ModalUpdateTask.vue'
    import ModalDeleteTask from './ModalDeleteTask.vue'
    export default{
        name: 'Task',
        components:{
            ModalUpdateTask, ModalDeleteTask
        },
        data(){
            console.log('ada')
            return{
                modalUpdateState:false,
                modalDeleteState:false,
            }
        },
        // props: ['id', 'due_date', 'description', 'completed', 'important'],
        props: {
            dataTask: Object
        },

        // mounted(){
        //   this.task = this.$store.getters.getTask(this.id)
        //   console.log('c',this.$store.state);
        // },

        methods: {
            ...mapActions(['setTaskImportant']),
            changeModalUpdateState(){
                this.modalUpdateState = !this.modalUpdateState
            },
            changeModalDeleteState(){
                this.modalDeleteState = !this.modalDeleteState
            },
            changeImportantStatus(id){
                const important = !this.important
                this.setTaskImportant(this.id, important)
            },
            changeCompletedStatus(){
                this.completed = !this.completed
            },

        }
    }
    
</script>

<style lang="scss" scoped>
   @import '../assets/css/style.scss';
</style>