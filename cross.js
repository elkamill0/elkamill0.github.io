function find_cross(){
    if (cube.cube[5][1] == 0 && cube.cube[5][3] == 0 && cube.cube[5][5] == 0 && cube.cube[5][7] == 0 &&
        cube.cube[1][7] == 1 && cube.cube[2][7] == 4 && cube.cube[3][7] == 3 && cube.cube[4][7] == 2){
            return true
        }
    return false
}