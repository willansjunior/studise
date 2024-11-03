import style from "./List.module.scss"
import Item from "./Item";
import { IJob } from "../../types/job";

interface Props {
    jobs: IJob[],
    selectedJob: (selectedJob: IJob) => void
}

function List({ jobs, selectedJob }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {jobs.map(item => (
                    <Item
                        selectedJob={selectedJob}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;