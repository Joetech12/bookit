import moment from 'moment';
import React from 'react';

const Footer = () => {
  return (
    <div className=" w-full mb-0">
      <div className="flex flex-col justify-center items-center w-full xs:pt-[40px] md:pt-[20px]  text-[14px]">
        <p className="tracking-wide text-sm leading-6 mb-[5px] text-center">
          Copyright © {moment().year()} <b className="">BookIT</b>.
          All Rights Reserved.
        </p>
        <p className="">
          Built by{' '}
          <a
            href="https://ifeanyiumeh.com/"
            title="The Tech CEO"
            className="hover:underline"
          >
            Ifeanyi Umeh
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
