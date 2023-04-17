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
export function partnerSpin(){
    const imageWrapper = document.querySelector('.image-wrapper');
    const imageItems = documentElement.querySelectorAll('.image-wrapper > *');
    const imageLength = imageItems.length;
    let perView = 5;
    let totalScroll = 0;
    const delay = 3000;
    var sceneStart2;
}




function changeNumPerView(){
    partnerSpin();
  var w = document.documentElement.clientWidth;
  if (w<=1000) {
    perView = 1;
  }
  else {
    perView = 5;
  }
  imageWrapper.style.setProperty('--per-view', perView);
  for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
}
}




function scrolling() {
    window.addEventListener("resize", changeNumPerView);
    changeNumPerView();
    let autoScroll = setInterval(scrolling, delay);
    totalScroll++;
    if(totalScroll == imageLength + 1) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = '0s';
    imageWrapper.style.left = '0';
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = '.3s';
}


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
            <script></script>
        </main>
    );
}