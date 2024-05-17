import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

interface A {

    kk:string|number
}

interface B {
    wk:()=>void;
}

@ccclass('T')
export class T extends Component {

    b(){
        console.log(this.b.caller);
    }

    a(){
        this.b();
    }

    start() {
  
        this.a();
    }   

    update(deltaTime: number) {
        
    }
}


