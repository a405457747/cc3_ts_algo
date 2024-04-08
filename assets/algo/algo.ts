import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


import { Bk } from '../Bk/Bk';

let print =console.log;

@ccclass('algo')
export class algo extends Component {
    start() {
     let gg=  Bk.add(3,2);
      print("bk",gg,gg,true,{"a":33,b:44});
    }

    update(deltaTime: number) {
        
    }

    static  ChijiWangzi(){
        console.log("Chiji");
    }
}


