import React from "react";
import styles from "./index.module.css";
import flux from "../../public/images/flux.svg"
import cloud from "../../public/images/cloud.svg"
import aws from "../../public/images/aws.svg"
import azure from "../../public/images/azure.svg"
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from 'axios';


export function FirstCPU(){

    const [price, setPrice] = useState ('loading...')
    useEffect(() => {
        async function getData() {
        await axios.get(`https://explorer.runonflux.io/api/markets/info`)
        .then(res => {
          const Data = res.data;
          const fluxPrice = Data.price;
            const fluxCloudPrice = fluxPrice * 9;
            const roundedOff = parseFloat(fluxCloudPrice).toFixed(2);
            setPrice(roundedOff);
        
        })
    }
    getData()

      }, [])


    return(
        <div className={styles.content}>
            <h5 className="mb-4">8 GB Memory / 100 GB STORAGE </h5>
            <div className={styles.priceList}>
                <div className="row">
                    <div className="col" style={{paddingBottom: "0px"}}>
                    <div className={styles.logo}>
                    <div><Image alt="logo" src={flux}/></div> <h6>FLUX</h6>
                </div>
                    </div>
                <div className="col" style={{paddingBottom: "0px"}}>
                <div className={styles.price}>
                    <h6 style={{color: "#2B61D1"}}>${price}</h6>
                    <p style={{color: "#2B61D1"}}>Includes bandwidth</p>
                </div>
                </div>        
                </div>
            </div><br/>

            <div className={styles.priceList}>
                <div className="row">
                    <div className="col" style={{paddingBottom: "0px"}}>
                    <div className={styles.logo}>
                    <div><Image alt="logo" src={cloud}/></div> <h6>Google Cloud</h6>
                </div>
                    </div>
                <div className="col" style={{paddingBottom: "0px"}}>
                <div className={styles.price}>
                    <h6>$176.76</h6>
                    <p>Includes bandwidth</p>
                </div>
                </div>        
                </div>
            </div><br/>

            <div className={styles.priceList}>
                <div className="row">
                    <div className="col" style={{paddingBottom: "0px"}}>
                    <div className={styles.logo}>
                    <div><Image alt="logo" src={aws}/></div> <h6>AWS</h6>
                </div>
                    </div>
                <div className="col" style={{paddingBottom: "0px"}}>
                <div className={styles.price}>
                    <h6>$79.92</h6>
                    <p>Includes bandwidth</p>
                </div>
                </div>        
                </div>
            </div><br/>

            <div className={styles.priceList}>
                <div className="row">
                    <div className="col" style={{paddingBottom: "0px"}}>
                    <div className={styles.logo}>
                    <div><Image alt="logo" src={azure}/></div> <h6>Azure</h6>
                </div>
                    </div>
                <div className="col" style={{paddingBottom: "0px"}}>
                <div className={styles.price}>
                    <h6>$116.80</h6>
                    <p>Includes bandwidth</p>
                </div>
                </div>        
                </div>
            </div><br/>
        </div>
    )
}