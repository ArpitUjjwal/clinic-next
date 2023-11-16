import React from "react";
import Link from "next/link";
import { skinServices } from "../../utils/skinServices";

const SkinServices = () => {
    return (
        <>
            <div className="services-area pt-100 pb-50">
                <div className="container">
                    <h2>Skin Treatments at Dermaiims</h2>
                    <div className="row justify-content-center">
                        {skinServices.map((item) => {
                            return (
                                <div className="col-sm-6 col-lg-3">
                                    <div className="service-item bg">
                                        <div className="service-front">
                                            <img src={item.image} alt="" />
                                            <Link href={item.link}>
                                                <h3>{item.name}</h3>
                                            </Link>
                                            <p>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkinServices;
