document.getElementById("record").innerHTML = localStorage.getItem("rec");
document.getElementById("recordd").innerHTML = localStorage.getItem("rec");
document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W' || event.key === 'ц' || event.key === 'Ц') {
        if(upb){
            clearInterval(intervalId);
            intervalId = setInterval(up, speed);
            downb = false;
            rightb = true;
            leftb = true;}
    } else if (event.key === 'a' || event.key === 'A' || event.key === 'ф' || event.key === 'Ф') {
        if(leftb){
            clearInterval(intervalId);
            intervalId = setInterval(left, speed);
            rightb = false;
            upb = true;
            downb = true;}
    } else if (event.key === 's' || event.key === 'S' || event.key === 'ы' || event.key === 'Ы') {
        if(downb){
            clearInterval(intervalId);
            intervalId = setInterval(down, speed);
            upb = false;
            rightb = true;
            leftb = true;}
    } else if (event.key === 'd' || event.key === 'D' || event.key === 'в' || event.key === 'В') {
        if(rightb){
            clearInterval(intervalId);
            intervalId = setInterval(right, speed);
            leftb = false;
            upb = true;
            downb = true;
}}});
//------------------------------------------------------------------
const dialog = document.querySelector("dialog");
const array_snake = [];
let speed = 300;
let intervalId;
let downb = true,rightb = true,upb = false,leftb = false;
let ax = 2;
let eat_snk;
let arr_snake_num = -4;
let pos_id_one = 0;
let pos_id_two = 1;
let record = 3,score = 3;
//------------------------------------------------------------------
function down() {
    pos_id_one = cond_block_down_right(pos_id_one);
    pos_id_one++;
    colored_lime(pos_id_one , pos_id_two);
    array_snake_delete(array_snake,pos_id_one,pos_id_two);
}
function right() {
    pos_id_two = cond_block_down_right(pos_id_two);
    pos_id_two++;
    colored_lime(pos_id_one , pos_id_two);
    array_snake_delete(array_snake,pos_id_one,pos_id_two);
}
//------------------------------------------------------------------
function left() {
    pos_id_two = cond_block_up_left(pos_id_two);
    pos_id_two--;
    colored_lime(pos_id_one , pos_id_two);
    array_snake_delete(array_snake,pos_id_one,pos_id_two);
}
function up() {
    pos_id_one = cond_block_up_left(pos_id_one);
    pos_id_one--;
    colored_lime(pos_id_one , pos_id_two);
    array_snake_delete(array_snake,pos_id_one,pos_id_two);
}
//------------------------------------------------------------------
const array_snake_delete = (arr_num,a,b) => {
    arr_snake_num++;
    arr_num.push(a + String(b));
    splice_array(arr_num , arr_snake_num);
    if(arr_num.length >= 3){head_detect(arr_snake_num,arr_num);delete arr_num[arr_snake_num];}
    cond_head_snake(arr_num[arr_num.length-1]);

}
//------------------------------------------------------------------
function head_detect(num,arr){
    console.log(localStorage.getItem("rec"))
    while(num <= arr.length-3){
        if(arr[arr.length-1] === arr[num+1] || arr[arr.length-1] === arr[num] ){dialog.showModal();}
        cond_eat_of_snake(arr[num+1])
        num++;
    }
}
//------------------------------------------------------------------
function rec_write(){
    document.getElementById("score").innerHTML = score;
    document.getElementById("record").innerHTML = localStorage.getItem("rec");
    document.getElementById("scoree").innerHTML = score;
    document.getElementById("recordd").innerHTML = localStorage.getItem("rec");
}
//------------------------------------------------------------------
//удаленние части массива и colored_white
const splice_array = (arr_num , arr_snake_num) => {colored_white(arr_num[arr_snake_num]);}
const cond_rec =()=>{  if(score > localStorage.getItem("rec")){record = score;localStorage.setItem('rec', record);}  }
//перекрашивание прошлые/новые части змеи
const colored_lime = (a, b) =>{return document.getElementById(a + String(b)).style.background = "lime";}
const colored_white = (a) =>{if(document.getElementById(a)){document.getElementById(a).style.background = "rgb(236,236,236)";}else{return;}}
//блоки с условием (перенос змеи ,если та в нее зашла)
const cond_block_down_right=(a)=>{if(a >= 9){return 0}return a}
const cond_block_up_left =(a) =>{if(1 == a){return 10}return a}
//еда
const eat =()=>{eat_snk = Math.floor(Math.random() * 9 + 1) + String(Math.floor(Math.random() * 9 + 1)); return eat_snk;}
const eat_color =()=>{document.getElementById(eat()).style.background = "red";}
//ням
const cond_head_snake = (a) =>{if(a == eat_snk){eat_color();arr_snake_num--;score++;cond_rec();rec_write()}}
const cond_eat_of_snake = (a) =>{if(a == eat_snk){colored_lime(eat_snk,"");eat_color();}}



//------------------------------------------------------------------
eat_color();
// score.innerHTML = scorell;
// rec.innerHTML = localStorage.getItem('r');
