const url = "http://apisms.c3ntro.com:8282/";

export const smsServices = async( nip, number )=>{

    const data = {
    username: "usuario",
    password: "password",
    number:   `52${ number }`,
    message:   `Tu nip solicitado es ${nip}`,
    mask:      "1",
    maskValue: "AComerClub"
}

    try {
        const resp = await fetch(`${url}`,{
            method: "POST",
            body: JSON.stringify( data ),
            headers: {
              "Content-Type": "application/json"
            }
        });

        if( resp.ok ){
            const data = resp.json();
            return data;
        }else{
            const error = await resp.json();
            throw error;
        }
        
    } catch (error) {
        throw error;    }

};