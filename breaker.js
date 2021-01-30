let a = 1
let b = 2
let c = 3
let d = 4

function set(n1,n2,n3,n4){
    a = n1; b = n2; c = n3; d = n4;
}

function evaluate(n1,n2,n3,n4) {
    if(n1==a & n2==b & n3==c & n4==d){
        return "X X X X";
    }else if(n1==a & n2==b & n3==c){
        return "X X X";
    }else if(n1==a & n2==b){
        return "X X";
    }else if(n1==a){
        return "X";

    }else if((n1 == b | n1 == c | n1 == d) & (n2 == a | n2==c | n2==d) & (n3==a | n3==b | n3==d) & (n4==a | n4==b | n4==c)){
        return "_ _ _ _";
    }else if((n1 == b | n1 == c | n1 == d) & (n2 == a | n2==c | n2==d) & (n3==a | n3==b | n3==d)){
        return "_ _ _";
    }else if((n1 == b | n1 == c | n1 == d) & (n2 == a | n2==c | n2==d)){
        return "_ _";
    }else if((n1 == b | n1 == c | n1 == d)){
        return "_";
    }
    else{
        return "";
    }  
}

module.exports = {set, evaluate};
