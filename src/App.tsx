import React from 'react';
import './App.css';
import Header from "./components/Header";


function App() {
    return (
        <div className='app-wrapper'>
           <Header/>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className='content'>
                <div>
                    <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
                </div>
                <div className='avatar'>
                    <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt='avatar'/>
                    descrip
                </div>
                <div>
                    My Posts
                    <div>
                        new Post
                    </div>
                    <div>Post1</div>
                    <div>Post2</div>
                    <div>Post3</div>
                    <div>Post4</div>
                </div>
            </div>
        </div>
    );
}

export default App;
