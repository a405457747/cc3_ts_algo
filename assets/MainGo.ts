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
    age: number=0;
    start() {


    }

    swap(arr:number[],a:number,b:number) {
        let t =arr[a];
        arr[a]=arr[b];
        arr[b]=t;
    }

    pp() {
       return 3;
    }




    kkk(kk:number) {
        console.log(kk);
    }

    update(deltaTime: number) {

    }
}


