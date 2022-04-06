export const setButtonSyles = (type) => {
    switch (type) {
        case 'primary':
        default:
            return {
                background: '#586165',
                activeBackground: 'rgba(88, 97, 101, 0.9)',
                color: '#FBFCFB',
                border: '2px solid #586165'
            }
        case 'secondary':
            return {
                background: '#FBFCFB',
                activeBackground: '#FFFFFF',
                color: '#586165',
                border: '2px solid #586165'
            }
    }
}