class Cube{ // 0:white; 1:orange 2:green 3:red 4:blue 5:yellow
    constructor(){
        this.cube = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2], [3, 3, 3, 3, 3, 3, 3, 3, 3],
                     [4, 4, 4, 4, 4, 4, 4, 4, 4],
                     [5, 5, 5, 5, 5, 5, 5, 5, 5]]
        this.verbose = false
    }

    setVerbose(verbose){
        return this.verbose = verbose
    }
    
    checkVerbose(){
        if (this.verbose){
            this.print()
        }
    }

    print(){
        document.getElementById("up").innerHTML =    ""+this.cube[0][0]+this.cube[0][1]+this.cube[0][2]+"<br>"+this.cube[0][3]+this.cube[0][4]+this.cube[0][5]+"<br>"+this.cube[0][6]+this.cube[0][7]+this.cube[0][8]
        document.getElementById("left").innerHTML =  ""+this.cube[1][0]+this.cube[1][1]+this.cube[1][2]+"<br>"+this.cube[1][3]+this.cube[1][4]+this.cube[1][5]+"<br>"+this.cube[1][6]+this.cube[1][7]+this.cube[1][8]
        document.getElementById("front").innerHTML = ""+this.cube[2][0]+this.cube[2][1]+this.cube[2][2]+"<br>"+this.cube[2][3]+this.cube[2][4]+this.cube[2][5]+"<br>"+this.cube[2][6]+this.cube[2][7]+this.cube[2][8]
        document.getElementById("right").innerHTML =  ""+this.cube[3][0]+this.cube[3][1]+this.cube[3][2]+"<br>"+this.cube[3][3]+this.cube[3][4]+this.cube[3][5]+"<br>"+this.cube[3][6]+this.cube[3][7]+this.cube[3][8]
        document.getElementById("back").innerHTML =  ""+this.cube[4][0]+this.cube[4][1]+this.cube[4][2]+"<br>"+this.cube[4][3]+this.cube[4][4]+this.cube[4][5]+"<br>"+this.cube[4][6]+this.cube[4][7]+this.cube[4][8]        
        document.getElementById("down").innerHTML =  ""+this.cube[5][0]+this.cube[5][1]+this.cube[5][2]+"<br>"+this.cube[5][3]+this.cube[5][4]+this.cube[5][5]+"<br>"+this.cube[5][6]+this.cube[5][7]+this.cube[5][8]

    }
    R(){
        for(let i = 2; i < 9; i+=3){
            let buf = this.cube[0][i]
            this.cube[0][i] = this.cube[2][i]
            this.cube[2][i] = this.cube[5][i]
            this.cube[5][i] = this.cube[4][8 - i]
            this.cube[4][8 - i] = buf
        }
        this.flip(this.cube[3])
        this.checkVerbose()
    }
    
    Rp(){
        for(let i = 2; i < 9; i+=3){
            let buf = this.cube[2][i]
            this.cube[2][i] = this.cube[0][i]
            this.cube[0][i] = this.cube[4][8 - i]
            this.cube[4][8 - i] = this.cube[5][i]
            this.cube[5][i] = buf
        }
        this.flipp(this.cube[3])
        this.checkVerbose()
    }

    R2(){
        for(let i = 2; i < 9; i+=3) {
            let buf = this.cube[0][i]
            this.cube[0][i] = this.cube[5][i]
            this.cube[5][i] = buf

            buf = this.cube[2][i]
            this.cube[2][i] = this.cube[4][8-i]
            this.cube[4][8-i] = buf
        }
        this.flip2(this.cube[3])
        this.checkVerbose()
    }

    L(){
        for(let i = 0; i < 9; i+=3){
            let buf = this.cube[2][i]
            this.cube[2][i] = this.cube[0][i]
            this.cube[0][i] = this.cube[4][8 - i]
            this.cube[4][8 - i] = this.cube[5][i]
            this.cube[5][i] = buf
        }
        this.flip(this.cube[1])
        this.checkVerbose()
    }

    Lp(){
        for(let i = 0; i < 9; i+=3){
            let buf = this.cube[0][i]
            this.cube[0][i] = this.cube[2][i]
            this.cube[2][i] = this.cube[5][i]
            this.cube[5][i] = this.cube[4][8 - i]
            this.cube[4][8 - i] = buf
        }
        this.flipp(this.cube[1])
        this.checkVerbose()
    }

    L2(){
        for(let i = 0; i < 9; i+=3) {
            let buf = this.cube[0][i]
            this.cube[0][i] = this.cube[5][i]
            this.cube[5][i] = buf

            buf = this.cube[2][i]
            this.cube[2][i] = this.cube[4][8-i]
            this.cube[4][8-i] = buf
        }
        this.flip2(this.cube[1])
        this.checkVerbose()
    }

    U(){
        for(let i = 0; i < 3; i++){
            let buf = this.cube[2][i]
            this.cube[2][i] = this.cube[3][i]
            this.cube[3][i] = this.cube[4][i]
            this.cube[4][i] = this.cube[1][i]
            this.cube[1][i] = buf
            }
        this.flip(this.cube[0])
        this.checkVerbose()
    }

    Up(){
        for(let i = 0; i < 3; i++){
            let buf = this.cube[2][i]
            this.cube[2][i] = this.cube[1][i]
            this.cube[1][i] = this.cube[4][i]
            this.cube[4][i] = this.cube[3][i]
            this.cube[3][i] = buf
            }
        this.flipp(this.cube[0])
        this.checkVerbose()
    }

    U2(){
        for(let i = 0; i < 3; i++) {
            let buf = this.cube[2][i]
            this.cube[2][i] = this.cube[4][i]
            this.cube[4][i] = buf

            buf = this.cube[1][i]
            this.cube[1][i] = this.cube[3][i]
            this.cube[3][i] = buf
        }
        this.flip2(this.cube[0])
        this.checkVerbose()
    }


    D(){
        for(let i = 6; i < 9; i++){
            let buf = this.cube[2][i]
            this.cube[2][i] = this.cube[1][i]
            this.cube[1][i] = this.cube[4][i]
            this.cube[4][i] = this.cube[3][i]
            this.cube[3][i] = buf
            }
        this.flip(this.cube[5])
        this.checkVerbose()
    }

    Dp(){
        for(let i = 6; i < 9; i++){
            let buf = this.cube[2][i]
            this.cube[2][i] = this.cube[3][i]
            this.cube[3][i] = this.cube[4][i]
            this.cube[4][i] = this.cube[1][i]
            this.cube[1][i] = buf
            }
        this.flipp(this.cube[5])
        this.checkVerbose()
    }

    D2(){
        for(let i = 6; i < 9; i++) {
            let buf = this.cube[2][i]
            this.cube[2][i] = this.cube[4][i]
            this.cube[4][i] = buf

            buf = this.cube[1][i]
            this.cube[1][i] = this.cube[3][i]
            this.cube[3][i] = buf
        }
        this.flip2(this.cube[5])
        this.checkVerbose()
    }

    F(){
        for (let i = 0; i < 3; i++){
            let buf = this.cube[0][6 + i]
            this.cube[0][6 + i] = this.cube[1][8 - (i * 3)]
            this.cube[1][8 - (i * 3)] = this.cube[5][2 - i]
            this.cube[5][2 - i] = this.cube[3][0 + (i * 3)]
            this.cube[3][0 + (i * 3)] = buf
        }
        this.flip(this.cube[2])
        this.checkVerbose()
    }

    Fp(){
        for (let i = 0; i < 3; i++){
            let buf = this.cube[0][6 + i]
            this.cube[0][6 + i] = this.cube[3][(i * 3)]
            this.cube[3][i * 3] = this.cube[5][2 - i]
            this.cube[5][2 - i] = this.cube[1][8 - (i * 3)]
            this.cube[1][8 - (i * 3)] = buf
        }
        this.flipp(this.cube[2])
        this.checkVerbose()
    }

    F2(){
        let buf
        for(let i = 6; i < 9; i++) {
            buf = this.cube[0][i]
            this.cube[0][i] = this.cube[5][8-i]
            this.cube[5][8-i] = buf
        }
        for(let i = 2; i < 9; i+=3){
            buf = this.cube[1][i]
            this.cube[1][i] = this.cube[3][8-i]
            this.cube[3][8-i] = buf
        }
        this.flip2(this.cube[2])
        this.checkVerbose()
    }

    B(){
        for (let i = 0; i < 3; i++){
            let buf = this.cube[5][6 + i]
            this.cube[5][6 + i] = this.cube[1][i * 3]
            this.cube[1][i * 3] = this.cube[0][2 - i]
            this.cube[0][2 - i] = this.cube[3][8 - (i * 3)]
            this.cube[3][8 - (i * 3)] = buf
        }
        this.flip(this.cube[4])
        this.checkVerbose()
    }

    Bp(){
        for (let i = 0; i < 3; i++){
            let buf = this.cube[5][6 + i]
            this.cube[5][6 + i] = this.cube[3][8 - (i * 3)]
            this.cube[3][8 - (i * 3)] = this.cube[0][2 - i]
            this.cube[0][2 - i] = this.cube[1][i * 3]
            this.cube[1][i * 3] = buf
        }
        this.flipp(this.cube[4])
        this.checkVerbose()
    }

    B2(){
        let buf
        for(let i = 0; i < 3; i++) {
            buf = this.cube[0][i]
            this.cube[0][i] = this.cube[5][8-i]
            this.cube[5][8-i] = buf
        }
        for(let i = 0; i < 9; i+=3){
            buf = this.cube[1][i]
            this.cube[1][i] = this.cube[3][8-i]
            this.cube[3][8-i] = buf
        }
        this.flip2(this.cube[4])
        this.checkVerbose()
    }

    x(){
        let buf = this.cube[0]
        this.cube[0] = this.cube[2]
        this.cube[2] = this.cube[5]
        this.cube[5] = this.cube[4]
        this.flip2(this.cube[5])
        this.cube[4] = buf
        this.flip2(this.cube[4])

        this.flip(this.cube[3])
        this.flipp(this.cube[1])
    }

    xp(){
        let buf = this.cube[0]
        this.cube[0] = this.cube[4]
        this.flip2(this.cube[0])
        this.cube[4] = this.cube[5]
        this.flip2(this.cube[4])
        this.cube[5] = this.cube[2]
        this.cube[2] = buf

        this.flipp(this.cube[3])
        this.flip(this.cube[1])
    }

    x2(){
        let buf = this.cube[0]
        this.cube[0] = this.cube[5]
        this.cube[5] = buf

        buf = this.cube[2]
        this.cube[2] = this.cube[4]
        this.flip2(this.cube[2])
        this.cube[4] = buf
        this.flip2(this.cube[4])

        this.flip2(this.cube[3])
        this.flip2(this.cube[1])
    }

    y(){
        let buf = this.cube[2]
        this.cube[2] = this.cube[3]
        this.cube[3] = this.cube[4]
        this.cube[4] = this.cube[1]
        this.cube[1] = buf

        this.flip(this.cube[0])
        this.flipp(this.cube[5])
    }

    yp(){
        let buf = this.cube[2]
        this.cube[2] = this.cube[1]
        this.cube[1] = this.cube[4]
        this.cube[4] = this.cube[3]
        this.cube[3] = buf

        this.flipp(this.cube[0])
        this.flip(this.cube[5])
    }

    y2(){
        let buf = this.cube[2]
        this.cube[2] = this.cube[4]
        this.cube[4] = buf

        buf = this.cube[1]
        this.cube[1] = this.cube[3]
        this.cube[3] = buf

        this.flip2(this.cube[0])
        this.flip2(this.cube[5])
    }
    
    z(){
        let buf = this.cube[0]
        this.cube[0] = this.cube[1]
        this.flip(this.cube[0])
        this.cube[1] = this.cube[5]
        this.flip(this.cube[1])
        this.cube[5] = this.cube[3]
        this.flip(this.cube[5])
        this.cube[3] = buf
        this.flip(this.cube[3])

        this.flip(this.cube[2])
        this.flipp(this.cube[4])
    }

    zp(){
        let buf = this.cube[0]
        this.cube[0] = this.cube[3]
        this.flipp(this.cube[0])
        this.cube[3] = this.cube[5]
        this.flipp(this.cube[3])
        this.cube[5] = this.cube[1]
        this.flipp(this.cube[5])
        this.cube[1] = buf
        this.flipp(this.cube[1])

        this.flipp(this.cube[2])
        this.flip(this.cube[4])
    }

    z2(){
        let buf = this.cube[0]
        this.cube[0] = this.cube[5]
        this.flip2(this.cube[0])
        this.cube[5] = buf
        this.flip2(this.cube[5])

        buf = this.cube[1]
        this.cube[1] = this.cube[3]
        this.flip2(this.cube[1])
        this.cube[3] = buf
        this.flip2(this.cube[3])
        
        this.flip2(this.cube[2])
        this.flip2(this.cube[4])
    }


    flip(name_layer){
        let buf = name_layer[0]
        name_layer[0] = name_layer[6]
        name_layer[6] = name_layer[8]
        name_layer[8] = name_layer[2]
        name_layer[2] = buf

        buf = name_layer[1]
        name_layer[1] = name_layer[3]
        name_layer[3] = name_layer[7]
        name_layer[7] = name_layer[5]
        name_layer[5] = buf
    }

    flipp(name_layer){
        let buf = name_layer[0]
        name_layer[0] = name_layer[2]
        name_layer[2] = name_layer[8]
        name_layer[8] = name_layer[6]
        name_layer[6] = buf

        buf = name_layer[1]
        name_layer[1] = name_layer[5]
        name_layer[5] = name_layer[7]
        name_layer[7] = name_layer[3]
        name_layer[3] = buf
    }
    flip2(name_layer){
        let buf = name_layer[0]
        name_layer[0] = name_layer[8]
        name_layer[8] = buf
        buf = name_layer[2]
        name_layer[2] = name_layer[6]
        name_layer[6] = buf

        buf = name_layer[1]
        name_layer[1] = name_layer[7]
        name_layer[7] = buf
        buf = name_layer[3]
        name_layer[3] = name_layer[5]
        name_layer[5] = buf
    }
}

var cube = new Cube();

function reset(){
    cube = new Cube()
    cube.print()
}

function moving(scramble){
    for (let move of scramble){
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
    }
}

var moves = [["R", "R2", "R'"], ["L", "L2", "L'"],
                    ["U", "U2", "U'"], ["D", "D2", "D'"],
                    ["F", "F2", "F'"], ["B", "B2", "B'"]];