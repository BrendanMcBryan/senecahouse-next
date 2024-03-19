import React from "react";
import upLogo from "../public/assets/images/Urban-Pace-Black.png";
import ehoLogo from "../public/assets/images/Equal Housing Opportunity(EHO).svg";
import ptBloomLogo from "../public/assets/images/PTBloom-Black.png";
import leniLogo from "../public/assets/images/LeniDesignslogo.png";
import Image from "next/image";

function FooterLogos(props) {
  return (
    <div className="row justify-content-end">
      <div className="col-auto text-center">
        <a href="https://urbanpace.com/" target="_blank" rel="noreferrer">
          <Image
            className="svg"
            src={upLogo.src}
            alt="Urban Pace"
            width={144}
            height={36}
            // layout="fill"
          />
        </a>
      </div>
      <div className="col-auto text-center">
        <Image
          className="svg"
          src={ehoLogo.src}
          alt="EHO"
          width={24}
          height={24}
        />
      </div>
      <div className="col-auto text-center">
        <a href="https://www.ptbloomsllc.com/" target="_blank" rel="noreferrer">
          <Image
            className="svg"
            src={ptBloomLogo.src}
            alt="Urban Pace"
            width={118}
            height={24}
            // layout="fill"
          />
        </a>
      </div>
      <div className="col-auto text-center">
        <a
          href="https://www.instagram.com/lenidesigns_/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="svg"
            src={leniLogo.src}
            alt="Leni Designs"
            width={56}
            height={36}
            // layout="fill"
          />
        </a>
      </div>
    </div>
  );
}

export default FooterLogos;
