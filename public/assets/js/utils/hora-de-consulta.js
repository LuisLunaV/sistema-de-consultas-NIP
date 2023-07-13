export const horaDeConsulta =( date )=>{
    const valor = date;
    const fecha = new Date( valor );
    const hora = fecha.toLocaleTimeString([],{ 
        hour:   '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    return hora;
};