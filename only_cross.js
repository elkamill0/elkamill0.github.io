class WhiteCrossCube{
    constructor(){
        this.cube = [["_", 0, "_", 0, 0, 0, "_", 0, "_"],
                     ["_", 1, "_", 1, 1, 1, "_", 1, "_"], ["_", 2, "_", 2, 2, 2, "_", 2, "_"], ["_", 3, "_", 3, 3, 3, "_", 3, "_"],
                     ["_", 4, "_", 4, 4, 4, "_", 4, "_"],
                     ["_", 5, "_", 5, 5, 5, "_", 5, "_"]]
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
        document.getElementById("up").innerHTML =    ""+"_"+this.cube[0][1]+"_"+"<br>"+this.cube[0][3]+this.cube[0][4]+this.cube[0][5]+"<br>"+"_"+this.cube[0][7]+"_"
        document.getElementById("left").innerHTML =  ""+"_"+this.cube[1][1]+"_"+"<br>"+this.cube[1][3]+this.cube[1][4]+this.cube[1][5]+"<br>"+"_"+this.cube[1][7]+"_"
        document.getElementById("front").innerHTML = ""+"_"+this.cube[2][1]+"_"+"<br>"+this.cube[2][3]+this.cube[2][4]+this.cube[2][5]+"<br>"+"_"+this.cube[2][7]+"_"
        document.getElementById("right").innerHTML = ""+"_"+this.cube[3][1]+"_"+"<br>"+this.cube[3][3]+this.cube[3][4]+this.cube[3][5]+"<br>"+"_"+this.cube[3][7]+"_"
        document.getElementById("back").innerHTML =  ""+"_"+this.cube[4][1]+"_"+"<br>"+this.cube[4][3]+this.cube[4][4]+this.cube[4][5]+"<br>"+"_"+this.cube[4][7]+"_"        
        document.getElementById("down").innerHTML =  ""+"_"+this.cube[5][1]+"_"+"<br>"+this.cube[5][3]+this.cube[5][4]+this.cube[5][5]+"<br>"+"_"+this.cube[5][7]+"_"

    }
    R(){
        let buf = this.cube[0][5]
        this.cube[0][5] = this.cube[2][5]
        this.cube[2][5] = this.cube[5][5]
        this.cube[5][5] = this.cube[4][3]
        this.cube[4][3] = buf
        this.flip(this.cube[3])
        this.checkVerbose()
    }
    
    Rp(){
        let buf = this.cube[2][5]
        this.cube[2][5] = this.cube[0][5]
        this.cube[0][5] = this.cube[4][3]
        this.cube[4][3] = this.cube[5][5]
        this.cube[5][5] = buf
        this.flipp(this.cube[3])
        this.checkVerbose()
    }

    R2(){
        let buf = this.cube[0][5]
        this.cube[0][5] = this.cube[5][5]
        this.cube[5][5] = buf

        buf = this.cube[2][5]
        this.cube[2][5] = this.cube[4][3]
        this.cube[4][3] = buf
        this.flip2(this.cube[3])
        this.checkVerbose()
    }

    L(){
        let buf = this.cube[2][3]
        this.cube[2][3] = this.cube[0][3]
        this.cube[0][3] = this.cube[4][5]
        this.cube[4][5] = this.cube[5][3]
        this.cube[5][3] = buf
        this.flip(this.cube[1])
        this.checkVerbose()
    }

    Lp(){
        let buf = this.cube[0][3]
        this.cube[0][3] = this.cube[2][3]
        this.cube[2][3] = this.cube[5][3]
        this.cube[5][3] = this.cube[4][5]
        this.cube[4][5] = buf
        this.flipp(this.cube[1])
        this.checkVerbose()
    }

    L2(){
        let buf = this.cube[0][3]
        this.cube[0][3] = this.cube[5][3]
        this.cube[5][3] = buf
        buf = this.cube[2][3]
        this.cube[2][3] = this.cube[4][5]
        this.cube[4][5] = buf
        this.flip2(this.cube[1])
        this.checkVerbose()
    }

    U(){
        let buf = this.cube[2][1]
        this.cube[2][1] = this.cube[3][1]
        this.cube[3][1] = this.cube[4][1]
        this.cube[4][1] = this.cube[1][1]
        this.cube[1][1] = buf
        this.flip(this.cube[0])
        this.checkVerbose()
    }

    Up(){
        let buf = this.cube[2][1]
        this.cube[2][1] = this.cube[1][1]
        this.cube[1][1] = this.cube[4][1]
        this.cube[4][1] = this.cube[3][1]
        this.cube[3][1] = buf
        this.flipp(this.cube[0])
        this.checkVerbose()
    }

    U2(){
        let buf = this.cube[2][1]
        this.cube[2][1] = this.cube[4][1]
        this.cube[4][1] = buf

        buf = this.cube[1][1]
        this.cube[1][1] = this.cube[3][1]
        this.cube[3][1] = buf
        this.flip2(this.cube[0])
        this.checkVerbose()
    }


    D(){
        let buf = this.cube[2][7]
        this.cube[2][7] = this.cube[1][7]
        this.cube[1][7] = this.cube[4][7]
        this.cube[4][7] = this.cube[3][7]
        this.cube[3][7] = buf
        this.flip(this.cube[5])
        this.checkVerbose()
    }

    Dp(){
        let buf = this.cube[2][7]
        this.cube[2][7] = this.cube[3][7]
        this.cube[3][7] = this.cube[4][7]
        this.cube[4][7] = this.cube[1][7]
        this.cube[1][7] = buf
        this.flipp(this.cube[5])
        this.checkVerbose()
    }

    D2(){
        let buf = this.cube[2][7]
        this.cube[2][7] = this.cube[4][7]
        this.cube[4][7] = buf
        buf = this.cube[1][7]
        this.cube[1][7] = this.cube[3][7]
        this.cube[3][7] = buf
        this.flip2(this.cube[5])
        this.checkVerbose()
    }

    F(){
        let buf = this.cube[0][7]
        this.cube[0][7] = this.cube[1][5]
        this.cube[1][5] = this.cube[5][1]
        this.cube[5][1] = this.cube[3][3]
        this.cube[3][3] = buf
        this.flip(this.cube[2])
        this.checkVerbose()
    }

    Fp(){
        let buf = this.cube[0][7]
        this.cube[0][7] = this.cube[3][3]
        this.cube[3][3] = this.cube[5][1]
        this.cube[5][1] = this.cube[1][5]
        this.cube[1][5] = buf
        this.flipp(this.cube[2])
        this.checkVerbose()
    }

    F2(){
        let buf = this.cube[0][7]
        this.cube[0][7] = this.cube[5][1]
        this.cube[5][1] = buf
        buf = this.cube[1][5]
        this.cube[1][5] = this.cube[3][3]
        this.cube[3][3] = buf
        this.flip2(this.cube[2])
        this.checkVerbose()
    }

    B(){
        let buf = this.cube[5][7]
        this.cube[5][7] = this.cube[1][3]
        this.cube[1][3] = this.cube[0][1]
        this.cube[0][1] = this.cube[3][5]
        this.cube[3][5] = buf
        this.flip(this.cube[4])
        this.checkVerbose()
    }

    Bp(){
        let buf = this.cube[5][7]
        this.cube[5][7] = this.cube[3][5]
        this.cube[3][5] = this.cube[0][1]
        this.cube[0][1] = this.cube[1][3]
        this.cube[1][3] = buf
        this.flipp(this.cube[4])
        this.checkVerbose()
    }

    B2(){
        let buf = this.cube[0][1]
        this.cube[0][1] = this.cube[5][7]
        this.cube[5][7] = buf
        buf = this.cube[1][3]
        this.cube[1][3] = this.cube[3][5]
        this.cube[3][5] = buf
        this.flip2(this.cube[4])
        this.checkVerbose()
    }

    flip(name_layer){
        let buf = name_layer[1]
        name_layer[1] = name_layer[3]
        name_layer[3] = name_layer[7]
        name_layer[7] = name_layer[5]
        name_layer[5] = buf
    }

    flipp(name_layer){
        let buf = name_layer[1]
        name_layer[1] = name_layer[5]
        name_layer[5] = name_layer[7]
        name_layer[7] = name_layer[3]
        name_layer[3] = buf
    }
    flip2(name_layer){
        let buf = name_layer[1]
        name_layer[1] = name_layer[7]
        name_layer[7] = buf
        buf = name_layer[3]
        name_layer[3] = name_layer[5]
        name_layer[5] = buf
    }
}

var cube = new WhiteCrossCube();