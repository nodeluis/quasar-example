import { useAuthStore } from 'src/modules/auth/store/authStore';
import { getRecordsApi } from '../helpers/useApis';
import { ResponseStaffInterface } from '../interfaces/Response.interfaz';

export const useCallApi = () => {

    const authStore = useAuthStore();
    const tk:string=authStore.currentToken;

    const getRecords = async(url:string):Promise<{respData:ResponseStaffInterface[],count:number,ok:boolean}> => {

        return await getRecordsApi(url,tk);

    };

    return {
        getRecords,
    }

}