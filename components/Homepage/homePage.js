/* eslint-disable react/no-unescaped-entities */
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
import dropletIcon from "../../public/images/droplet.svg";
import { Slider3 } from "../Slider/slider3";
import ASIC from "../../public/images/greenIcons/ASIC.svg"
import POUW from "../../public/images/greenIcons/pouw.svg"
import cloud from "../../public/images/greenIcons/cloud.svg"
import climate from "../../public/images/greenIcons/climate.svg"
import dollar from "../../public/images/greenIcons/dollar$.svg"
import axios from 'axios';
import { Slider4 } from "../Slider/slider4";
import Modal from 'react-bootstrap/Modal';
import wordpressImg from "../../public/images/flux-cloud-wordpress.svg"


export function HomePage(){

    const [totalNodes, setTotalNodes] = useState('loading...');
    const [totalCores, setTotalCores] = useState('loading...');
    const [totalRAM, setTotalRAM] = useState('loading...');
    const [totalSSD, setTotalSSD] = useState('loading...');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(
              "https://stats.runonflux.io/fluxinfo?projection=tier,benchmark"
            );
          
            if (request.data) {
              const nodes = request.data.data;
              let vcores = 0;
              let ssd = 0;
              let hdd = 0;
              let ram = 0;
              nodes.forEach((node) => {
                if (node.tier === "CUMULUS" && node.benchmark && node.benchmark.bench) {
                  let bm = node.benchmark.bench;
                  vcores += bm.cores === 0 ? 2 : bm.cores;
                  ram += bm.ram < 4 ? 4 : Math.round(bm.ram);
                  ssd += bm.ssd;
                  hdd += bm.hdd;
                } else if (node.tier === "CUMULUS") {
                  vcores += 2;
                  ram += 4;
                  hdd += 50;
                } else if (
                  node.tier === "NIMBUS" &&
                  node.benchmark &&
                  node.benchmark.bench
                ) {
                  let bm = node.benchmark.bench;
                  vcores += bm.cores === 0 ? 4 : bm.cores;
                  ram += bm.ram < 8 ? 8 : Math.round(bm.ram);
                  ssd += bm.ssd;
                  hdd += bm.hdd;
                } else if (node.tier === "NIMBUS") {
                  vcores += 4;
                  ram += 8;
                  ssd += 150;
                } else if (
                  node.tier === "STRATUS" &&
                  node.benchmark &&
                  node.benchmark.bench
                ) {
                  let bm = node.benchmark.bench;
                  vcores += bm.cores === 0 ? 8 : bm.cores;
                  ram += bm.ram < 32 ? 32 : Math.round(bm.ram);
                  ssd += bm.ssd;
                  hdd += bm.hdd;
                } else if (node.tier === "STRATUS") {
                  vcores += 8;
                  ram += 32;
                  ssd += 600;
                }
              });
            
              setTotalNodes(nodes.length.toLocaleString());
              setTotalCores(vcores.toLocaleString());
              setTotalRAM((ram/1000).toFixed(2) + " " + "TB");
              setTotalSSD((ssd/1000000).toFixed(3) + " " + "PT");
        
            }
          };
          fetchData();

          setTimeout(()=>{
            setShow(true)
          }, 2000)
         
         
    },[])

    

  

    // const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
    return(
        
        <main className={styles.main}>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                    <div>
                        <Modal show={show} onHide={handleClose} centered size="lg">
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <div className={styles.modal}>
                                    <a href="https://cloud.runonflux.io/login.html#/wordpress" target="_blank" rel="noreferrer">
                                <Image alt="wordpress" src={wordpressImg} /></a>
                                </div>
                               
                            </Modal.Body>
                        </Modal>
                    </div>
                        <div className={`${styles.header} col-lg-6`}>
                            <div>
                            <h1>Build on <br/><span>Web 3.0 </span>Today</h1><br/>
                            <h6>The Flux Cloud is a People-Powered Network to help you build decentralized applications with increased flexibility, scalability, and censorship resistance</h6>
                            <div className={styles.buttons}>
                            <a href="https://cloud.runonflux.io/" className={styles.btn2}>Deploy Now</a>
                            <a href="https://home.runonflux.io/apps/marketplace" rel="noreferrer" target="_blank" className={styles.btn1}>Marketplace</a>
                            </div>
                            <p>$ Calculate the cost for your solution.   <a href="https://cloud.runonflux.io/"  rel="noreferrer" target="_blank">View Cost</a></p>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </section>

            <section className={styles.section2}>
                <div className="container">
                    <div className="row">
                  
                        <div className="col-lg-5 col-md-7 mb-3">
                            <div className={styles.headerCard}>
                                <div className={styles.cardHeader}>
                                    <span><Image alt="img" src={globeImg}/></span>
                                    <div>
                                        <h6>Countries Locations</h6>
                                        <div className={styles.headerTitle}><h4>78</h4> <div><h6><Image alt="img" src={arrowUp}/>2.92% </h6> in the last month</div> </div>
                                    </div>
                                </div>
                                <div className={styles.progress} style={{marginBottom: "20px"}}>
                                <h6>Finland (3695)</h6>
                                <ProgressBar now={23.7}  label={`${23.7}%`} variant="custom"/>
                                </div>
                                <div className={styles.progress} style={{marginBottom: "20px"}}>
                                <h6>Germany (3038)</h6>
                                <ProgressBar now={19.5}  label={`${19.5}%`} variant="custom"/>
                                </div>
                                <div className={styles.progress} style={{marginBottom: "20px"}}>
                                <h6>United States (2185)</h6>
                                <ProgressBar now={14.0}  label={`${14.0}%`} variant="custom"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-5">
                            <div className={styles.cardTotal}>
                            <div className={styles.cardHeader}>
                                    <span><Image alt="img" src={nodes}/></span>
                                    <div>
                                        <h6>Total Nodes</h6>
                                        <div className={styles.headerTitle}><h4>{totalNodes}</h4></div>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-3">
                            <div className={styles.cardTotal}>
                            <div className={styles.cardHeader}>
                                    <span><Image alt="img" src={cores}/></span>
                                    <div>
                                        <h6>Total Cores</h6>
                                        <div className={styles.headerTitle}><h4>{totalCores}</h4></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                           
                            <div className="d-block d-lg-none mt-3">
                            <div className={styles.cardTotal}>
                            <div className={styles.cardHeader}>
                                    <span><Image alt="img" src={ram}/></span>
                                    <div>
                                        <h6>Total RAM</h6>
                                        <div className={styles.headerTitle}><h4>{totalRAM}</h4></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3">
                            <div className={styles.cardTotal}>
                            <div className={styles.cardHeader}>
                                    <span><Image alt="img" src={ssd}/></span>
                                    <div>
                                        <h6>Total SSD</h6>
                                        <div className={styles.headerTitle}><h4>{totalSSD}</h4></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                           

                            </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                        <div className={styles.cardTotal}>
                            <div className={styles.cardHeader}>
                                    <span><Image alt="img" src={ram}/></span>
                                    <div>
                                        <h6>Total RAM</h6>
                                        <div className={styles.headerTitle}><h4>{totalRAM}</h4></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3">
                            <div className={styles.cardTotal}>
                            <div className={styles.cardHeader}>
                                    <span><Image alt="img" src={ssd}/></span>
                                    <div>
                                        <h6>Total SSD</h6>
                                        <div className={styles.headerTitle}><h4>{totalSSD}</h4></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className="container">
                    <div className="row">
                        <h5 className="mb-5">The <span>Next Generation</span> of The Internet!</h5>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className={styles.webCard}>
                                <div className={styles.webIcon}>
                                    <Image alt="logo" src={web1}/>
                                </div>
                                <h5>Web 1.0</h5>
                                <h6>“Read Only”, <br/>
                                Static Website</h6>
                                <div className={styles.web1Icons}><Image alt="logo" src={web1Icons}/></div>  
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className={styles.webCard}>
                                <div className={styles.webIcon}>
                                    <Image alt="logo" src={web2}/>
                                </div>
                                <h5>Web 2.0</h5>
                                <h6>“Read and Write”, <br/>
                                Interactive Social Hub</h6>
                                <div className={styles.web1Icons}><Image alt="logo" src={web2Icons}/></div>  
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className={styles.webCard}>
                                <div className={styles.webIcon}>
                                    <Image alt="logo" src={web3}/>
                                </div>
                                <h5>Web 3.0</h5>
                                <h6>“Read, Write and Own”,<br/>
                                    Privacy</h6>
                                <div className={styles.web1Icons}><Image alt="logo" src={web3Icons}/></div>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    

            
            <section className={styles.sliderSection}>
                <div className="container-fluid">
                    <div className="row">
                        <h6>Trusted by our Partners</h6>
                        <Slider1/>
                    </div>
                </div>
            </section>
     
            <section className={styles.section4}>
                <div className="container">
                    <div className="row">
                        <div className="text-center mb-5">
                            <h1>The <span>Flux Cloud</span> Advantages</h1>
                            <p>The Flux Cloud evokes the power of corporations and restores it to the common people. It helps you build decentralized applications with increased flexibility, scalability, and censorship resistance.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mt-3">
                            <div className={styles.card1}>
                                <div className={styles.icon}>
                                    <Image alt="logo" src={redundancy}/>
                                </div>
                                <h5>Redundancy</h5>
                                <h6>Redundant applications and automatic failover by outages</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mt-3">
                        <div className={styles.card1}>
                        <div className={styles.icon}>
                                <Image alt="logo" src={security}/>
                            </div>
                            <h5>Security</h5>
                            <h6>Docker Hub, IPFS and additional Layers of Security</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mt-3">
                            <div className={styles.card1}>
                            <div className={styles.icon}>
                                    <Image alt="logo" src={interoperability}/>
                                </div> <h5>Interoperability</h5>
                            <h6>Code agnostic due to Docker container deployment</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mt-3">
                        <div className={styles.card1}>
                        <div className={styles.icon}>
                                    <Image alt="logo" src={decentralization}/>
                                </div>  <h5>Decentralization</h5>
                            <h6>Random deployments → Censorship resistant </h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mt-3">
                        <div className={styles.card1}>
                        <div className={styles.icon}>
                                    <Image alt="logo" src={watchtower}/>
                                </div><h5>Watchtower</h5>
                            <h6>Docker container updates get automatically pulled</h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mt-3">
                        <div className={styles.card1}>
                        <div className={styles.icon}>
                                    <Image alt="logo" src={lowcost}/>
                                </div><h5>Low Cost</h5>
                            <h6>Pay by specs and low cost due to block reward incentives</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.linearBg}>
                <div></div>
            </section>

            <section className={styles.section5}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-5">
                            <h3><span>Flux Cloud </span><br/>
                                Estimated Cost</h3>
                                <p>The Flux Cloud assures next generation pricing, Today! The Customer only pays for selected computer specifications in regards to their personal demand.</p>
                                <a href="https://jetpack2.app.runonflux.io/hello.html#cost-calculator" rel="noreferrer" target="_blank">Cost Calculator</a>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className={styles.cost}>
                            <CostCalculatorCard/>
                            </div>      
                        </div>
                    </div>
                </div>
            </section>

           
            <section className={styles.section6}>
                <div className="container">
                    <div className="row text-center mb-4">
                        <h2>A Global <span>Cloud</span> Network</h2>
                        <p className="mb-4">Flux Cloud is connected worldwide, across all continents. Its strongest Availability Zones are the whole EU zone and United States, South Asia and Australia are also witnessing an increase of Server deployments. Flux Cloud is the most decentralized and fastest growing network in the world. </p>
                    </div>
                    <div className="row">
                    <a href="https://home.runonflux.io/dashboard/map" rel="noreferrer" target="_blank" className={styles.btn2} style={{margin: "auto", marginBottom: "20px"}}>View Dashboard</a>
                    <div className={styles.map}>
                        <Image alt="map" src={map}  />
                    </div>
                    </div>
                </div>
            </section>

            <section className={styles.section7}>
                <div className="container">
                    <div className="row text-center mx-auto">
                    <h2 className="mb-3">Learn How <span>Flux Cloud</span> Works</h2>
                    <a href="https://youtu.be/cqZkNO7KM00" className={styles.btn2} target="_blank" rel="noreferrer" style={{margin: "auto"}}>View Video</a>
                    </div> 
                </div>
            </section>

            <section className={styles.section8}>
                <div className="container-fluid">
                        <div className="row mx-auto text-center">
                        <h6 className="mb-3">Supported Platforms Running On Flux</h6>
                            <Slider2/>
                        </div>
                    </div>
            </section>

            <section className={styles.section9}>
                <div className="container">
                <div className="row text-center mb-4">
                        <h2><span>Flux Cloud</span> Products</h2>
                        <p className="mb-3">Whether you are looking for simple compute power, databases, content delivery, or other functionalities, the Flux Cloud has you covered! It is the service to keep your infrastructure decentralized, flexibly, scalable and censorship resistant.</p>
                        
                    </div>
                    {/* <div className="row mb-5">
                    <a href="#" className={styles.btn2} style={{margin: "auto"}}>View Products</a>
                    </div> */}
                    <div className="row mx-auto">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                        <div className={styles.card2}>
                                <div className={styles.icon}>
                                    <Image alt="logo" src={wordpressIcon}/>
                                </div>
                                <h5>Run Wordpress</h5>
                                <h6>Run your Website using Wordpress in a decentralized, and redundant manner.</h6>
                                <a href="https://wordpress.runonflux.io" target="_blank" rel="noreferrer">Visit Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                        <div className={styles.card2}>
                                <div className={styles.icon}>
                                    <Image alt="logo" src={fluxdriveIcon}/>
                                </div>
                                <h5>Flux Drive</h5>
                                <h6>Not your Drive, Not your File! Flux Drive stores your data in a decentralized manner using the Flux Cloud.</h6>
                                <a href="https://cloud.runonflux.io/#/plans" target="_blank" rel="noreferrer">Store Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                        <div className={styles.card2}>
                                <div className={styles.icon}>
                                    <Image alt="logo" src={marketplaceIcon}/>
                                </div>
                                <h5>Flux Marketplace</h5>
                                <h6>Interact and transact on a permission-less, and self-executing Marketplace powered by the Flux Cloud.</h6>
                                <a href="https://home.runonflux.io/apps/marketplace" target="_blank" rel="noreferrer">Visit Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5 d-block d-lg-none">
                        <div className={styles.card2}>
                                <div className={styles.icon}>
                                    <Image alt="logo" src={dropletIcon}/>
                                </div>
                                <h5>Run Droplet</h5>
                                <h6>Make use of the secure, and battle proven technology of Docker Hub containers to deploy applications in a decentralized manner.</h6>
                                <a href="https://jetpack2.app.runonflux.io/#/launch/details" target="_blank" rel="noreferrer">Launch Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-lg-block">
                    <div className="row ">
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-5"></div>
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                        <div className={styles.card2}>
                                <div className={styles.icon}>
                                    <Image alt="logo" src={dropletIcon}/>
                                </div>
                                <h5>Run Droplet</h5>
                                <h6>Make use of the secure, and battle proven technology of Docker Hub containers to deploy applications in a decentralized manner.</h6>
                                <a href="https://jetpack2.app.runonflux.io/#/launch/details" target="_blank" rel="noreferrer">Launch Now</a>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5"></div>
                    </div>
                    </div>
                </div>
            </section>

            <section className={styles.section10}>
                <div className="container">
                <div className="row text-center mb-4">
                        <h2>Launch Your <span>App</span> Now</h2>
                        <p className="mb-3">Any hardened dockerized application can run on Flux’s fully decentralized computational network. The Flux service offers a fully decentralized alternative to other service providers, while maintaining competitive pricing.</p>
                        
                    </div>
                    <div className="row">
                    <a href="https://cloud.runonflux.io/#/launch" target="_blank" rel="noreferrer" className={styles.btn2} style={{margin: "auto"}}>Launch App</a>
                    </div>
                   
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <Slider3/>
                        <Slider4/>
                    </div>
                </div>
            </section>

            <section className={styles.section11}>
                <div className="container">
                    <div className="row">
                        <h2><span className={styles.cloudText1}>Cloud Computing</span> that is<br/> 
                                <span>Climate Friendly</span></h2>
                               
                        <p>Flux is actively developing sustainable solutions for proof of work and cloud computing. Flux believes that blockchains are not the sole cause of environmental problems but that it instead can provide solutions that will ultimately create more energy-efficient solutions than legacy technology can.</p> 
                    </div>
                    <div className="row mb-5">
                        <a href="https://runonflux.io/zero-carbon.html" target="_blank" rel="noreferrer" className={styles.btn3} style={{margin: "auto"}}> Discover More</a>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div className={styles.card3}>
                                    <div className={styles.icon}><Image alt="logo" src={ASIC}/></div>
                                    <h5>ASIC-Resistant Mining Algorithm</h5>
                                    <h6>Flux Utilizes an ASIC-resistant mining algorithm to keep the energy levels spent in check.</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className={styles.card3}>
                                    <div className={styles.icon}><Image alt="logo" src={POUW}/></div>
                                    <h5>Proof-of-Useful-Work Consensus</h5>
                                    <h6>The PoUW consensus is the solution to the criticism of the Proof of Work consensus due to its high energy consumption</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className={styles.card3}>
                                    <div className={styles.icon}><Image alt="logo" src={cloud}/></div>
                                    <h5>Flux Web 3.0 Cloud Infrastructure</h5>
                                    <h6>Flux aims to provide a more efficient organization of its ‘virtual’ data center with fewer resources being idle.</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className={styles.card3}>
                                    <div className={styles.icon}><Image alt="logo" src={climate}/></div>
                                    <h5>Crypto Climate Accord</h5>
                                    <h6>Flux is committing to the Crypto Climate Accord to do our part in building innovative climate-sustainable blockchain solutions.</h6>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

            <section className={styles.section12}>
                <div className="container">
                    <div className="row">
                        <div className={styles.card4}>
                            <div className="row">
                            <div className="col-lg-7">
                                <h6>100 % MONEY BACK</h6>
                                <h3>30 Day Guarantee</h3>
                                <p>Not happy with our services? We’ll send you your money back for the first trial month! Open a ticket at support.runonflux.io</p>
                                <div className="row"><a href="https://support.runonflux.io/support/home" target="_blank" rel="noreferrer" className={styles.btn2} style={{}}>Open Ticket</a></div>
                               
                            </div>
                            <div className="col-lg-5" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <div className={styles.dollar}><Image alt="logo" src={dollar}/></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}