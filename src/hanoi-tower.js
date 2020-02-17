module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let outObj ={};
    outObj.turns = Math.pow(2, disksNumber) - 1;
    let buf = turnsSpeed / 3600;
    outObj.seconds = outObj.turns / buf ;
    return outObj;
}
