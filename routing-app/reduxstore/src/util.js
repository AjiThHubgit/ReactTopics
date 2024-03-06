import axios from "axios";
export async function fetch_data(url){
    try{
       const response = await axios.get(url); 
       if(response.status === 200){
        return response.data;
       }
       return [];
    }catch(e){
        console.log(e.message);
        return [];
    }
}