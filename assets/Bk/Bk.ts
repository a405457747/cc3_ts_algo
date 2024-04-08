import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bk')
export class Bk extends Component {
    start() {

        this.node.on("click",()=>{
            console.log("点击了");
        })

    }

    update(deltaTime: number) {
        //console.log(deltaTime);
    }

   static  add(a,b){
        return a+b;
    }
}


