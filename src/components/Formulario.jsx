import React, {useState} from 'react';
import styled from '@emotion/styled';

///styled components
const Campo = styled.div `
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label  = styled.label `
    flex: 0 0 100px;
`;

const Select = styled.select `
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input `
    margin: 0 1rem;
`;

const Button = styled.button `
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div `
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

//Fin styled components


const Fomulario = () => {

    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [error, guardarError] = useState(false);

    //extraer valores del state
    const {marca, year, plan} = datos;

    //leer los datos del form y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    //cuando el usuario presiona submit
    const cotizarSeguro = e => {
        e.preventDefault();

        //validar
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        //obtener la diferencia de años

        /** Cada vez que sea un aaño anterior va hacer mas barato el seguro
         * Por cada año hay que restar 3% del valor */


        /**-Cada marca va tener un incremento: 
         * Americano 15%
         * Europeo 30%
         * Asiatico 5% */

        /**
         * EL plan bascico aumenta 20%
         * Completo: 50%
        */

        //Total



    }

    return ( 
        <form action="" onSubmit={cotizarSeguro}>

            { error ?  <Error>Todos los campos son obligatorios</Error> : null}

            <Campo>
                <Label>Marca</Label>
                <Select name="marca" value={marca} onChange={obtenerInformacion}>
                    <option value="">-- Seleccione --</option>
                        <option value="Americano">Americano</option>
                        <option value="Europeo">Europeo</option>
                        <option value="Asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={obtenerInformacion} >
                    <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                /> Basico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}
                /> Completo

            </Campo>
            <Button type="submit">Cotizar</Button>
        </form>
     );
}
 
export default Fomulario;