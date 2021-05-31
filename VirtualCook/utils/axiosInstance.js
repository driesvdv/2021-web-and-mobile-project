import React, { useEffect, useState } from "react";
import axios from "axios";
import EncryptedStorage from "react-native-encrypted-storage";


export const axiosInstance = () => {
  return (
    axios.create({
      baseURL: "http://10.0.2.2:8000/api",
      // headers: {
      //   Authorization: `Bearer ${}`,
      // },
    })
  );
};
