import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

const Info = () => {
    const data = {
        heading: "Cost Of hair transplant",
        p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit sint omnis similique ea corporis vitae in iusto consequatur! Maiores odio illo, officia qui fuga aperiam, dolor, vitae animi quia commodi laudantium quis quibusdam!",
        p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt. Quaerat fugit consequatur voluptatum nulla, commodi nesciunt ut ad sed temporibus recusandae neque ea, dolorum quas. Beatae quia necessitatibus explicabo, dolor iusto eligendi provident corrupti numquam hic at inventore doloremque expedita rerum! Earum, officia magni iste repellat mollitia soluta veniam ipsam officiis explicabo laborum adipisci vitae voluptatibus architecto eaque dolorum.",
        image: "/images/signup-bg.jpg",
        p3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, esse dolore quas veritatis saepe sapiente est, id quo debitis dignissimos ducimus repellendus eum ea quod rerum impedit! Minima accusantium recusandae illum dolorem, veritatis qui repudiandae placeat, inventore molestias sequi minus incidunt cum ab amet ipsam fugit aspernatur mollitia vero doloremque! Minima accusantium recusandae illum dolorem, veritatis qui repudiandae placeat, inventore molestias sequi minus incidunt cum ab amet ipsam fugit aspernatur mollitia vero doloremque! Minima accusantium recusandae illum dolorem, veritatis qui repudiandae placeat, inventore molestias sequi minus incidunt cum ab amet ipsam fugit aspernatur mollitia vero doloremque!"
    };

    return (
        <>
            <PageBanner
                pageTitle="Cost Of hair transplant"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Hair Treatments"
                bgImage="page-title-hair"
            />
            <ServiceDetailsContent
                heading={data.heading}
                p1={data.p1}
                p2={data.p2}
                p3={data.p3}
                image={data.image}
            />
        </>
    );
};

export default Info;
