import React from 'react';
import Button from '../Button';
import { v4 as uuidv4 } from 'uuid';

import style from './Form.module.scss';
import { ITarefa } from '../../types/tarefa';

export class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }> { 
    state = {
        tarefa: "O que você quer estudar?" ,
        tempo: "00:00"
    }; 

    adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, 
            {
                ...this.state, 
                selecionado: false, 
                completado: false,
                id: uuidv4()
            }])
        this.setState({tarefa: "Novo estudo", tempo: "00:00:00"})
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" name="tarefa" id="tarefa" 
                        onChange={event => this.setState({...this.state, tarefa: event.target.value})}
                        placeholder={this.state.tarefa}  required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1" 
                        name="tempo" 
                        value={this.state.tempo} 
                        onChange={event => this.setState({...this.state, tempo: event.target.value})}
                        id="tempo" 
                        min="00:00:00" 
                        max="01:30:00" 
                        required />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }
}