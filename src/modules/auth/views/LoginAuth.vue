<template>
    <div class="row justify-center window-height">
        <div class="col-12 col-md-4 self-center">
            <q-card class="my-card q-pa-md">
                <q-card-section>
                    <div class="text-h4">Entrar</div>
                    <div class="q-pa-md" >
                        <q-form
                            @submit="onSubmit"
                            class="q-gutter-md"
                        >
                            <q-input
                                filled
                                v-model="data.user"
                                label="Usuario"
                                hint="Usuario"
                                dense
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Por favor inserte el usuario']"
                            />

                            <q-input
                                filled
                                v-model="data.password"
                                type="password"
                                label="Contraseña"
                                lazy-rules
                                dense
                                :rules="[
                                    val => val !== null && val !== '' || 'Por favor inserte la contraseña'
                                ]"
                            />

                            <div class="row justify-center">
                                <q-btn label="Enviar" type="submit" color="primary"/>
                            </div>
                        </q-form>

                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent,ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

export default defineComponent({
     setup(){

        const $q = useQuasar();
        const data = ref({
            user:'',
            password:''
        });
        const router = useRouter();
        const {signInUser}= useAuth();

        return {
            data,
            async onSubmit () {

                const {ok,message}=await signInUser(data.value);
                if(ok){
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message
                    });
                    router.push({ name: 'Digitalización' })
                }else{
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message
                    });
                }
            },

        }
     }
})
</script>