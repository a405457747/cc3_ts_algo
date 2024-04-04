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
    age: number;
    start() {
      this.age =3;

    }
    pp():void {
        console.log(this.age);
    }




    kkk(kk) {
        console.log(kk);
    }

    update(deltaTime: number) {

    }
}


