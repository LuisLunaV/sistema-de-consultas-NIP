
export const htmlMostrarUsuariosBitacora =( value, index )=>{
    const tbody = document.querySelector('tbody');
    const html = `
    <tr>
    <th scope="row">${ index+1 }</th>
    <td class='alinear'>${value.User_Name}</td>
    <td class='alinear'>${value.CD_NIP}</td>
    <td class='alinear'>${value.CD_ReferenceNum}</td>
    </tr>
    `;
    tbody.innerHTML += html;
}