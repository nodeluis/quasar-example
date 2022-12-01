<template>
    <div class="row">
        <div class="col">
            <q-input 
                v-model="x" 
                :label="placeholder" 
                @keyup.enter="resultText"
                dense
                outlined
            />
        </div>
        <div class="col">
            <q-btn 
                color="primary"
                label="Buscar"
                @click="resultText"
            > 
            </q-btn>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    props: {
        placeholder:{
            type:String,
            default:''
        }
    },
    setup(props, { emit }){
        const x = ref('');
        return{
            x,
            resultText:()=>{
                emit('search-text',x.value);
            }
        }
    }
}
</script>