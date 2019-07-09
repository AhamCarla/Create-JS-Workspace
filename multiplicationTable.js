function isValid(start, end){
    return start <= end && start > 0 && end < 1000;
}

function buildMultiplicationTable(start, end){
    let str = '';
    for(let i = start; i <= end; i++){
        for(let j = start; j <= i; j++){
            let result = i * j;
            if(i == j){
                str += i + '*' + j + '=' + result;
            }else{
                str += i + '*' + j + '=' + result + '\t';
            }
        }
        str += '\n';
    }
    return str;
}

function createMultiplicationTable(start, end){
    if(!isValid(start, end)){
        return null;
    }
    return buildMultiplicationTable(start, end);
}

module.exports = {
    createMultiplicationTable,
    isValid
}