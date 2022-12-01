<template>
    <div class="row">
        <div class="col-12">
            <div class="q-pa-md">
                <div class="row justify-center q-mt-md">
                    <SearchText
                        :placeholder="'Busca algún personal'"
                        @search-text="resultText"
                    />
                </div>
                <q-table
                    title="Personal"
                    :rows="array"
                    :columns="columns"
                    row-key="name"
                    hide-pagination
                />
                <div class="row justify-center q-mt-md">
                    <q-pagination
                        v-model="page"
                        color="grey-8"
                        :max="pages"
                        size="sm"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { computed, defineComponent, ref, watch } from 'vue';
import { useCallApi } from '../composables/useCallApi';
import { ResponseStaffInterface } from '../interfaces/Response.interfaz';
import SearchText from '../components/SearchText.vue';

const columns = [
  {
    name: 'name'
    , align: 'center', label: 'Nombre', field: 'name'
  },
  { name: 'ci', align: 'center', label: 'Cédula', field: 'ci', sortable: true }
]

export default defineComponent({
    components:{
        SearchText
    },
    setup(){

        const page=ref(1);
        const pages=ref(0);
        const search=ref('');
        const url=ref('');
        const newSearch=ref(true);
        const limit=ref(10);
        const pagination=ref<Array<ResponseStaffInterface[]>>([]);
        const { getRecords } = useCallApi();
        const array=computed(()=>pagination.value[page.value-1]);
        const init=async()=>{
            url.value=search.value
                ?`/staff?page=${page.value}&limit=${limit.value}&search=${search.value}`
                :`/staff?page=${page.value}&limit=${limit.value}`;

            const { ok, respData,count } = await getRecords( url.value );
            if(ok){
                if(newSearch.value){
                    newSearch.value=false;
                    const pg=parseInt(count/limit.value+'');
                    const dv=count%limit.value;
                    pages.value=dv>0?pg+1:pg;
                    console.log(pages.value);
                    for (let z = 0; z < pages.value; z++) {
                        pagination.value.push([]);
                    }
                }
                pagination.value[page.value-1]=respData;
            }
            
        };

        watch(page, () => {
            init();
        });

        return{
            page,
            pagination,
            url,
            limit,
            search,
            pages,
            array,
            init,
            columns,
            resultText:(x:string)=>{
                newSearch.value=true;
                page.value=1;
                search.value=x;
                init();
            },
            currentPage:(x:number)=>{
                page.value=x;
                init();
            }
        }
    },
    created(){
        this.init();
    }
})
</script>
