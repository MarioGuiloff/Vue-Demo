<template>
    <v-layout>
        <v-navigation-drawer v-model="open" absolute right>
            <v-list>
                <v-list-item >
                    <v-list-item-avatar>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGWgzmVPpKDNw/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=DJW3xnsDup5xnwBDhSGPGf1ZR0YP6cDgF7XdBbh2ric" alt="User Avatar">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            Mario Guiloff
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-form>
                <v-container fluid>
                    <v-flex xs12 >
                        <img :src="imageUrl" height="150px" alt="">
                        <v-text-field
                         v-model="imageName"
                         label="Select an image"
                         prepend-icon="attach_file"
                         @click="pickFile"
                         ></v-text-field>
                         <input 
                            type="file"
                            style="display:none"
                            ref="image"
                            accept="image/"
                            @change="onFilePicked"
                         >
                    </v-flex> 
                    <v-btn :loading="loading" :disabled="!imageFile" @click="uploadFile()">
                        set as background
                        <v-icon right dark></v-icon>
                    </v-btn>
                </v-container>
            </v-form>
        </v-navigation-drawer>
    </v-layout>
</template>


<script>
export default {
    name: "moreOptions",
    data: ()=>({
        loading: false,
        open: false,
        imageUrl:'',
        imageName:'',
        imageFile:'',
    }),
    methods:{
        pickFile(){
            this.$refs.image.click();
        },
        onFilePicked(e){
            const files = e.target.files;

            if(files[0] !== undefined){
                this.imageName = files[0].name;
                if(this.imageName.lastIndexOf('.') <= 0)
                    return
                const fr = new FileReader();
                fr.readAsDataURL(files[0]);
                fr.addEventListener("load", () => {
                    this.imageUrl = fr.result;
                    this.imageFile = files[0];
                })
            }else{
                this.imageName = '';
                this.imageFile = '',
                this.imageUrl = '';
            }
        },
        uploadFile(){
            console.log(this.imageFile);
        }
    },
}
</script>