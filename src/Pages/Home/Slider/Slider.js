import { Carousel } from 'flowbite-react';
import React from 'react';
import img1 from '../../../image/banner/1.png'
import img2 from '../../../image/banner/2.png'
import img3 from '../../../image/banner/3.png'
import img4 from '../../../image/banner/4.png'

const Slider = () => {
    return (
        <div>
            <div className="h-56 sm:h-96 xl:h-100 2xl:h-100 my-4">
                <Carousel>
                    <img
                        src={img1}
                        alt="banner img"
                    />
                    <img
                        src={img2}
                        alt="banner img"
                    />
                    <img
                        src={img3}
                        alt="banner img"
                    />
                    <img
                        src={img4}
                        alt="banner img"
                    />
                   
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;