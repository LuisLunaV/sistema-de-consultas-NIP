import { validarToken } from './validar-session.js';
import { compararPasswords, validarCamposLogin } from './validar-campos.js';
import { obtenerMarca } from './obtener-marca.js';
import { crearConsulta } from './crear-consulta.js';
import { validarRol } from './validar-rol.js';
import { obtenerUsuarioMarca } from './obtener-usuario-marca.js';
import { obtenerDatos } from './form-data.js';


export{
    validarToken,
    compararPasswords,
    validarCamposLogin,
    obtenerMarca,
    obtenerUsuarioMarca,
    crearConsulta,
    validarRol,
    obtenerDatos
}