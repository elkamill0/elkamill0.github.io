function test(){
    let index = 0
    for (let i = 0; i < 3; i++) {
        test_loop(++index)
        console.log(index+": "+i)
    }

    function test_loop(index){
        while(index <= 3){
            for(let i = 0; i < 3; i++){
                test_loop(++index)
                console.log(index+": "+i)
            }
        }
        
    }
}