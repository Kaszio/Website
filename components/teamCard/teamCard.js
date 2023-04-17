import React from "react";
import styles from "./index.module.css"
import Image from "next/image";

import twitter from "../../public/images/twitter-log.svg"
import linkedin from "../../public/images/iconmonstr-linkedin-3-2.svg"
import { useState } from "react";
export function TeamCard(props){
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
      <p>
      {props.description}
      </p>
  </div>
const linkName=readMore?'Read Less << ':'Read More >> '
    return(
        <div className={styles.card}>
            <div className={styles.cardImg}> <Image alt="image" src={props.src} layout="responsive"/></div>
           
            <div className={styles.nameSection}>
                <h5>{props.name}</h5>
                <div className={styles.icons}>
                <a href={props.twitterLink}><Image alt="logo" src={twitter} className={styles.icon}/></a>
                <a href={props.linkedInLink}><Image alt="logo" src={linkedin} className={styles.icon}/></a>
                </div>
            </div>
            <h4>{props.title}</h4>
            <p className={styles.intro}>{props.intro}</p>
            {readMore && extraContent}
            <a className={styles.readMoreLink} onClick={()=>{setReadMore(!readMore)}}><h4>{linkName}</h4></a>
               
        </div>
        
    )
}