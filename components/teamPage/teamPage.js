import React from "react";
import styles from "./index.module.css";
import { TeamCard } from "../teamCard/teamCard";
import { teamAsset } from "./teamList";
import { useState } from "react";
export function TeamPage(){
    const obj = undefined;
    return(
        <React.Fragment>
            <section className={styles.team}>
                <div className="container">
                    <div className="row">
                        {/* <h6>MEET</h6> */}
                        <h4>The Flux Decentralized Team</h4>
                        <h5>Meet the community members building out the Flux vision of a decentralized world. The team is a decentralized organizational structure or volunteers and leaders that distributes responsibility for daily management task among several departments and individuals. All team members are committed to a decentralized world, and work hard to ensure Flux remains the open source leader in decentralized compute.</h5>
                    </div>
                    <div className="row">
                        {teamAsset.map((item) =>{
                            return(
                             <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-5" key={item.name}>
                             <TeamCard name={item.name} src={item.thumbnail}  twitterLink={item.twitterLink} linkedInLink={item.linkedInLink} title={item.title} intro={item.intro} description={item.description} />
                         </div>)
                       
                        })}
                       
                    </div>

                </div>
            </section> 
        </React.Fragment>
    )
}