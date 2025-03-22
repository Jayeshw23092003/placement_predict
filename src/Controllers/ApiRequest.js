export const postData=async(api, data)=>{
    try{
        const reponse = await fetch(api,{
            method : "POST",
            headers : {
                "Content-Type":"application-json"
            },
            body : JSON.stringify(data)
        });
        if(Response.ok)
        {
            const json_reponse = Response.json();
            return json_reponse;
        }
        return null;
    }
    catch(err)
    {
        return null
    }
}