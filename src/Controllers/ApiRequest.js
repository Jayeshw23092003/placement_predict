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
        
        const json_reponse = await response.json();
        console.log("Json_reponse is ")
        console.log(json_reponse);
        if(response.ok)
        {
            const json_reponse = await response.json();
            
            return json_reponse;
        }
        return null;
    }
    catch(err)
    {
        return null
    }
}

export const putRequest = async (api, data) => {
    try {
      console.log(data);
  
      const response = await fetch(api, {
        method: 'PUT',
        body: data, // let the browser set the correct headers
      });
  
      if (response.ok) {
        const json_response = await response.json(); // await this
        return json_response;
      } else {
        return null;
      }
    } catch (e) {
      alert(e);
      return null;
    }
  };
  