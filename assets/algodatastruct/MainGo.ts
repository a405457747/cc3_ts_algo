import { _decorator, Component, Node, AudioSource, Director } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('Main')
export class MainGo extends Component {

    
   add(arr:number[]):number {
    let res=0;
    for(let item of arr){
        res+=item;
    }
    return res;
   }

    protected start(): void {

        let k=[3,4,5];
        console.log(this.add(k))
    }
}


