import {_decorator, Component, Node, AudioSource} from 'cc';

const {ccclass, property} = _decorator;
import {algo} from "db://assets/algo/algo";

enum  Color {
    Red=0,
    Blue,
    Yellow
}

@ccclass('Main')
export class MainGo extends Component {
    static  age: number=0;
    start() {
        

    }

    addk(...data:number[]){

        data.forEach((item,i)=>{
            console.log(item,i);
        })

    }



   static  kkk(kk:number) {
        console.log(this);
    }

    update(deltaTime: number) {

    }
}


