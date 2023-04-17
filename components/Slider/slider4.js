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
import pao from "../../public/images/launchApp/paoverview_black.svg"
import os13k from "../../public/images/launchApp/os13k_black.svg"
import evolve from "../../public/images/launchApp/evolve_black.svg"
import lightbike from "../../public/images/launchApp/lightbike_black.svg"
export function Slider4(){
    return(
        <React.Fragment>
           


            <div style={{marginTop: "-100px"}}>
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
                    direction: 'rtl',
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
                    <div><Image src={liquidity} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://liquity.app.runonflux.io/" target="_blank" rel="noreferrer">Liquidity</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={docushield} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://docushield.app/" target="_blank" rel="noreferrer">Docushield</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={sifichain} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://sifchainfinance.app.runonflux.io/" target="_blank" rel="noreferrer">Sifchain</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={pao} alt="PAO"/></div>
                    <a className={styles.btn} href="https://paoverview.app.runonflux.io/" target="_blank" rel="noreferrer">PAOverview</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={yacy} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://yacy.app.runonflux.io/" target="_blank" rel="noreferrer">Yacy</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={bibliogram} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://bibliogram.app.runonflux.io/" target="_blank" rel="noreferrer">Bibliogram</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={libreddit} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://libreddit.app.runonflux.io/" target="_blank" rel="noreferrer">Libreddit</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={syncpaint} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://syncpaint.app.runonflux.io/" target="_blank" rel="noreferrer">Syncpaint</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={evolve} alt="evolve"/></div>
                    <a className={styles.btn} href="https://evolve.app.runonflux.io/" target="_blank" rel="noreferrer">Evolve</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={os13k} alt="OS13k"/></div>
                    <a className={styles.btn} href="https://os13k.app.runonflux.io/" target="_blank" rel="noreferrer">OS13k</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={lightbike} alt="lightbike"/></div>
                    <a className={styles.btn} href="https://lightbike.app.runonflux.io/" target="_blank" rel="noreferrer">Lightbike</a>
                    </div>
                </SplideSlide>
               
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={liquidity} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://liquity.app.runonflux.io/" target="_blank" rel="noreferrer">Liquidity</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={docushield} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://docushield.app/" target="_blank" rel="noreferrer">Docushield</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={sifichain} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://sifchainfinance.app.runonflux.io/" target="_blank" rel="noreferrer">Sifchain</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={pao} alt="PAO"/></div>
                    <a className={styles.btn} href="https://paoverview.app.runonflux.io/" target="_blank" rel="noreferrer">PAOverview</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={yacy} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://yacy.app.runonflux.io/" target="_blank" rel="noreferrer">Yacy</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={bibliogram} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://bibliogram.app.runonflux.io/" target="_blank" rel="noreferrer">Bibliogram</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={libreddit} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://libreddit.app.runonflux.io/" target="_blank" rel="noreferrer">Libreddit</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={syncpaint} alt="Image 1"/></div>
                    <a className={styles.btn} href="https://syncpaint.app.runonflux.io/" target="_blank" rel="noreferrer">Syncpaint</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={evolve} alt="evolve"/></div>
                    <a className={styles.btn} href="https://evolve.app.runonflux.io/" target="_blank" rel="noreferrer">Evolve</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={os13k} alt="OS13k"/></div>
                    <a className={styles.btn} href="https://os13k.app.runonflux.io/" target="_blank" rel="noreferrer">OS13k</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={lightbike} alt="lightbike"/></div>
                    <a className={styles.btn} href="https://lightbike.app.runonflux.io/" target="_blank" rel="noreferrer">Lightbike</a>
                    </div>
                </SplideSlide>
 
               
                </Splide>
                

            </div>
        </React.Fragment>
    )
}