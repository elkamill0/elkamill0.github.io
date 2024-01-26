
function speed(){
    var start = Date.now()
    var sum = 0;
    for(var i = 0; i < 205031250; i++){
        sum++;
    }
    var stop = Date.now()
    console.log(stop-start)
}

function scramble(){
    var scramble = document.getElementById("scramble_notation").value
    scramble = scramble.split(" ")
    scramble.forEach(move => {
        switch(move){
            case "R":
                R()
                break
            case "R'":
                Rp()
                break
            case "R2":
                R2()
                break
            case "L":
                L()
                break
            case "L'":
                Lp()
                break
            case "L2":
                L2()
                break
            case "U":
                U()
                break
            case "U'":
                Up()
                break
            case "U2":
                U2()
                break
            case "D":
                D()
                break
            case "D'":
                Dp()
                break
            case "D2":
                D2()
                break
            case "F":
                F()
                break
            case "F'":
                Fp()
                break
            case "F2":
                F2()
                break
            case "B":
                B()
                break
            case "B'":
                Bp()
                break
            case "B2":
                B2()
                break
            default:
                break
        }
    });
}

function combination(){
    
}