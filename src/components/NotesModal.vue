<template>
    <v-layout row justify-center>
        <v-dialog v-model="open" scrollable max-width="60%">
            <v-card>
                <v-card-title>
                    <span class="headline">modal title</span>
                </v-card-title>
            
            <v-card-text>
                <v-container>
                    <v-form>
                        <v-textarea 
                         outlined
                         v-model="note"
                         label="Note"
                         placeholder="start writing your notes here">

                        </v-textarea>
                        <v-btn color="success">
                            Save
                        </v-btn>
                    </v-form>
                </v-container>
                <v-list three-line subheader> 
                    <v-subheader>
                        notes
                    </v-subheader>

                    <v-list-item
                        v-for="(note, key) in notes"
                        v-bind:key="key"
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                {{note.note}}
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon>
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card-text>

            <v-card-actions>
                <v-btn text color="primary"> close </v-btn>
                <v-spacer></v-spacer>
                <v-btn text color="red"> remove task </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>


<script>
export default {
    name: 'notesModal',
    data: () => ({
        open: true,
        note: '',
        notes:[
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            },
            {
                id:1,
                note: 'Some random note'
            }
        ]
        }   
    )
}
</script>