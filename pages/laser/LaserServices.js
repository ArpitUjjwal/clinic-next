import React from "react";
import Link from "next/link";
import { laserServices } from "../../utils/laserServices";

const LaserServices = () => {
    return (
        <>
            <div className="services-area pt-100 pb-50">
                <div className="container">
                    <h2>Laser Treatments at Dermaiims</h2>
                    <div className="row justify-content-center">
                        {laserServices.map((item) => {
                            return (
                                <div className="col-sm-6 col-lg-3">
                                    <Link href={item.link}>
                                        <div className="service-item">
                                            <div className="service-front">
                                                <img src={item.image} alt="" />
                                                <h3>{item.name}</h3>
                                                <p>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LaserServices;
