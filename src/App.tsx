import './App.css'
import {Header} from "./components/Header/Header";


export const App = () => {

    return (
        <div className='app'>
            <Header/>

            <main className={'main'}>main</main>
            <footer className={'footer'}>footer</footer>
        </div>
    )
}

