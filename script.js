class Cube{
    constructor(){
        this.cube = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2], [3, 3, 3, 3, 3, 3, 3, 3, 3],
                     [4, 4, 4, 4, 4, 4, 4, 4, 4],
                     [5, 5, 5, 5, 5, 5, 5, 5, 5]]
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
        for(var i = 2; i < 9; i+=3){
            var buf = this.cube[0][i]
            this.cube[0][i] = this.cube[2][i]
            this.cube[2][i] = this.cube[5][i]
            this.cube[5][i] = this.cube[4][8 - i]
            this.cube[4][8 - i] = buf
        }
        this.flip(this.cube[3])
        this.print()
    }

    Rp(){
        for(var i = 2; i < 9; i+=3){
            var buf = this.cube[2][i]
            this.cube[2][i] = this.cube[0][i]
            this.cube[0][i] = this.cube[4][8 - i]
            this.cube[4][8 - i] = this.cube[5][i]
            this.cube[5][i] = buf
        }
        this.flipp(this.cube[3])
        this.print()
    }

    L(){
        for(var i = 0; i < 9; i+=3){
            var buf = this.cube[2][i]
            this.cube[2][i] = this.cube[0][i]
            this.cube[0][i] = this.cube[4][8 - i]
            this.cube[4][8 - i] = this.cube[5][i]
            this.cube[5][i] = buf
        }
        this.flip(this.cube[1])
        this.print()
    }

    Lp(){
        for(var i = 0; i < 9; i+=3){
            var buf = this.cube[0][i]
            this.cube[0][i] = this.cube[2][i]
            this.cube[2][i] = this.cube[5][i]
            this.cube[5][i] = this.cube[4][8 - i]
            this.cube[4][8 - i] = buf
        }
        this.flipp(this.cube[1])
        this.print()
    }

    U(){
        for(var i = 0; i < 3; i++){
            var buf = this.cube[2][i]
            this.cube[2][i] = this.cube[3][i]
            this.cube[3][i] = this.cube[4][i]
            this.cube[4][i] = this.cube[1][i]
            this.cube[1][i] = buf
            }
        this.flip(this.cube[0])
        this.print()
    }

    Up(){
        for(var i = 0; i < 3; i++){
            var buf = this.cube[2][i]
            this.cube[2][i] = this.cube[1][i]
            this.cube[1][i] = this.cube[4][i]
            this.cube[4][i] = this.cube[3][i]
            this.cube[3][i] = buf
            }
        this.flipp(this.cube[0])
        this.print()
    }

    D(){
        for(var i = 6; i < 9; i++){
            var buf = this.cube[2][i]
            this.cube[2][i] = this.cube[1][i]
            this.cube[1][i] = this.cube[4][i]
            this.cube[4][i] = this.cube[3][i]
            this.cube[3][i] = buf
            }
        this.flip(this.cube[5])
        this.print()
    }

    Dp(){
        for(var i = 6; i < 9; i++){
            var buf = this.cube[2][i]
            this.cube[2][i] = this.cube[3][i]
            this.cube[3][i] = this.cube[4][i]
            this.cube[4][i] = this.cube[1][i]
            this.cube[1][i] = buf
            }
        this.flipp(this.cube[5])
        this.print()
    }

    F(){
        for (var i = 0; i < 3; i++){
            var buf = this.cube[0][6 + i]
            this.cube[0][6 + i] = this.cube[1][8 - (i * 3)]
            this.cube[1][8 - (i * 3)] = this.cube[5][2 - i]
            this.cube[5][2 - i] = this.cube[3][0 + (i * 3)]
            this.cube[3][0 + (i * 3)] = buf
        }
        this.flip(this.cube[2])
        this.print()
    }

    Fp(){
        for (var i = 0; i < 3; i++){
            var buf = this.cube[0][6 + i]
            this.cube[0][6 + i] = this.cube[3][(i * 3)]
            this.cube[3][i * 3] = this.cube[5][2 - i]
            this.cube[5][2 - i] = this.cube[1][8 - (i * 3)]
            this.cube[1][8 - (i * 3)] = buf
        }
        this.flipp(this.cube[2])
        this.print()
    }

    B(){
        for (var i = 0; i < 3; i++){
            var buf = this.cube[5][6 + i]
            this.cube[5][6 + i] = this.cube[1][i * 3]
            this.cube[1][i * 3] = this.cube[0][2 - i]
            this.cube[0][2 - i] = this.cube[3][8 - (i * 3)]
            this.cube[3][8 - (i * 3)] = buf
        }
        this.flip(this.cube[4])
        this.print()
    }

    Bp(){
        for (var i = 0; i < 3; i++){
            var buf = this.cube[5][6 + i]
            this.cube[5][6 + i] = this.cube[3][8 - (i * 3)]
            this.cube[3][8 - (i * 3)] = this.cube[0][2 - i]
            this.cube[0][2 - i] = this.cube[1][i * 3]
            this.cube[1][i * 3] = buf
        }
        this.flipp(this.cube[4])
        this.print()
    }

    flip(name_layer){
        var buf = name_layer[0]
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
        var buf = name_layer[0]
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
}

