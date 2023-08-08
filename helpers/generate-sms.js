const generateSmsPayload = ( nip, number )=>{

    return{
         username:  'arturo.toks',
         password:  'Aw0r3n08',
         number:    `52${ number }`,
         message:   `Tu nip solicitado es ${nip}`,
         mask:      '1',
         maskValue: 'AComerClub'
     }
 };

 const statusSmsPayload = ( id )=>{

    return{
         username:  'arturo.toks',
         password:  'Aw0r3n08',
         messageid:  id,
     }
 };


 module.exports = {
    generateSmsPayload,
    statusSmsPayload
 }