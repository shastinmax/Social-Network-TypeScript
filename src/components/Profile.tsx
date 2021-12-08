import React from "react";
import s from './Profile.module.css'

export const Profile=()=>{
    return(
        <div className={s.content}>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div className={s.avatar}>
                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                     alt='avatar'/>
                descrip
            </div>
            <div>
                My Posts
                <div>
                    new Post
                </div>
                <div className={s.item}>Post1</div>
                <div className={s.item}>Post2</div>
                <div className={s.item}>Post3</div>
                <div className={s.item}>Post4</div>
            </div>
        </div>
    )
}
