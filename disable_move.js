function combination_test(){
    document.getElementById("cross-list").textContent = ""
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
                // console.log(moves[i][0])
                scramble_function_test(moves[i][0])
                if(find_cross()){
                    // console.log(stack)
                    document.getElementById("cross-list").innerHTML += stack.join(" ") + "<br><br>";
                }
                // console.log(stack)
                iterator++
                loop()
                stack.pop()
            }
            // console.log(moves[i][0])
            scramble_function_test(moves[i][0])
            int_stack.pop()
        }
        
    }

    let start = Date.now()
    for(let i = 0; i < 6; i++){
        int_stack.push(i)
        for(let j = 0; j < 3; j++){
            stack.push(moves[i][j])
            // console.log(moves[i][0])
            scramble_function_test(moves[i][0])
            iterator++
            loop()
            stack.pop()
            
        }
        // console.log(moves[i][0])
        scramble_function_test(moves[i][0])
        int_stack.pop()
    }
    let stop = Date.now()
    document.getElementById("time").textContent = "time: " + (stop - start)
    document.getElementById("combinations").textContent = "combinations: " + iterator
}

// var scrambled_cube = [];
function scramble_function_test(move){
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
    // cube.print()
    // return 0
}
