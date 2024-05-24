import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Vector3')
export class Vector3 extends Component {
   

    static ValEqual(v1:Vec3,v2:Vec3):boolean{
        return (v1.x===v2.x)&&(v1.y===v2.y)&&(v1.z===v2.z);
    }
}


