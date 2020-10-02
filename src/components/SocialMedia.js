import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const SocialMedia = ({ className }) => {
  return (
    <ul className={`d-flex ${className}`}>
      <li>
        <AiFillFacebook />
      </li>
      <li>
        <AiFillTwitterCircle />
      </li>
      <li>
        <AiFillInstagram />
      </li>
    </ul>
  );
};

export default SocialMedia;
