function speed(){
    var start = Date.now()
    var sum = 0;
    for(var i = 0; i < 205031250; i++){
        sum++;
    }
    var stop = Date.now()
    console.log(stop-start)
}


var scrambled_cube = [];
function scramble_function(){
    let scramble = document.getElementById("scramble_notation").value
    scramble = scramble.split(" ")
    scramble.forEach(move => {
        switch(move){
            case "R":
                cube.R()
                break
            case "R'":
                cube.Rp()
                break
            case "R2":
                cube.R2()
                break
            case "L":
                cube.L()
                break
            case "L'":
                cube.Lp()
                break
            case "L2":
                cube.L2()
                break
            case "U":
                cube.U()
                break
            case "U'":
                cube.Up()
                break
            case "U2":
                cube.U2()
                break
            case "D":
                cube.D()
                break
            case "D'":
                cube.Dp()
                break
            case "D2":
                cube.D2()
                break
            case "F":
                cube.F()
                break
            case "F'":
                cube.Fp()
                break
            case "F2":
                cube.F2()
                break
            case "B":
                cube.B()
                break
            case "B'":
                cube.Bp()
                break
            case "B2":
                cube.B2()
                break
            default:
                break
        }
        cube.print()
    });
    scrambled_cube = JSON.parse(JSON.stringify(cube.cube)); // deep cloning
}

function combination(){
    let moves = [["R", "R2", "R'"], ["L", "L2", "L'"],
                 ["U", "U2", "U'"], ["D", "D2", "D'"],
                 ["F", "F2", "F'"], ["B", "B2", "B'"]]


    let moves_number = document.getElementById("moves_number").value
    var stack = []
    var int_stack = []
    var iterator = 0
    
    function loop(){ //flag
        if(stack.length >= moves_number){
            return 0
        }
        for(let i = 0; i < 6; i++){
            if(i == int_stack[int_stack.length-1]){continue}
            if(i == int_stack[int_stack.length-2]){

                if(int_stack[int_stack.length-1] % 2 == 0){
                    if(int_stack[int_stack.length-1] == i-1){
                        continue
                    }
                }
                else{
                    if(int_stack[int_stack.length-1] == i+1){
                        continue
                    }
                }
            }
            
            int_stack.push(i)
            for(let j = 0; j < 3; j++){
                stack.push(moves[i][j])
                // if(find_cross(stack)){
                //     break
                // }
                console.log(stack)
                iterator++
                loop()
                stack.pop()
            }
            int_stack.pop()
        }
        
    }

    let start = Date.now()
    for(let i = 0; i < 6; i++){
        int_stack.push(i)
        for(let j = 0; j < 3; j++){
            stack.push(moves[i][j])
            iterator++
            loop()
            stack.pop()
        }
        int_stack.pop()
    }
    console.log(iterator)
    let stop = Date.now()
    document.getElementById("time").textContent = "time: " + (stop - start)
    document.getElementById("combinations").textContent = "combinations: " + iterator

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

function back_to_scramble() {
    cube.cube = structuredClone(scrambled_cube)
    // cube.print()
}

function reset(){
    cube = new WhiteCrossCube()
    cube.print()
}

    