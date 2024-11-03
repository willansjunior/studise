import { IJob } from '../../../types/job'
import style from './Item.module.scss'

interface Props extends IJob {
    selectedJob: (selectedJob: IJob) => void
}

export default function Item(
    { 
        job, 
        time, 
        selected, 
        completed, 
        id, 
        selectedJob 
    }: Props) {
    return (
        <li 
            className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`} 
            onClick={() => !completed && selectedJob(
                {
                    job,
                    time,
                    selected,
                    completed,
                    id
                }
            )}
        >
            <h3>{job}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido}
                aria-label='tarefa completada'></span>}
        </li>
    )
}