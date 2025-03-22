export const postData=async(api, data)=>{
    try{
        console.log(data)
        const response = await fetch(api,{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(data)
        });
        console.log("Reponse is ")
        console.log(response);
        if(response.ok)
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