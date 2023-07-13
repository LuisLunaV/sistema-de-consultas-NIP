import { horaDeConsulta } from '../utils/index.js';
import { obtenerMetodoDeConsulta } from '../helper/obtener-metodo.js';

export const htmlMostrarUsuariosBitacora =( value, index )=>{
    const tbody = document.querySelector('tbody');
    const html = `
    <tr>
    <th scope="row">${ index+1 }</th>
    <td class='alinear'>${value.User_Name}</td>
    <td class='alinear'>${value.CD_NIP}</td>
    <td class='alinear'>${value.CD_ReferenceNum}</td>
    <td class='alinear'>${ 
        obtenerMetodoDeConsulta( value.CD_MethodID ) 
    }</td>
    <td class='alinear'>${
       horaDeConsulta( value.CreatedAt )
    }</td>
    </tr>
    `;
    tbody.innerHTML += html;
}