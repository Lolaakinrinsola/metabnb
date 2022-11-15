import {Nav} from './Nav';
import {Main} from './Main';
import {Footer} from './Footer';

export function HomePage(){
    return(
        <div className='body' >
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}