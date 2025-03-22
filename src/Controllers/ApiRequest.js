export const postData=async(api, data)=>{
    try{
        console.log(data)
        const reponse = await fetch(api,{
            method : "POST",
            headers : {
                "Content-Type":"application-json"
            },
            body : JSON.stringify(data)
        });
        if(reponse.ok)
        {
            const json_reponse = response.json();
            return json_reponse;
        }
        return null;
    }
    catch(err)
    {
        return null
    }
}