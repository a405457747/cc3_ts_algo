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

        let a =[1,2,3,4,5];
        let b =[3,4,5];
         a.splice(1,0,6666);
         console.log(a);
        console.log(a);

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


