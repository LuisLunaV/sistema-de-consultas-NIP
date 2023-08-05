export const alertaEmpleadoNoExiste =( msg )=>{

    Swal.fire({
        title:'¡Empleado no existe!',
        text:`${ msg }`,
        icon:'error',
        customClass: {
            popup:'popup-alert',
            title: 'title-alert',
            icon: 'icon-alert',
            htmlContainer:'info-content-alert',
            confirmButton: 'confirmButton-alert',
          }
    });
};