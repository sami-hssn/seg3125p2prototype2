import NavBar from "../components/navbar/NavBar";
import { LargeBunny } from "../components/svg";
import '../styles/index.css'

function HomePage(){
    return(
        <div className="page home-page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <div className="inner-wrapper">
                        <h2 className="text-center">
                            audio.fm
                        </h2>
                        <p className="text-center text-bold text-secondary">
                            For artists. By artists.
                        </p>
                        <p className="text-center">
                        A collaborative online platform for musicians, producers, and music enthusiasts to create, share, and discover music together.
                        </p>
                        <div className="large-image-container">
                            <LargeBunny />
                        </div>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;