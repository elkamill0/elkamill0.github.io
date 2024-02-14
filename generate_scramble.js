function set_scramble(){
    reset()
    let int_stack = []
    let stack = []
    let a = getRandomInt(0, 5)
    let tmp_list_moves = [0, 1, 2, 3, 4, 5]
    int_stack.push(a)
    stack.push(moves[a][getRandomInt(0, 2)])
    tmp_list_moves.splice(a, 1)
    a = tmp_list_moves[getRandomInt(0, 4)]
    int_stack.push(a)
    stack.push(moves[a][getRandomInt(0, 2)])

    for(let i = 0; i < getRandomInt(18, 23)-2; i++){
        add_to_stack(int_stack, stack)
    }

    document.getElementById("scramble-handler-p").innerHTML = stack.join(" ")
    scramble_function(stack)

    function add_to_stack(int_stack, stack){
        a = getRandomInt(0, 5)
        if(a == int_stack[int_stack.length-1]){
            add_to_stack(int_stack, stack)
            return 0
        }
        if(a == int_stack[int_stack.length-2]){

            if(int_stack[int_stack.length-1] % 2 == 0){
                if(int_stack[int_stack.length-1] == a-1){
                    add_to_stack(int_stack, stack)
                    return 0
                }
            }
            else{
                if(int_stack[int_stack.length-1] == a+1){
                    add_to_stack(int_stack, stack)
                    return 0
                }
            }
        }
        int_stack.push(a)
        stack.push(moves[a][getRandomInt(0,2)])
        return 1
    }

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max-min+1) + min)
    }

    cube.print()
    return stack
}
set_scramble()
