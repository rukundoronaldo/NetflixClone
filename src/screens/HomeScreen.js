import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import Requests from '../app/fetcher/Requests'
import Row from '../Row'

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* nav */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Rows */}
            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={Requests.fetchActionMovies}
                isLargeRow={true}
            />
            <Row 
                title="Trending Now"
                fetchUrl={Requests.fetchTrending}
            />
            <Row 
                title="Top Rated"
                fetchUrl={Requests.fetchTopRated}
            />
            <Row 
                title="Action Movies"
                fetchUrl={Requests.fetchActionMovies}
            />
            <Row 
                title="Comedy Movies"
                fetchUrl={Requests.fetchComedyMovies}
            />
            <Row 
                title="Horror Movies"
                fetchUrl={Requests.fetchHorrorMovies}
            />
            <Row 
                title="Romance Movies"
                fetchUrl={Requests.fetchRomanceMovies}
            />
            <Row 
                title="Documentairies Movies"
                fetchUrl={Requests.fetchDocumentairiesMovies}
            />

        </div>
    )
}

export default HomeScreen
