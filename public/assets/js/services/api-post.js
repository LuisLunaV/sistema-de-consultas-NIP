import { url, auth, users, consults, consultsDate, clients } from './index.js'

const postLogin = async (data) => {
  try {
    const resp = await fetch(`${url}${auth}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (resp.ok) {
      const data = await resp.json();
      return data;
    } else{
      const error = await resp.json();
      throw error;
    } 
  } catch (error) {
    throw error;
  }
};

const postUserCreate = async( data )=>{
  try {
    const resp = await fetch(`${url}${users}`,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if( resp.ok ){
      const data = await resp.json();
      return data;
    }else{
      const {errors} = await resp.json();
      throw errors;
    } 
  } catch (error) {
    throw error;
  }
};

const postConsultCreate = async( token, data )=>{
  
  try {
    const resp = await fetch(`${ url }${ consults }`,{
      method: "POST",
      body: JSON.stringify( data ),
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      }
    });

    if( resp.ok ){
      const data = await resp.json();
      return data;
    }else{
      const {errors} = await resp.json();
      throw errors;
    } 
  } catch (error) {
    throw error;
  }
};

const postBuscarConsulta = async( data )=>{
  
 try {
  const resp = await fetch(`${ url }${ consultsDate }`,{
    method: "POST",
    body: JSON.stringify( data ),
    headers: {
      "Content-Type": "application/json",
    }
  });
     
     if ( resp.ok ) {
         const data = await resp.json();  
         return data;

     } else{
         const error = await resp.json();
         throw error;
     }
} catch (error) {
 throw error;
}

};

const postConsultarNip = async( token, data )=>{

  try {
    const resp = await fetch(`${ url }${ clients }`,{
      method: "POST",
      body: JSON.stringify( data ),
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      }
    });
       
       if ( resp.ok ) {
           const data = await resp.json();  
           return data;
  
       } else{
           const error = await resp.json();
           throw error;
       }
  } catch (error) {
   throw error;
  }
};

export{
    postLogin,
    postUserCreate,
    postConsultCreate,
    postBuscarConsulta,
    postConsultarNip
}