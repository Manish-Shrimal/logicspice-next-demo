"use client";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";
import axios from "axios";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const Page = ({ params }) => {
  const subscribe = async (email) => {
    try {
      const response = await axios.post(BaseAPI + "/confirm", {
        email: email,
      });
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "",
          text: response.data.message,
        });
      }
      setTimeout(() => {
        window.location.href = `${Domain}`+ "/contact-us";
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    subscribe(params.slug);
  }, []);
  return <div></div>;
};

export default Page;
