<template>
  <v-container pt-0 pr-0 pl-0 pb-0>
      <v-form ref="form" @submit.prevent="submit()">
          <v-text-field
           @blur="closeForm()"
            append-icon="add"
            solo
            ref="input"
            v-model="title"
            placeholder="Title"
            :rules="[rules.required]"
          >

          </v-text-field>
      </v-form>
  </v-container>  
</template>

<script>
export default {
    name: 'NewList',
    data: ()=>({
        title:'',
        rules: {
            required: value => !!value || "Required"
        },
    }),
    methods:{
        submit(){
            console.log("Submitted")
        },
        closeForm(){
            this.$store.commit("SET_NEW_LIST_FORM", false )
        }
    },
    mounted(){
        this.$refs.input.focus();
    }
}
</script>