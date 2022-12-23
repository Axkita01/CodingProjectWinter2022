//INPUT: string indicates a type of question (Creative, Argumentative, Analysis)
//OUTPUT: Corresponding color (red for argue, blue for analysis, green for creative)
export function getColorFromType(type) {
    switch (type) {
        case 'Argumentative':
            return '#FF0000'
        case 'Creative':
            return '#00DD00'
        case 'Analysis':
            return '#0000FF'
        default:
            return '#000000'
    }
}