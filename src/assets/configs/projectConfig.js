import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import scikitPipes from "../images/scikit_pipes.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-6",
        title: "DockGPT",
        links: [
            {
                name: "repo",
                url: "https://github.com/Gaurav7888/DockGPT",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "",
                icon: <ImBook/>,
            }
        ],
        image: sklearnGenetic,
        description: "DockGPT Model trained on thousands of Docker Image source code. At the End Model is able to generate new source code of docker image :)",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "BhagwadGitaGPT",
        links: [
            {
                name: "repo",
                url: "https://github.com/Gaurav7888/BhagwadGitaGPT",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "",
                icon: <ImBook/>,
            }
        ],
        image: sklearnGenetic,
        description: "Large Language Model trained on Bhagwad Geeta Sanskrit Text and its Hindi Commentary",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Predicting Market Volatility",
        links: [
            {
                name: "repo",
                url: "https://github.com/Gaurav7888/Predicting_Market_Volatility",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "",
                icon: <ImBook/>,
            }
        ],
        image: graphEmbeddings,
        description: "Market volatility refers to the extent of price fluctuations of a financial asset or security within a given period.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Bank Of Baroda (BOB) World",
        links: [
            {
                name: "repo",
                url: "https://github.com/Gaurav7888/BOB",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://gaurav7888-bob-app-4dihn7.streamlit.app/",
                icon: <AiFillEye/>
            }
        ],
        image: kafkaMl,
        description: "End to End Solution For Banking Sector Using AI"+
        "Solved diﬀerent problems using aggregate model of Bank Of Baroda",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Open Source AWS-WAF [HoneyNet Org]",
        links: [
            {
                name: "repo",
                url: "https://docs.google.com/document/d/1naonh8Ea-7cCfE-B5AedVFYETsEdGJGReoBnOHcIpT4/edit",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "",
                icon: <AiFillEye/>
            },
            {
                name: "docs",
                url: "",
                icon: <ImBook/>,
            }
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description: "Used 2 layer approach which are Application and Network Layer to catch malicious request.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Audio-Based Emotion and Abuse Detector [ShareChat]",
        links: [
            {
                name: "repo",
                url: "https://github.com/Gaurav7888/Emotion_Classifier",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio,
        description: "Extracting various features of an audio such as MFCC, MelSpectrogram, Chroma etc",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "The Asset Bubble [Wells Fargo]",
        links: [
            {
                name: "repo",
                url: "https://github.com/Gaurav7888/NASS",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/scikit-pipes/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/scikit-pipes/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: scikitPipes,
        description: "The app forecasts prediction of stock market crash using algorithms such as Correlation method,Heatmap, KNN Outlier Detection,LOF outlier, COPOD, Log Periodic Power Law Singulairty Model(LPPLS).",
        target: "_blank"
    }
]

export default projectConfig