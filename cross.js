function find_cross(scr){
    solve_cross(scr)
    if (cube.cube[0][1] == 0 && cube.cube[0][3] == 0 && cube.cube[0][5] == 0 && cube.cube[0][7] == 0 &&
        cube.cube[1][1] == 1 && cube.cube[2][1] == 2 && cube.cube[3][1] == 3 && cube.cube[3][1] == 3){
            console.log(scr)
            return true
        }
    back_to_scramble(scr)
    return false
}

function solve_cross(scr){
    scr.forEach(move => {
        switch(move){
            case "R":
                R()
                break
            case "R'":
                Rp()
                break
            case "R2":
                R2()
                break
            case "L":
                L()
                break
            case "L'":
                Lp()
                break
            case "L2":
                L2()
                break
            case "U":
                U()
                break
            case "U'":
                Up()
                break
            case "U2":
                U2()
                break
            case "D":
                D()
                break
            case "D'":
                Dp()
                break
            case "D2":
                D2()
                break
            case "F":
                F()
                break
            case "F'":
                Fp()
                break
            case "F2":
                F2()
                break
            case "B":
                B()
                break
            case "B'":
                Bp()
                break
            case "B2":
                B2()
                break
            default:
                break
        }
    });
}