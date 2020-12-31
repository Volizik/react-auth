import { MouseEvent } from 'react'

export interface PanelProps {
    onButtonClick: (event: MouseEvent<HTMLButtonElement>) => void
}
