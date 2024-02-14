function speed(){
    const start = Date.now()
    let sum = 0;
    for(let i = 0; i < 205031250; i++){
        sum++;
    }
    const stop = Date.now()
    console.log(stop-start)
}

function scramble_function(stack = null){
    let scramble = null
    if(stack){
        scramble = stack
    }
    else{
        scramble = document.getElementById("scramble_notation").value
        scramble = scramble.split(" ")
    }
    moving(scramble)
}

function combination_test(){

    cube.x2()
    let stack = []
    let int_stack = []
    let iterator = 0
    
    function loop(){
        if(stack.length >= document.getElementById("moves_number").value){
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
                moving(moves[i][0])
                if(find_cross()){
                    document.getElementById("cross-list").innerHTML += "x2 " + stack.join(" ") + "<br><br>";
                }
                iterator++
                loop()
                stack.pop()
            }
            moving(moves[i][0])
            int_stack.pop()
        }
        
    }

    let start = Date.now()
    for(let i = 0; i < 6; i++){
        int_stack.push(i)
        for(let j = 0; j < 3; j++){
            stack.push(moves[i][j])
            moving(moves[i][0])
            iterator++
            loop()
            stack.pop()
            
        }
        moving(moves[i][0])
        int_stack.pop()
    }
    let stop = Date.now()
    document.getElementById("time").textContent = "time: " + (stop - start)
    document.getElementById("combinations").textContent = "combinations: " + iterator
    cube.x2()
}


    