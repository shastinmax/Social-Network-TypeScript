
type Route={
    path:string
    title:string
    key:number
}

export const routes:Array<Route>=[
    {key:1,path:'/profile',title:'Profile'},
    {key:2,path:'/message',title:'Message'},
    {key:3,path:'/news',title:'News'},
    {key:4,path:'/music',title:'Music'},
    {key:5,path:'/settings',title:'Settings'}]