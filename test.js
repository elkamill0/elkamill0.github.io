function test(){
    let m = [0, 1, 2, 3, 4, 5]
    let s = []
    let iterator = 0
    let x = 0

    for (let i = 0; i < 6; i++){
        // if(!s.indexOf[s.length-1] % 2){
        //     if(s.indexOf[s.length-1]-1 == i){
        //         continue
        //     }
        // }
        // else{
        //     if(s.indexOf[s.length-1]+1 == i){
        //         continue
        //     }
        // }
        if(i % 2 == 0){
            console.log(m[i], m[i]+1)
        }
        else{
            console.log(m[i], m[i]-1)
        }
    }
    


    // for (let i = 0; i < m.length; i++){
    //     s.push(i)
    //     for (let j = 0; j < m.length; j++) {
    //         s.push(j)
    //         for (let k = 0; i < m.length; i++){
    //             if(s.)
    //         }
            
    //     }
    // }


    function loop(stack){
        if(stack.length >= 8){
            return 0;
        }
        for(let i = 0; i < 6; i++){
            if(m[i] == stack[stack.length-1]){continue}
            if(m[i] == stack[stack.length-2]){

                if(stack[stack.length-1] % 2 == 0){
                    if(stack[stack.length-1] == m[i]-1){
                        continue
                    }
                }
                else{
                    if(stack[stack.length-1] == m[i]+1){
                        continue
                    }
                }
            }
            stack.push(m[i])
            // console.log(stack)
            iterator++
            loop(stack)
            stack.pop()
        }
    }

    for(let i = 0; i < m.length; i++){
        s.push(m[i])
        loop(s)
        s.pop()
    }
    console.log(iterator)
}