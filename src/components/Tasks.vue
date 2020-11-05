<template>
    <div>
        <v-card style="height:100%; overflow-y:hidden">
            <v-toolbar color="blue" dark>
                <v-toolbar-title>
                    title of the list
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
        <NotesModal />
    </div>
</template>

<script>
import Task from './Task';
import NewTask from './NewTask';
import NotesModal from './NotesModal'

export default {
    name: 'tasks',
    components: {
        Task, NewTask, NotesModal
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
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            },
            {
               id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: false,
            },
            {
                id: 1,
                title:'task title',
                sub_title: 'this is a subtitle',
                isComplete: true,
            }
        ]
    }),
};
</script>