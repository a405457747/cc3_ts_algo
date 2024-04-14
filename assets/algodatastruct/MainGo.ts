import { _decorator, Component, Node, AudioSource, Director } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('Main')
export class MainGo extends Component {

    
    protected start(): void {
       function kk(a,b){
        return a+b;
       }
        
       let  a=3;
        kk(a,5);
        a+=1;
        console.log(a);
    }
}


