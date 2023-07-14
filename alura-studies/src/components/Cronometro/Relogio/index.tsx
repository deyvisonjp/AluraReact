import React from "react";

import style from './relogio.module.scss'

interface Props {
    tempo: number | undefined
}

const Relogio = ({tempo = 0}: Props) => {

    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;

    //função chamada padStart(), 
    //que permite que tenhamos uma cadeia de caracteres padrão e se não tiver o número mínimo
    //Por exemplo, se for 1 ele transforma em "01" e se for 25 ele vai manter "25".
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    return (
        <React.Fragment>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>
    )
}

export default Relogio;