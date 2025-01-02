"use client";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import axios from "axios";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const Page = ({ params }) => {

  const unsubscribe = async (email) => {
    
    try {
      const response = await axios.post(BaseAPI + "/unsubscribe", {
        email: email
      });
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
        setTimeout(() => {
          window.location.href = "www.logicspice.com/contact-us";
        }, 2000);
      } else {
        Swal.fire({
          icon: "warning",
          title: "",
          text: response.data.message,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleUnsubscribe = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to unsubscribe from our Newsletter services?",
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unsubscribe",
    }).then((result) => {
      if (result.isConfirmed) {
        unsubscribe(email);
      }
    });
  };

  useEffect(() => {
    handleUnsubscribe(params.slug);
  }, []);
  return <div></div>;
};

export default Page;
