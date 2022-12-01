<template>
    <h1>dashboard</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup(){

        const page=ref(1);
        const pages=ref(0);
        const search=ref('');
        const url=ref('');
        const limit=ref(6);
        const pagination=ref([]);
        const { callDataPage } = useEstuquera()

        return{
            page,
            pagination,
            url,
            limit,
            search,
            pages,
            init:async()=>{
                url.value=search.value
                    ?`/staff?page=${page.value}&limit=${limit.value}&search=${search.value}`
                    :`/staff?page=${page.value}&limit=${limit.value}`;

                const { ok, data } = await callDataPage( url.value );
                if(ok){
                    pages.value=data.meta.count;
                }
            },
            resultText:(x:string)=>{
                
            },
            resultPage:(x:number)=>{
                page.value=x;
            }
        }
    },
    created(){
        this.init();
    }
})
</script>
