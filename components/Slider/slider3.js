import React from "react";
import styles from "./index.module.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import Image from "next/image";

import keep from  "../../public/images/launchApp/keep.svg";
import yearn from "../../public/images/launchApp/yearn.svg";
import osmosis from "../../public/images/launchApp/osmosis.svg";
import aave from "../../public/images/launchApp/aave-aave-logo.svg";
import sifichain from "../../public/images/launchApp/sifichain.svg";
import docushield from "../../public/images/launchApp/docushield.png";
import ergo from "../../public/images/launchApp/ergoauctions.png";
import haven from "../../public/images/launchApp/haven-protocol-xhv-logo.svg";
import kdSwap from "../../public/images/launchApp/kds-logo.svg";
import libreddit from "../../public/images/launchApp/libreddit.png";
import liquidity from "../../public/images/launchApp/liquity-developer-ui.svg";
import gmx from "../../public/images/launchApp/logo_GMX_small.f593fa5c.svg";
import bibliogram from "../../public/images/launchApp/logo-bibliogram.png";
import keep3r from "../../public/images/launchApp/Path-11846.png";
import timpi from "../../public/images/launchApp/Profile-Pic@1x.png";
import sushiSwap from "../../public/images/launchApp/sushiswap-sushi-logo.svg";
import syncpaint from "../../public/images/launchApp/syncpaint.png";
import yacy from "../../public/images/launchApp/YaCyLogo2011.svg";
import kdLaunch from "../../public/images/launchApp/kds-logo.svg";


export function Slider3(){
    return(
        <React.Fragment>
            <Splide aria-label="My Favorite Images"
                  options={{
                    // perPage: 5.5,
                    fixedWidth: "10rem",
                    pagination: false,
                    arrows: 0,
                    autoplay: true,
                    rewind: true,
                    rewindSpeed: 20000,
                    speed: 20000,
                    gap: "5rem",
                    perMove: 1,
                    direction: 'ltr',
                    breakpoints: {
                      

                        // 1371:{
                        //     perPage: 5.5,
                           
                        // },
                       
                        // 1300:{
                        //     perPage: 4.5,
                           
                        // },
                        // 1100:{
                        //     perPage: 4,
                           
                        // },
                        991.98: {
                            gap: "2rem"
                          },
                          767.98: {
                            gap: "2rem"
                          },
                          640: {
                            gap: "2rem"
                        },
                          575.98: {
                           gap: "2rem"
                          },
                    },
                     
                }}
            >
                
              
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={keep} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://keepnetwork.app.runonflux.io/" target="_blank" rel="noreferrer">Keep</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={timpi} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://timpisearch.app.runonflux.io/" target="_blank" rel="noreferrer">Timpi</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={yearn} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://yearn.app.runonflux.io/" target="_blank" rel="noreferrer">Yearn</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={osmosis} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://osmosis.app.runonflux.io/" target="_blank" rel="noreferrer">Osmosis</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={sushiSwap} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://sushi.app.runonflux.io/" target="_blank" rel="noreferrer">SushiSwap</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={kdLaunch} alt="KDLaunch"/></div>
                    <a className={styles.btn} href="https://kdlaunch.app.runonflux.io/" target="_blank" rel="noreferrer">KDLaunch</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={kdSwap} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://kdswap.app.runonflux.io/" target="_blank" rel="noreferrer">KDSwap</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={gmx} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://gmx.app.runonflux.io/#/" target="_blank" rel="noreferrer">GMX exchange</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={ergo} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://ergoauctions.app.runonflux.io/" target="_blank" rel="noreferrer">Ergo Auctions</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={aave} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://aave.app.runonflux.io/" target="_blank" rel="noreferrer">AAVE</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={haven} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://havenvaultmainnet.app.runonflux.io/" target="_blank" rel="noreferrer">Haven</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={keep3r} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://keep3r.app.runonflux.io/" target="_blank" rel="noreferrer">Keep3r</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={keep} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://keepnetwork.app.runonflux.io/" target="_blank" rel="noreferrer">Keep</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={timpi} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://timpisearch.app.runonflux.io/" target="_blank" rel="noreferrer">Timpi</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={yearn} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://yearn.app.runonflux.io/" target="_blank" rel="noreferrer">Yearn</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={osmosis} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://osmosis.app.runonflux.io/" target="_blank" rel="noreferrer">Osmosis</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={sushiSwap} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://sushi.app.runonflux.io/" target="_blank" rel="noreferrer">SushiSwap</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={kdLaunch} alt="KDLaunch"/></div>
                    <a className={styles.btn} href="https://kdlaunch.app.runonflux.io/" target="_blank" rel="noreferrer">KDLaunch</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={kdSwap} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://kdswap.app.runonflux.io/" target="_blank" rel="noreferrer">KDSwap</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={gmx} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://gmx.app.runonflux.io/#/" target="_blank" rel="noreferrer">GMX exchange</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={ergo} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://ergoauctions.app.runonflux.io/" target="_blank" rel="noreferrer">Ergo Auctions</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={aave} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://aave.app.runonflux.io/" target="_blank" rel="noreferrer">AAVE</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={haven} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://havenvaultmainnet.app.runonflux.io/" target="_blank" rel="noreferrer">Haven</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={keep3r} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://keep3r.app.runonflux.io/" target="_blank" rel="noreferrer">Keep3r</a>
                    </div>
                </SplideSlide>
                
               
               
 
                             
 
               
                </Splide>
                


                </React.Fragment>
    )
}