import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.css"
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";
import map from "../../public/images/map.svg"
import globeImg from "../../public/images/globe-alt.svg"
import arrowUp from "../../public/images/gree-yello-up.svg"
import ProgressBar from 'react-bootstrap/ProgressBar';
import nodes from "../../public/images/nodes.svg"
import ram from "../../public/images/ram.svg"
import cores from "../../public/images/cores.svg"
import ssd from "../../public/images/ssd.svg"
import web1 from "../../public/images/web1.svg"
import web2 from "../../public/images/pencil.svg"
import web3 from "../../public/images/key.svg"
import web1Icons from "../../public/images/Web 1.0 icons.svg"
import web2Icons from "../../public/images/Web 2.0 icons.svg"
import web3Icons from "../../public/images/Web 3.0 icons.svg"
import redundancy from "../../public/images/redundancy.svg"
import security from "../../public/images/security.svg"
import interoperability from "../../public/images/interoperability.svg"
import decentralization from "../../public/images/decentralization.svg"
import watchtower from "../../public/images/watchtower.svg"
import lowcost from "../../public/images/lowcost.svg"
import { Slider1 } from "../Slider/slider1";
import { CostCalculatorCard } from "../costCalculatorCard/costCalculatorCard";
import { Slider2 } from "../Slider/slider2";
import wordpressIcon from "../../public/images/wordpress.svg";
import fluxdriveIcon from "../../public/images/fluxdrive.svg";
import marketplaceIcon from "../../public/images/marketplace.svg";
import { Slider3 } from "../Slider/slider3";
import circleGraph from "../../public/images/images/circleGraph.svg"
import lineGraph from "../../public/images/images/lineGraph.svg"
import Line from "../../public/images/images/Line.svg"
import nvidia from "../../public/images/images/Nvidia.png"
import kaddex from "../../public/images/images/Kaddex.png"
import fio from "../../public/images/images/Fio.svg";
import axios from 'axios';
import { Slider4 } from "../Slider/slider4";
import Modal from 'react-bootstrap/Modal';
import wordpressImg from "../../public/images/flux-cloud-wordpress.svg"
import classNames from "classnames";
var partnerClasses = classNames(
    styles.partners,
    styles.center
);
var textPartnerClasses = classNames(
    styles.smallDesc,
    styles.uppercase,
    styles.bluetext,
    styles.bold
  );





