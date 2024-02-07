function find_cross(){
    if (cube.cube[0][1] == 0 && cube.cube[0][3] == 0 && cube.cube[0][5] == 0 && cube.cube[0][7] == 0 &&
        cube.cube[1][1] == 1 && cube.cube[2][1] == 2 && cube.cube[3][1] == 3 && cube.cube[3][1] == 3){
            return true
        }
    // back_to_scramble()
    return false
}


function solve_cross(scr){
    // cube.setVerbose(false)
    scr.forEach(move => {
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
    });
}