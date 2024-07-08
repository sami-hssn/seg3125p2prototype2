import NavBar from "../components/navbar/NavBar";
import PostCard from "../components/postcard/PostCard";
import '../styles/index.css'

function TutorialsPage(){
    return(
        <div className="page tutorial-page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <h2>
                        Getting Started
                    </h2>
                    <PostCard 
                        {
                            ...{
                                title : "Post title",
                                description: "Post Description",
                                linkObj : {
                                    title: "Link",
                                    link: "/"
                                },
                                padding : false
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
                    <PostCard 
                        {
                            ...{
                                title : "Post title 3",
                                description: "Post Description 3",
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
                                title : "Post title 4",
                                description: "Post Description 4",
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

export default TutorialsPage;