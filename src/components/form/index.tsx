import React, { useState } from "react";
import Button from "../button";
import style from "./Form.module.scss"
import { IJob } from "../../types/job";
import { v4 as uuidv4 } from 'uuid'

interface Props {
    setJobs: React.Dispatch<React.SetStateAction<IJob[]>>
}

export default function Form({ setJobs }: Props) {
    const [job, setJob] = useState("");
    const [time, setTime] = useState("00:00")
    function addJob(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setJobs(jobsOld => 
            [
                ...jobsOld, 
                { 
                    job,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        
        setJob("")
        setTime("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={addJob}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={job}
                        onChange={event => setJob(event.target.value)}
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={time}
                        onChange={event => setTime(event.target.value)}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />

                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
    )
}