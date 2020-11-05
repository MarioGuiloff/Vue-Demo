<template>
    <v-navigation-drawer permanent style="width: 100%">
        <v-toolbar color="blue" dark>
            <v-toolbar-title>your lists</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>

        <v-list>
            <v-list-item color="blue">
                <v-list-item-content>
                    <v-list-item-title>Create a new list</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon>add</v-icon>
                    </v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list 
            style="height: 800px; overflow-y: auto"
        >
            <v-list-item
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
export default {
    name:'lists',
    data: () => ({
        lists: [
            {
                id:1,
                title: 'Lista 1',
                task: 12,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
                        {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
             {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
                        {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
                        {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
                        {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 4,
            },
            {
                id:1,
                title: 'Lista 1',
                task: 45,
            },
        ]
    })
}
</script>