import { _decorator, Component, Node, tween } from 'cc';
import { AA } from './AA';
const { ccclass, property } = _decorator;

@ccclass('AAB')
export class AAB extends Component {


    @property({type:AA})
    aa:AA|null=null;

    t:number=0;
    start() {
        console.log(this.aa)
        let t=this.aa;

        tween(this.node)
        .delay(3)
        .call(()=>{
            this.aa=null;
            console.log("zhi kong");
        })
        .delay(1)
        .call(()=>{
            this.aa =t;
        })
        .start();
    }

    update(deltaTime: number) {

    }
}

