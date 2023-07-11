export const obtenerDatos =( form )=>{
    
    const formData = {};

    for( let i of form.elements){
        if(i.name.length > 0) formData[ i.name ] = i.value;
    }

    return formData;
};