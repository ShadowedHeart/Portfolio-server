const express = require("express");
const router = express.Router();

const userProfileDefaultData = {
  Name: "Pravesh Subba",
  UserName: "_subba",
  DOB: "27-04-2024",
  Address: "Muddenahalli, Chickballapur",
  EmailID: "praveshsubba81@gmail.com",
  PhoneNo: "93482344",
  Description: "I'm a computer science student",
  University: "SSSIHL",
};

const ProjectDetails = [
  {
    name: "C project",
    Author: "Pravesh Subba",
    date: "12/09/22",
    description:
      "This project implements Huffman coding for lossless data compression. It constructs a Huffman tree from character frequencies to generate optimal binary codes. The project includes functions for encoding and decoding data efficiently.",
  },

  {
    name: "C++ project",
    Author: "Pravesh Subba",
    date: "12/04/23",
    description:
      "This project, developed in C++, focuses on implementing Self Reliance Department. I was involved in developing a minin program for Sai Replica Department.",
  },

  {
    name: "Java project",
    Author: "Pravesh Subba",
    date: "12/09/23",
    description:
      "This Java project involves the development of a user-friendly system UI designed for SRD utilizing Java Swing.",
  },

  {
    name: "Web Development",
    Author: "Pravesh Subba",
    date: "12/06/24",
    description: "This Java project involves the development of portfolio.",
  },
];

router.get("/", (req, res) => {
  res.send(JSON.stringify(userProfileDefaultData));
});

router.get("/projectDetails", (req, res) => {
  res.json(ProjectDetails);
});

module.exports = router;
