function countingValleys(steps, path) {
    let stepsArray = path.split('')
    let level = 0;
    let count = 0;
    for (let i = 0; i < stepsArray.length; i++) {
        switch(stepsArray[i]) {
            case 'D':
                level++
                break;
            case 'U':
                level--
                break;
            default:
                break;
        }
        if (level === 0 && stepsArray[i] === 'U') {
            count++
        }
    }
    return count
}