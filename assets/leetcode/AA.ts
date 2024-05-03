import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AA')
export class AA extends Component {
    @property 
    kk:boolean=true;
    _timer:number =0;
    start() {

    }

    update(deltaTime: number) {
        this._timer+=deltaTime;
        console.log(this._timer);
        if(this._timer>=10){
            this.kk=!this.kk;
            this._timer=0;
        }
    }
}

