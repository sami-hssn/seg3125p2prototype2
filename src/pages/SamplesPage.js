import CarouselWrapper from "../components/carouselwrapper/CarouselWrapper";
import Feature from "../components/feature/Feature";
import FeatureTwo from "../components/featuretwo/FeatureTwo";
import NavBar from "../components/navbar/NavBar";
import SearchBar from "../components/search/SearchBar";
import '../styles/index.css'

function SamplesPage(){
    return(
        <div className="page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <SearchBar title="Discover samples for your music" />
                    <CarouselWrapper title="New releases">
                        <Feature />
                        <Feature />
                        <Feature />
                        <Feature />
                    </CarouselWrapper>
                    <CarouselWrapper title="Trending">
                        <Feature />
                        <Feature />
                        <Feature />
                        <Feature />
                    </CarouselWrapper>
                    <FeatureTwo 
                        {
                            ...{
                                featuresArr : [
                                    {
                                        link : '/'
                                    },
                                    {
                                        link : '/'
                                    },
                                    {
                                        link : '/'
                                    },
                                    {
                                        link : '/'
                                    },
                                    {
                                        link : '/'
                                    },
                                    {
                                        link : '/'
                                    }
                                ]
                            }
                        }
                    />
                    <CarouselWrapper title="Loops">
                        <Feature />
                        <Feature />
                        <Feature />
                        <Feature />
                    </CarouselWrapper>
                    <CarouselWrapper title="Drum Kits">
                        <Feature />
                        <Feature />
                        <Feature />
                        <Feature />
                    </CarouselWrapper>
                    <CarouselWrapper title="Synths">
                        <Feature />
                        <Feature />
                        <Feature />
                        <Feature />
                    </CarouselWrapper>
                </div>
            </div>
        </div>
    );
}

export default SamplesPage;