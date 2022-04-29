let t = 0;
let w = new Array(8);
let cw = 0;
//inicializo la variable w en 0 en todas las posiciones posibles (tira error check si lo saco)
for(i=0;i<9;i++){
    w[i]=0;
}
//compruebo que este libre la posicion que intenta ingresar el jugador
function libre(pos){
    if (w[pos]==0){
        return true;
    }
    return false;
}
//si la posicion esta libre, dependiendo si la t es 1 o 0 (juega jugador 1 o 2)
function marcada(obj,pos) {
    if(libre(pos)){
    //cambio el color del cuadro (dependiendo si es jugador 1 o 2), indico que el proximo en jugar es el otro jugador, establesco que la posicion esta ocupada, verifico si se ha hecho tateti con la funcion w y por ultimo checkeo que no haya empate
        if(t == 0){
            obj.style.backgroundColor = "#FF0000";
            t = 1;
            w[pos]=1;
            win("r");
        } else {
            obj.style.backgroundColor = "#00FF00";
            t = 0;
            w[pos]=2;
            win("g");   
        }
    }
    check();
}
function win(color){
    if(color=="r"){
        if ((w[0]==1 && w[1]==1 && w[2]==1) || (w[3]==1 && w[4]==1 && w[5]==1) || (w[6]==1 && w[7]==1 && w[8]==1) || (w[0]==1 && w[3]==1 && w[6]==1) || (w[1]==1 && w[4]==1 && w[7]==1) || (w[2]==1 && w[5]==1 && w[8]==1) || (w[0]==1 && w[4]==1 && w[8]==1) || (w[2]==1 && w[4]==1 && w[6]==1)){
            alert("Gano el jugador rojo");
            location.reload();
            cw=1
        }
    } else {
        if ((w[0]==2 && w[1]==2 && w[2]==2) || (w[3]==2 && w[4]==2 && w[5]==2) || (w[6]==2 && w[7]==2 && w[8]==2) || (w[0]==2 && w[3]==2 && w[6]==2) || (w[1]==2 && w[4]==2 && w[7]==2) || (w[2]==2 && w[5]==2 && w[8]==2) || (w[0]==2 && w[4]==2 && w[8]==2) || (w[2]==2 && w[4]==2 && w[6]==2)){
            alert("Gano el jugador verde");
            location.reload();
            cw=1
        }
    }
}
function check(){
    var check=0;
    for(i=0;i<9;i++){
        if(w[i]==0){
            check+=1;
        }
    }
    if (check==0){
        if (cw==0){
            alert("Empate");
            location.reload();
        }
    }
}
