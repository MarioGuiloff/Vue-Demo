<template>
    <div>
        <v-card style="height:100%; overflow-y:hidden">
            <v-toolbar color="blue" dark>
                <v-toolbar-title>
                    title of the list {{listId}}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list two-line style="height: 800px; overflow-y: auto"> 
                <template v-for="(task, key) in tasks"> 
                    <Task v-bind:key="key" :index="key" :task="task" />
            </template>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
                <v-layout>
                    <v-flex>
                        <NewTask />
                    </v-flex>
                </v-layout>
            </v-card-actions>
        </v-card>
       <router-view :key="$route.fullPath" name="notes"></router-view>
    </div>
</template>

<script>
import Task from './Task';
import NewTask from './NewTask';
// import NotesModal from './NotesModal'

export default {
    name: 'tasks',
    components: {
        Task, NewTask//, NotesModal
    },
    data: () => ({
        tasks: [
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 2,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 3,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 4,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 5,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 6,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 7,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 8,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 9,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 10,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 11,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 12,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 13,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 14,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 15,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 16,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 17,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 18,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 19,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 20,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 21,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            }
        ]
    }),
    computed: {
        listId(){
            return this.$route.params.id;
        },
    },
};
</script>