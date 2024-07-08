import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CarouselWrapper.css';
import { LeftArrow, RightArrow } from "../svg";

export default function CarouselWrapper ({ title, children, isPost }) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: isPost ? 2 : 4,
          partialVisibilityGutter: isPost ? 40 : 20
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: isPost ? 2 : 3,
          partialVisibilityGutter: isPost ? 40 : 20
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: isPost ? 1 : 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: isPost ? 1 : 1
        }
      };

      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group">
              <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >
                <LeftArrow />
              </button>
              <button onClick={() => next()}>
                <RightArrow />
              </button>
          </div>
        );
      };

    return (

        <div className="carousel-wrapper">
            { title ?
              <h2>
                { title }
              </h2>
            : null }
            <Carousel 
              {
                ...{
                  responsive : responsive,
                  infinite : true,
                  draggable : true,
                  renderButtonGroupOutside : true,
                  customButtonGroup : <ButtonGroup />,
                  partialVisbile : true,
                  showDots : true
                }
              }
            >
              { children }
            </Carousel>
        </div>

    );

}