import { _decorator, Component, Director, Node, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T2')
export class T2 extends Component {
    start() {
        
        this.a()
        .then((d)=>{
            console.log(d);
        })
        .then(this.b)
        .then((d)=>{
            console.log(d);
        });
     ;
    }

    a(){
        return new Promise((r,j)=>{
            setTimeout(()=>{
                //console.log("a over");
                r(33);
            },1000)
        });
    }
    b(){

        return new Promise((r,j)=>{
            setTimeout(()=>{
                //console.log("b over");
                r(44);
            },2000)
        });
    }
    c(){

        return new Promise((r,j)=>{
            setTimeout(()=>{
               // console.log("c over");
                r(55);
            },1000)
        });
    }

    gg(a: number,b: boolean): any{
        return a+Number(b);
    }

    update(deltaTime: number) {
        
    }
}


