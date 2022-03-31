import { UserType} from "../redux/users-reducer";


export let updateObjectInArray = (items:Array<UserType>,itemId:number,newObjProps:any) => items.map(u => u.id === itemId ? {...u, ...newObjProps} : u)