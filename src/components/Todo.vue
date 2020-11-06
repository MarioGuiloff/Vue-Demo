<template>
    <div style="overflow:hidden">
        <v-container fluid fill-height pl-0 pr-0 pb-0 pt-0>
            <v-layout row align-space-between justify-space-between>
                <v-flex lg3 pr-2>
                    <Lists/>
                </v-flex>
                <v-flex lg6 pr-2 pl-2>
                    <router-view name="tasks"></router-view>
                </v-flex>
                <v-flex lg3 pl-2>
                    <OptionsBar />
                </v-flex>
            </v-layout>
        </v-container>
        <v-footer height="auto" color="indigo" absolute>
            <v-layout justify-center>
                <v-flex indigo white--text text-center>
                    &copy;2020
                    <strong>Mario Guiloff</strong>
                </v-flex>
            </v-layout>
        </v-footer>
        <Notificaction />
    </div>
</template>

<script>
import Lists from './Lists';
// import Tasks from './Tasks';
import OptionsBar from './OptionsBar';
import Notificaction from './Notification';

export default {
    name:'todo',
    components:{ Lists ,OptionsBar,Notificaction}
}
</script>