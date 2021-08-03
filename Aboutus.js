import React from 'react'
import myImage from './P5171721.JPG'

export const Aboutus = () => {
    return (
        <div className='container'>
            <div class="row row-about">
                <div class="col col-about">
                    <img className="myImage" src={myImage} alt="" />
                </div>
                <div class="col col-about">
                    <h3 className='display-4'>About Me</h3>
                    <p>It all started around a kitchen table in 2008 for Founder, Kirsten Quigley. While raising her young family, she noticed how much waste was generated on a daily basis packing 20+ lunches a week and countless snacks on the go for classes, teams, and camps.
                        For the past 12+ years, 3GreenMoms®, a woman-owned company has been helping families and communities think and act greener by replacing 2.8 billion plastic bags with Lunchskins bags + over 2.6 million plastic straws.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
