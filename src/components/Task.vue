<template>
    <v-list-item @click.prevent="toggle(index)">
        <v-list-item-action>
            <v-btn icon @click="openModal()"> 
                <v-icon color="pink">edit</v-icon>
            </v-btn>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title>{{task.title}}</v-list-item-title>
            <v-list-item-subtitle>{{task.sub_title}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action-text>
            <v-icon color="green" v-if="task.isComplete">
                check_circle
            </v-icon>
            <v-icon color="grey" v-else>
                check_circle
            </v-icon>
        </v-list-item-action-text>
    </v-list-item>

</template>

<script>
export default {
    name: "task",
    props: {
        task: Object,
        index: Number
    },
    data: () => ({
        selected:[2],
    }),
    methods: {
        toggle(index){
            console.log(index);
        },
        openModal(){
            this.$router.push({
                name: 'notes',
                params: { taskId: this.task.id}
            })
        },
    },
}
</script>