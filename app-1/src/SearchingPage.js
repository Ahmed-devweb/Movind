import React,{ useEffect} from 'react'
import Header from './Header'
import Filter from './Filter'
import Footer from './Footer'


function SearchingPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
        return 
    }, [])
    return (
        <div className='animation_fade'>
            <Header headerlinkname={"Retour a l'accueil"} headerlink={"/"} />
            <Filter />
            <Footer />
        </div>
    )
}

export default SearchingPage
