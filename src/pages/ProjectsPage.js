import CarouselWrapper from "../components/carouselwrapper/CarouselWrapper";
import NavBar from "../components/navbar/NavBar";
import PostCard from "../components/postcard/PostCard";
import ProjectCard from "../components/projectcard/ProjectCard";
import SearchBar from "../components/search/SearchBar";
import '../styles/index.css'

function ProjectsPage(){
    return(
        <div className="page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <SearchBar title="Search for a post" />
                    <CarouselWrapper title="Latest Projects" isPost={ true }>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </CarouselWrapper>
                    <PostCard 
                        {
                            ...{
                                title : "Post title",
                                description: "Post Description",
                                linkObj : {
                                    title: "Link",
                                    link: "/"
                                },
                                padding : true
                            }
                        }
                    />
                    <PostCard 
                        {
                            ...{
                                title : "Post title 2",
                                description: "Post Description 2",
                                linkObj : {
                                    title: "Link",
                                    link: "/"
                                },
                                padding : true
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;