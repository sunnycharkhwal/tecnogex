import { PackageCard } from "../components/PackageCard";
import { useState } from "react";
import EndGif from "../../../img/lo.gif";
import { Faqs } from "../components/Faqs";

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
// Package three Data end
export const BuyPlans = () => {
  const [showEndPage, setShowEndPage] = useState(true);
  const End = () => {
    return (
      <>
        <div className="questionare_page_start">
          <div className="questionare_page_end">
            <img
              className="questionare_page_end_logo"
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/maxlogodark.png"
              alt="logo"
            />
            <h3>Perfect marketing with perfect Partner</h3>
            <img className="gif_img" src={EndGif} alt="gif" />
            <div className="questionare_page_end_hr_div">
              <hr />
            </div>
            <p>
              on the way to your <span> solution</span>
            </p>
            <button onClick={() => setShowEndPage(false)} className=" mt-4">
              Buy Plans
            </button>
          </div>
        </div>
      </>
    );
  };
  return <>{showEndPage ? <Package /> : <Package />}</>;
};

const Package = () => {
  return (
    <div className="mt-5 mb-5">
      <PackageCard {...card_data} />
      <Faqs catId={1} />
    </div>
  );
};

const OurClients = () => {
  return (
    <>
      <section>
        <div>
          <h3>Our Clients Love The Results</h3>
        </div>
      </section>
    </>
  );
};
