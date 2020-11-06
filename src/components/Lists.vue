<template>
    <v-navigation-drawer permanent style="width: 100%">
        <v-toolbar color="blue" dark>
            <v-toolbar-title v-if="!DISPLAY_SEARCH_LIST">your lists</v-toolbar-title>
                <SearchBar v-if="DISPLAY_SEARCH_LIST" />
            <v-spacer></v-spacer>
            <v-btn icon @click.prevent="toggleSearchList()">
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>

        <v-list>
            <v-list-item color="blue" @click.prevent="openNewListForm()" v-if="!isOpen">
                <v-list-item-content>
                    <v-list-item-title>Create a new list</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon>add</v-icon>
                    </v-list-item-title>
                </v-list-item-action>
            </v-list-item>

            <v-list-item v-if="openNewListFormValue">
                <NewList />
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list 
            style="height: 800px; overflow-y: auto"
        >
            <v-list-item
                :to="{ name: 'tasks', params: {id:list.id} }"
                v-for="(list,key) in lists"
                v-bind:key="key"
            >
            <v-list-item-content>
                <v-list-item-title>{{ list.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
                <v-list-item-title>
                    {{list.task}}
                </v-list-item-title>
            </v-list-item-action>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import SearchBar from './SearchBar';
import NewList from './NewList';
import {mapGetters} from 'vuex';

export default {
    name:'lists',
    components: {
        SearchBar, NewList
    },
    data: () => ({
        lists: [
            {
                id:1,
                title: 'Lista 1',
                task: 12,
            },
            {
                id:2,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:3,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:4,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:5,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:6,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:7,
                title: 'Lista 1',
                task: 45,
            },
                        {
                id:8,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:9,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:10,
                title: 'Lista 1',
                task: 45,
            },
             {
                id:11,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:12,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:13,
                title: 'Lista 1',
                task: 45,
            },
                        {
                id:14,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:15,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:16,
                title: 'Lista 1',
                task: 45,
            },
                        {
                id:17,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:18,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:19,
                title: 'Lista 1',
                task: 45,
            },
                        {
                id:20,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:21,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:22,
                title: 'Lista 1',
                task: 45,
            },
        ]
    }),
    computed: {
        ...mapGetters(['DISPLAY_SEARCH_LIST']),
        openNewListFormValue: {
            get(){
                return this.$store.getters.NEW_LIST_FORM;
            },
            set(value){
                this.$store.commit("SET_NEW_LIST_FORM ",value)
            }
           
        },
         isOpen(){
                return this.$store.getters.NEW_LIST_FORM;
            }
    },
    methods: {
        toggleSearchList(){
            this.$store.commit("SET_DISPLAY_SEARCH_LIST", ! this.DISPLAY_SEARCH_LIST);
        },
        openNewListForm(){
            this.$store.commit("SET_NEW_LIST_FORM",true);
        },
    },
}
</script>