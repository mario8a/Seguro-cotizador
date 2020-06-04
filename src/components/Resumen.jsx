import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types'

import {primerMayusula} from '../helper';

const ContenedorResumen = styled.div `
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;

`

const Resumen = ({datos}) => {


    //extraer de datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return (

        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primerMayusula(marca)} </li>
                <li>Plan: {primerMayusula(plan)} </li>
                <li>Año del auto: {year} </li>
            </ul>
        </ContenedorResumen>

        
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired,
}
 
export default Resumen;