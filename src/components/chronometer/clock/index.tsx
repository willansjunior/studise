import React from "react";
import style from "./Clock.module.scss"

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const minuts = Math.floor(time / 60);
    const seconds = time % 60;
    const [minOne, minTwo] = String(minuts).padStart(2, '0')
    const [secOne, secTwo] = String(seconds).padStart(2, '0')
    return (
        <>
            <span className={style.relogioNumero}>{minOne}</span>
            <span className={style.relogioNumero}>{minTwo}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secOne}</span>
            <span className={style.relogioNumero}>{secTwo}</span>
        </>
    )
}