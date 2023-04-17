import React from "react";
import styles from "./index.module.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import Image from "next/image";

import partner1 from "../../public/images/partners/partner1.svg"
import partner2 from "../../public/images/partners/partner2.svg"
import partner3 from "../../public/images/partners/partner3.svg"
import partner4 from "../../public/images/partners/partner4.svg"
import partner5 from "../../public/images/partners/partner5.svg"
import partner6 from "../../public/images/partners/partner6.svg"
import partner7 from "../../public/images/partners/partner7.svg"
import partner8 from "../../public/images/partners/partner8.svg"
import partner9 from "../../public/images/partners/partner9.svg"
import partner10 from "../../public/images/partners/partner10.svg"
import partner11 from "../../public/images/partners/partner11.svg"
import partner12 from "../../public/images/partners/partner12.svg"
import partner13 from "../../public/images/partners/partner13.svg"
import partner14 from "../../public/images/partners/partner14.svg"
import partner15 from "../../public/images/partners/partner15.svg"
import partner16 from "../../public/images/partners/partner16.svg"
import partner17 from "../../public/images/partners/partner17.svg"
import partner18 from "../../public/images/partners/partner18.svg"
import partner19 from "../../public/images/partners/partner19.svg"
import partner20 from "../../public/images/partners/partner20.svg"
import partner21 from "../../public/images/partners/partner21.svg"
import partner22 from "../../public/images/partners/partner22.svg"
import partner23 from "../../public/images/partners/partner23.svg"

export function Slider1(){
    return(
        <React.Fragment>
            <Splide aria-label="My Favorite Images"
            className={styles.splider1}
                  options={{
                    // perPage: 8,
                   
                    pagination: false,
                    arrows: 0,
                    autoplay: true,
                    perMove: 1,
                    gap: "0rem",
                    fixedWidth: "10rem",
                    rewind: true,
                    rewindSpeed: 20000,
                    speed: 20000,

                    breakpoints: {
                      

                        // 1371:{
                        //     perPage: 7,
                           
                        // },
                       
                        // 1300:{
                        //     perPage: 6,
                           
                        // },
                        // 1100:{
                        //     perPage: 5,
                           
                        // },
                        991.98: {
                            gap: "0rem",
                            fixedWidth: "8rem",
                          },
                          767.98: {
                            gap: "0rem",
                            fixedWidth: "6rem",
                          },
                          640: {
                            gap: "0rem",
                            fixedWidth: "4rem",
                        },
                          575.98: {
                           gap: "0rem",
                           fixedWidth: "3rem",
                          },
                     },
                     
                }}
            >
                  <SplideSlide className={styles.splider}>
                    <div className={styles.partnerImg}>
                    <Image src={partner1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                    <div className={styles.partnerImg}>
                    <Image src={partner2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner8} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner9} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner10} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner11} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner12} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner13} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner14} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner15} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                    <div className={styles.partnerImg}>
                    <Image src={partner16} alt="Image 1"/>
                    </div>
                </SplideSlide>
              
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner17} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner18} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={partner19} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                    <div className={styles.partnerImg}>
                    <Image src={partner20} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                    <div className={styles.partnerImg}>
                    <Image src={partner21} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                    <div className={styles.partnerImg}>
                    <Image src={partner22} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                    <div className={styles.partnerImg}>
                    <Image src={partner23} alt="Image 1"/>
                    </div>
                </SplideSlide>
            </Splide>
        </React.Fragment>
    )
}