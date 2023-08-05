export const alertaNotificacion =( msg )=>{
    Swal.fire({
        title:'¡Notificacion importante!',
        text:`${ msg }`,
        icon:'info',
        customClass: {
            popup:'popup-alert',
            title: 'title-alert',
            icon: 'icon-alert',
            htmlContainer:'info-content-alert',
            confirmButton: 'confirmButton-alert',
          }
    });
};