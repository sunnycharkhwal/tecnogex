import { NavLink } from "react-router-dom";
import VM1 from "../../../img/vm1.svg";
import VM2 from "../../../img/vm2.png";
import VM3 from "../../../img/vm3.svg";
import VM4 from "../../../img/vm4.svg";
import VM5 from "../../../img/vm5.svg";
import VM6 from "../../../img/vm6.svg";
import React from "react";
import CountUp from "react-countup";
import { PackageCard } from "../components/PackageCard";
//
import GoogleAdsIcon from "../../../img/GoogleAdsIcon.svg";
import EmailMarketingIcon from "../../../img/EmailMarketingIcon.svg";
import VideoMarketingIcon from "../../../img/VideoMarketingIcon.svg";
import GMBIcon from "../../../img/GMBIcon.svg";
import SEOIcon from "../../../img/SEOIcon.svg";
import SocialMediaIcon from "../../../img/SocialMediaIcon.svg";
import CROIcon from "../../../img/CROIcon.svg";

const TopLinkData = [
  {
    linkName: "Google Ads",
    linkIcon: GoogleAdsIcon,
    link: "/google_ads",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "CRO",
    linkIcon: CROIcon,
    link: "/cro",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Social Media",
    linkIcon: SocialMediaIcon,
    link: "/social_media_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "SEO",
    linkIcon: SEOIcon,
    link: "/seo",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "GMB",
    linkIcon: GMBIcon,
    link: "/gmb",
    activeNav: "none",
    linkNameColor: "",
  },
  {
    linkName: "Video Marketing",
    linkIcon: VideoMarketingIcon,
    link: "/video_marketing",
    activeNav: "block",
    linkNameColor: "black",
  },
  {
    linkName: "Email Marketing",
    linkIcon: EmailMarketingIcon,
    link: "/email_marketing",
    activeNav: "none",
    linkNameColor: "",
  },
];
const card_data = {
  // Package One Data
  PackageOneData: [
    {
      recommendedText: "Recommended For You",
      recommendedDisplay: "none",
      packageName: "On Page Optimization",
      packageNameColor: "#DA9E2E",
      price: "₹2000/m",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      packageLink: "/",
      boxData: [
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "none",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "white",
          boxTitle: "Results to expect",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "is it for you?",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
      ],
    },
  ],
  // Package One Data end
  // Package two Data
  PackagetwoData: [
    {
      recommendedText: "Recommended For You",
      recommendedDisplay: "block",
      packageName: "Paid Guest Posting",
      packageNameColor: "#439dd3",
      price: "₹2001/m",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      packageLink: "/",
      boxData: [
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "white",
          boxTitle: "Results to expect",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "is it for you?",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
      ],
    },
  ],
  // Package two Data end
  // Package three Data
  PackagethreeData: [
    {
      recommendedText: "Recommended For You",
      recommendedDisplay: "none",
      packageName: "Guest Posting",
      packageNameColor: "#D86161",
      price: "₹2002/m",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      packageLink: "/",
      boxData: [
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "none",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "none",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "white",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
      ],
    },
  ],
  PackageRightCardUiData: [
    {
      title: "Highly Rated By Clients For",
      rating: "4.5",
      ResultsData: [
        {
          resultsTitle: "High Results",
        },
        {
          resultsTitle: "High Results2",
        },
        {
          resultsTitle: "High Results3",
        },
      ],
      HighlightsData: [
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
      ],
      DefinitionsData: [
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
      ],
    },
  ],
};
export const VideoMarketing = () => {
  return (
    <>
      <div className=" creation_and_growth_top_div mb-2">
        <div className=" container">
          <div className="growth_top_div">
            {TopLinkData.map((val, i) => (
              <div key={i} className=" creation_and_growth_col_div">
                <NavLink to={val.link}>
                  <img src={val.linkIcon} alt="icon" />
                  <br />
                  <span style={{ color: val.linkNameColor }}>
                    {val.linkName}
                  </span>
                </NavLink>
                <div
                  style={{ display: val.activeNav }}
                  className="creation_and_growth_activ"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="video_top_main_div ">
        <TopDiv />
      </div>
      <section className=" container mt-5 mb-5">
        <StopVideo />
      </section>
      <div className="video_top_main_div2">
        <MyCountUp />
      </div>
      <section className="container mt-5">
        <Banner />
      </section>
      <section className=" mt-5">
        <PackageCard {...card_data} />
      </section>
      <section className="mt-5 ">
        <GetInTouchVideo />
      </section>
    </>
  );
};
const TopDiv = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-md-1 order-2 col-12  video_TopDiv_title_div">
          <div className="video_TopDiv_title">
            <h1 className="all_h1_title">
              <span>Want to make an impact?</span> <br /> Turn to video
              marketing.
            </h1>
            <p className="all_h1_title_p">
              If you want to take your brand to the next level and rise above
              the noise, give our video marketing services a try today. Check
              out our sizzle reel for a taste of what our video production
              services can do for your brand. Don't wait - click now and get
              ready to be wowed!
            </p>
            <NavLink to="/Questionare_Page" className="btn full_btn">
              Get Started
            </NavLink>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-md-2 order-1 col-12 ">
          <div
            className="vm1_img"
            style={{
              backgroundImage: `url(${VM1})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
const StopVideo = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12  col-12 order-md-1 order-2 ">
          <div
            className="vm2_img"
            style={{
              backgroundImage: `url(${VM2})`,
            }}
          ></div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12  col-12 order-md-2 order-1  video_TopDiv_title_div">
          <div className=" video_TopDiv_title_2">
            <h2 className="all_h1_title">Ready To Tell Your Story?</h2>
            <p className="all_h1_title_p">
              Whether you're looking to launch a new product, showcase your
              services, or simply tell your brand's story, our expert team of
              videographers and editors have got you covered. Our video
              production services are top-notch, and we guarantee that you'll be
              thrilled with the result. Contact us today to make your mark.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const MyCountUp = () => {
  return (
    <>
      <div className=" container">
        <div className="row g-4">
          <div className="col-12">
            <div className="MyCountUp_text_div">
              <h3 className="all_h1_title">
                The ROI-Boosting Power of Video Marketing
              </h3>
              <p className="all_h1_title_p">
                You already know that video marketing is rapidly becoming the
                must-have component to every digital marketing <br />
                <span>unleash its power today.</span>
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM3} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={95} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                of businesses say video helps people better understand their
                offerings.
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM4} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={49} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                faster revenue growth is seen in businesses that use video
                marketing compared to those that don't.
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM5} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={93} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>of marketers have converted using video</p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM6} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={100} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                annual growth in mobile video consumption highlights the growing
                popularity of video in the digital realm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Banner = () => {
  return (
    <>
      <div className="Banner_text_div">
        <h3 className="all_h1_title">
          Lights, camera, action, <br />
          <span>
            and <span>Conversion!</span>
          </span>
        </h3>
        <p className="all_h1_title_p">
          Transform your brand with our expert video marketing services. Whether
          you're looking for promotional, educational, explainer, testimonial,
          or other types of videos, we have the expertise to deliver. Unsure of
          where to begin? Our dedicated team of video solutions works directly
          with you to understand your brand, vision, and future. From custom
          video solutions to achieving your marketing goals, we’ve got you
          covered.
        </p>
        <p>
          Ready to increase your conversion rates? Let’s make your brand stand
          out with our lights, camera, and action approach.
        </p>
      </div>
    </>
  );
};

const GetInTouchVideo = () => {
  return (
    <>
      <div className="get_in_touch_video">
        <div className="get_in_touch_video_inner">
          <h3>We’d love to be your partner</h3>
          <NavLink to="/getintouch" className="btn outline_btn">
            Get In Touch
          </NavLink>
        </div>
      </div>
    </>
  );
};
