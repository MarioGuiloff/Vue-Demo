<template>
    <v-container fill-height>
        <v-layout align-center justify-center> 
            <v-flex xs12 sm8 md4>
             <v-form>   
                 <v-card class="elevation-20"> 
                     <v-toolbar dark color="primary"> 
                            <v-toolbar-title>
                                Login Form
                            </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                         <v-text-field
                         name="login"
                         label="Login"
                         type="text"
                         >
                        </v-text-field>

                         <v-text-field
                         name="password"
                         label="Password"
                         type="password"
                         >
                             
                         </v-text-field>
                     </v-card-text>
                     <v-divider >
                            
                     </v-divider>
                    <v-card-actions>
                            <v-btn>Sign In</v-btn>
                                <v-spacer></v-spacer>
                            <v-btn>Login</v-btn>
                    </v-card-actions>
                </v-card>
             </v-form>    
             </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'login'
}
</script>