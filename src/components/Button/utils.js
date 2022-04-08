import {
    black,
    white
} from '../../colors'

export const setButtonSyles = (type) => {
    switch (type) {
        case 'primary':
        default:
            return {
                width: '200px',
                background: `${black.base}`,
                activeBackground: 'rgba(88, 97, 101, 0.9)',
                color: `${white.base}`,
                border: `2px solid ${black.base}`
            }
        case 'secondary':
            return {
                width: '200px',
                background: `${white.base}`,
                activeBackground: `${white.light}`,
                color: `${black.base}`,
                border: `2px solid ${black.base}`
            }
    }
}