export function Node(){
    const url = 'https://api.runonflux.io/daemon/getzelnodecount';



    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let thedata = data;
        let numofnodes = document.getElementById('danodes');
        numofnodes.innerHTML = `${thedata.data.total}`;
      })
      .catch(function(error) {
        console.log(error);
      });
  
    return(
        <main className={styles.main}>
            <section className={styles.headerimg}>
                <h1 className={styles.TitleText}><span className={styles.bluetext}>FluxNode</span> <br/>Infrastructure</h1>
                <h5 className={styles.SubText}>Support the Flux Cloud by running FluxNodes - by and for the people. The Flux Cloud is powered by thousands of FluxNodes connected from all around the globe, and the community is the backbone. By contributing their computational resources, individuals are incentivized accordingly.</h5>
                
                <div className={styles.buttons}>
                    <a id={styles.headerBut1}>Deploy Node</a>
                    <a id={styles.headerBut2}>Economics</a>
                </div>
                
                <div className={styles.nodes}>
                    <h3>Nodes</h3>
                    <h1 className={styles.blueDot}></h1>
                    <h2 id="danodes">...</h2>
                    <p className={styles.smallDesc}>Decentralized infrastructure nodes live.</p>
                </div>
            </section>

            <section className={partnerClasses}>
                <p className={textPartnerClasses}>offical  infrastructure partners</p>
                
                <div className={styles.partnersimg}>
                    <Slider1/>
                </div>
            </section>
            <section className={styles.infographs}>
                <h1 className={styles.TitleText}>Incentivized <span className={styles.bluetext}>Infrastructure</span></h1>
                <h5 className={styles.SubText}>The total block reward on the Flux blockchain is divided equally between POW miners and FluxNode operators for every block. In addition, there is a hierarchy among the different FluxNode tiers, with the most computationally heavy FluxNode entitled to the largest share of the initial 50% distribution reserved for FluxNode.</h5>
                
                <div className={styles.buttons}>
                    <a id={styles.headerBut2}>Dashboard</a>
                </div>
                <br/>
                <Image className={styles.circleGraph} src={circleGraph}/>
                <Image className={styles.lineGraph} src={lineGraph}/>
            </section>
            {/* <section class="info-Hierarchy">
                <h1 class="TitleText"><span class="blue-text">FluxNode</span><br/> Hiearchy</h1>
                <h5 class="SubText">To ensure the Flux Cloud network functions optimally, multiple tiers of FluxNodes are available for deployment, each with specific collateral and hardware requirements. <br/><br/> Interested parties are encouraged to review the economic models associated with each tier through the dashboard to make informed decisions. The dashboard provides a comprehensive overview of the technical and financial parameters of each FluxNode tier, enabling informed selection.</h5>
                
                <div class="buttons">
                    <a id="headerBut2">Economics</a>
                </div>
                
                <div class="divContainer">
                    <div class="doubleDiv bold">
                    <div class="Reqs"><span class="darker">Hardware Requirements</span><br/> 2 Cores <br/> 4 Threads <br/> 8 GB RAM<br/> 220 GB SSD/NVME <br/> 180 MB/s DWS <br/> 240 EPS Min. Requirements <br/> 25 Mb down/up speed<br/><span class="darker">VPS and ARM64 compatible</span></div>
                    
                    <div class="Node"><span class="light-blue-text">Cumulus Node</span><br/>1000 FLUX</div>

                    <div class="Reward"><span class="blue-text">Deterministic Block Reward</span><span class="light-blue-text right">7.5%</span></div>
                    </div>
                    <Image src={Line}/>
                    <div style="margin-left:4.85%;" class="doubleDiv bold">
                    <div class="Reqs"><span class="darker">Hardware Requirements</span><br/> 2 Cores <br/> 4 Threads <br/> 8 GB RAM<br/> <span class="blue-text">∞+</span> GB SSD/NVME <br/> 180 MB/s DWS <br/> 240 EPS Min. Requirements <br/> 25 Mb down/up speed<br/><span class="darker">VPS and ARM64 compatible</span></div>
                    
                    <div class="Node"><span class="light-blue-text">Cumulus Fractus</span><br/>ADD-ON</div>

                    <div class="Reward"><span class="blue-text">Extra reward for storage</span><span class="light-blue-text right">15%</span></div>
                    </div>
                </div>
                
                <div class="divContainer">
                    <div class="doubleDiv bold">
                    <div class="Reqs"><span class="darker">Hardware Requirements</span><br/> 2 Cores <br/> 4 Threads <br/> 8 GB RAM<br/> 220 GB SSD/NVME <br/> 180 MB/s DWS <br/> 240 EPS Min. Requirements <br/> 25 Mb down/up speed<br/><span class="darker">VPS and ARM64 compatible</span></div>
                    
                    <div class="Node"><span class="light-blue-text">Cumulus Node</span><br/>1000 FLUX</div>

                    <div class="Reward"><span class="blue-text">Deterministic Block Reward</span><span class="light-blue-text right">7.5%</span></div>
                    </div>
                    <Image src={Line}/>
                    <div style="margin-left:4.85%;" class="doubleDiv bold">
                    <div class="Placeholder">
                        Nimbus Fractus <br/> TBA
                    </div>
                    </div>
                </div>
                
                <div class="divContainer">
                    <div class="doubleDiv bold">
                    <div class="Reqs"><span class="darker">Hardware Requirements</span><br/> 2 Cores <br/> 4 Threads <br/> 8 GB RAM<br/> 220 GB SSD/NVME <br/> 180 MB/s DWS <br/> 240 EPS Min. Requirements <br/> 25 Mb down/up speed<br/><span class="darker">VPS and ARM64 compatible</span></div>
                    
                    <div class="Node"><span class="light-blue-text">Stratus Node</span><br/>1000 FLUX</div>

                    <div class="Reward"><span class="blue-text">Deterministic Block Reward</span><span class="light-blue-text right">7.5%</span></div>
                    </div>
                    <Image src={Line}/>
                    <div style="margin-left:4.85%;" class="doubleDiv bold">
                    <div class="Placeholder">
                        Stratus Fractus <br/> TBA
                    </div>
                    </div>
                </div>
                <div class="doubleDiv bold right" style="margin-top:5%">
                    <div class="Reqs"><span class="darker">Hardware Requirements</span><br/> 2 Cores <br/> 4 Threads <br/> 8 GB RAM<br/> 220 GB SSD/NVME <br/> 180 MB/s DWS <br/> 240 EPS Min. Requirements <br/> 25 Mb down/up speed<br/><span class="darker">VPS and ARM64 compatible</span></div>
                    
                    <div class="Node"><span class="light-blue-text">Titan Staking</span><br/>From 50 Flux</div>

                    <div style="margin-left:13%" class="btnTrans">Titan Staking</div>
                </div>
                <h1 class="TitleText" style="padding-top:0%;"><span class="blue-text">Staking</span> Nodes</h1>
                <h5 class="SubText stakingSub" style="">The minimum collateral requirement for the base FluxNode tier may not be feasible for all participants. In such scenarios therefore, alternative support mechanisms such as the Titan modulus have been developed to provide viable options for network participation.</h5>
                <br/>
                <h5 class="SubText list">The Titan nodes will enable users to pool their resources to run enterprise-level hardware, thereby exposing them to a new customer set.</h5>
            </section> */}
        </main>
    );
}