<template>
    <v-container fluid fill-height>
        <v-layout align-center  justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue">
                        <v-toolbar-title>Singup Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-alert
                                :value="true"
                                color="error"
                                icon="warning"
                            >
                                This user exist!
                            </v-alert>
                            <v-text-field
                                prepend-icon="person"
                                name="login"
                                label="login" 
                                :rules="[rules.required]"                          
                            >

                            </v-text-field>

                            <v-text-field
                                prepend-icon="email"
                                name="email"
                                label="email" 
                                :rules="[rules.required]"                          
                            >

                            </v-text-field>

                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="password" 
                                :rules="[rules.required]"
                                type="password"    
                                v-model="password"                      
                            >

                            </v-text-field>

                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label=" Confirm password" 
                                :rules="[rules.required]"
                                type="password" 
                                :error="!valid()"  
                                v-model="confirm_password"                       
                            >

                            </v-text-field>
                            <v-divider light></v-divider>
                            <v-card-actions>
                                <v-btn to='/login'>Sing In</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn round color="success" @click.prevent="register()">Register <v-icon>keyboard_arrow_up</v-icon></v-btn>
                            </v-card-actions>

                        </v-form>

                    </v-card-text>

                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
export default {
    name:'singup',
    data:()=>({
        rules:{
            required: value => !!value || "Required",
        },
        password:'',
        confirm_password:'',
    }),
    methods:{
        register(){
            this.$router.push('/login');
        },
        valid() {
            return this.password === this.confirm_password;
        },
    },
}
</script>