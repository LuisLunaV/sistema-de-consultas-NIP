
export const htmlMostrarUsuariosBitacora =({ User_Name, CD_NIP, CD_ReferenceNum })=>{
    const tbody = document.querySelector('tbody');

    const html = `
    <tr>
    <td class='alinear'>${User_Name}</td>
    <td class='alinear'>${CD_NIP}</td>
    <td class='alinear'>${CD_ReferenceNum}</td>
    </tr>
    `;
    tbody.innerHTML += html;
}