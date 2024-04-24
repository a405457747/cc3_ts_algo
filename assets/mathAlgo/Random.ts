import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Random')
export class Random extends Component {
    static Range(min: number, max: number): number {
        let len: number = max - min;
        let v: number = Math.random() * len;
        let res: number = Math.floor(v);
        return res + min;
    }

    static Range2(min: number, max: number): number {
        let len: number = max - min;
        let v: number = Math.random() * len;

        return v + min;
    }

    static RandomItem(arr){
        let n =arr.length;
        let idx= Random.Range(0,n);
        return arr[idx];
    }
}


