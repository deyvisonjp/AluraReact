import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../commom/utils/time"
import { ITarefa } from "../../types/tarefa"
import Button from "../Button"
import Relogio from "./Relogio"

import style from './cronometro.module.scss'

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export const Cronometro = ({selecionado, finalizarTarefa}: Props) => {
    
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    const regressiva = (temporizador: number = 0) => {
        setTimeout(() => {
            if(temporizador > 0) {
                setTempo(temporizador - 1)
                //funcão regressiva
                return regressiva(temporizador - 1)
            }
            finalizarTarefa();
        }, 1000)
        
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            
            <Button onClick={() => regressiva(tempo)}>
                Começar!
            </Button>
        </div>
    )
}