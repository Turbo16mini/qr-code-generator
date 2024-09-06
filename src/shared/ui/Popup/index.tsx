import { FC, ReactNode } from 'react'
import s from './Popup.module.css'

interface Props {
    children: ReactNode
    className?: string
}

const Popup: FC<Props> = (props) => {
    return <div className={s.main + ' ' + (props.className ? props.className : '')}>
        {props.children}
    </div>
}

export default Popup