import React from 'react';
import s from './Music.module.css'

const Music = () => {
    return (
        <div className={s.container}>
            <div className={s.iframeWrapper}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5qap5aO4i9A"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div className={s.iframeWrapper}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3oHhEx7voLs"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div className={s.iframeWrapper}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/36YnV9STBqc"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div className={s.iframeWrapper}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FZNyiWUPedA"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        </div>
    );
};

export default Music;