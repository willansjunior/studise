import Button from "../button";
import Clock from "./clock";
import style from "./Chronometer.module.scss"
import { timeToSeconds } from "../../common/utils/time";
import { IJob } from "../../types/job";
import { useEffect, useState } from "react";

interface Props {
    selected: IJob | undefined,
    finishJob: () => void
}

export default function Chronometer({ selected, finishJob }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1)
                return regressive(counter - 1)
            }
            finishJob();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressive(time)}>
                Iniciar
            </Button>
        </div>
    )
}