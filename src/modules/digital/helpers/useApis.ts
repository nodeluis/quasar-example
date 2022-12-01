import { api } from 'src/boot/axios';
import { ResponseStaffInterface } from '../interfaces/Response.interfaz';

export const getRecordsApi=async(url: string,token:string):Promise<{respData:ResponseStaffInterface[],count:number,ok:boolean}>=>{
    try {
        const { data } = await api.get(url, {
            headers:{
                'Authorization':'Bearer '+token
            }
        });
        const respData:ResponseStaffInterface[]=data.data;
        const count:number=data.meta.count;

        return {respData,count,ok:true};

    } catch (error:any) {
        console.log(error);
        
        const respData:ResponseStaffInterface[]=[];
        return {respData,count:0,ok:false};
    }
}
