
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
    let moves = [["R", "R'", "R2"], ["L", "L'", "L2"],
                 ["U", "U'", "U2"], ["D", "D'", "D2"],
                 ["B", "B'", "B2"], ["B", "B'", "B2"]]
    
    let m = [1, 2, 3, 4, 5, 6]
    var stack = []
    var int_stack = []
    var iterator = 0
    
    function loop(){
        if(stack.length >= 8){
            return 0
        }
        for(let i = 0; i < 6; i++){
            if(i == int_stack[int_stack.length-1]){continue}
            int_stack.push(i)
            for(let j = 0; j < 3; j++){
                stack.push(moves[i][j])
                // console.log(stack)
                iterator++
                loop()
                stack.pop()
            }
            int_stack.pop()
        }
        
    }


    for(let i = 0; i < 3; i++){
        int_stack.push(i)
        for(let j = 0; j < 3; j++){
            stack.push(moves[i][j])
            loop()
            stack.pop()
        }
        int_stack.pop()
    }
    console.log(iterator)


    // for(let i = 0; i < 3; i++){
    //     int_stack.push(i)
    //     for(let j = 0; j < 3; j++){
    //         stack.push(moves[i][j])
    //         for (let k = 0; k < 3; k++){
    //             if(k == int_stack[int_stack.length-1]){continue}
    //             int_stack.push(k)
    //             for (let l = 0; l < 3; l++){
    //                 stack.push(moves[k][l])
    //                 console.log(stack)
    //                 stack.pop()
    //             }
    //             int_stack.pop()
    //         }
    //         stack.pop()
    //     }
    //     int_stack.pop()
    // }
    
    
    
    
    
    
    // function loop(stack){
    //     if(stack.length >= 8){
    //         return 0;
    //     }
    //     for(let i = 0; i < 4; i++){
    //         if(m[i] == stack[stack.length-1]){continue}
    //         stack.push(m[i])
    //         // console.log(stack)
    //         iterator++
    //         loop(stack)
    //         stack.pop()
    //     }
    // }

    // for(let i = 0; i < m.length; i++){
    //     s.push(m[i])
    //     loop(s)
    //     s.pop()
    // }
    // console.log(iterator)
}
    