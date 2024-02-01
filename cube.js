var cube = new Cube();

function R(){cube.R()}
function Rp(){cube.Rp()}
function R2(){
    cube.R()
    cube.R()
}
function L(){cube.L()}
function Lp(){cube.Lp()}
function L2(){
    cube.L()
    cube.L()
}
function U(){cube.U()}
function Up(){cube.Up()}
function U2(){
    cube.U()
    cube.U()
}
function D(){cube.D()}
function Dp(){cube.Dp()}
function D2(){
    cube.D()
    cube.D()
}
function F(){cube.F()}
function Fp(){cube.Fp()}
function F2(){
    cube.F()
    cube.F()
}
function B(){cube.B()}
function Bp(){cube.Bp()}
function B2(){
    cube.B()
    cube.B()
}
function reset(){
    cube = new Cube()
    cube.print()
}