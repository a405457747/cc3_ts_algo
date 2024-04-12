import { _decorator, Component, Node, AudioSource, Director } from 'cc';
const { ccclass, property } = _decorator;

enum Color {
    Red = 0,
    Blue,
    Yellow
}

interface IPerson {
    name: string,
    age: string,
    say: () => string,
}


interface nameList {
    [index: number]: string
}

@ccclass('Main')
export class MainGo extends Component {
 static    age: number = 0;

    aa = "ss";
    bb = "s";

    sy(a, b) {
        return true;
    }


    get AA(){
        return this.aa; 
    }

    set AA(val){
        this.aa=val;
    }

    kkk({a=3,b=4,c=5}){
        console.log(a,b,c);
    }


    start() {
        this.kkk({b:5});

    }

    gkk(x, y) {

        return { x, y }
    }

}


