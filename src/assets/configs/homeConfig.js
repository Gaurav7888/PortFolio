import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name">Gaurav Sarkar</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Software Engineer",
        "Quantitative Researcher",
        "Indian"
    ],
    about: {
        start: "I've been working for over three years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I've a deep interest in machine learning and applying it to various domains."
    },
    workTimeline: [
        {
            id: "work-6",
            title: "Hugging Face Fellow",
            company: "Hugging Face",
            description: "As part of the cohort, I will be volunteering to work with the community in their ML democratization efforts. I will contribute to the Machine Learning open-source ecosystem.",
            date: "Jun 2022-present",
            icon: <GiCommercialAirplane/>,
            tags: ["Natural Language Processing", "Open Source Development"]
        },
        {
            id: "work-5",
            title: "Data Scientist Intern",
            company: "Wells Fargo",
            description: "Working on the task to predict stock market crash"+
            " and also the probability of its impact",
            date: "Jun 2023-Aug 2023",
            icon: <DiCodeigniter/>,
            tags: ["ml", "timeseries", "python", "quant", "dl"]
        },
        {
            id: "work-4",
            title: "Quantitative Strategist",
            company: "Multify",
            description: "Working on the stock market, option funds and other market data to come up with better profit generating stratigies",
            date: "Jun 2023-Aug 2023",
            icon: <DiCodeigniter/>,
            tags: ["ml", "timeseries", "python", "quant", "dl"]
        },
        {
            id: "work-3",
            title: "Research Intern",
            company: "McGill University",
            description: "Working on the project titled 'Prediction Of "+
            "Punching Shear Strength Using Metaheuristic Approach Of "+
            "Optimization'.",
            date: "Jun 2022-Aug 2022",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "python", "docker", "Neural Network", "Research"]
        },
        {
            id: "work-2",
            title: "Data Scientist Intern",
            company: "Ford",
            description: "Was part of the Artificial Intelligence Advancement Center (AIAC) team and worked on NLP based tasks",
            date: "May 2022-Jul 2022",
            icon: <FaMobileAlt/>,
            tags: ["NLP", "BERT", "Transformer", "Data Privacy"]
        },
        {
            id: "work-1",
            title: "Data Science Intern",
            company: "Scaler",
            description: "My Responsibilities were to create Article Structure, Data Science Curriculum, Review Content, etc."
            + " My work revolves around topics like Numpy, Pandas, Keras, Matplotlib, NLP, etc.(We Got 501k Monthly Clicks)",
            date: "Jun 2022 - Aug 2022",
            icon: <DiCodeigniter/>,
            tags: ["Content Creation","Course Curation"]
        },
        {
            id: "work-0",
            title: "Google ExploreML Facilitator",
            company: "Google",
            description: "I took Machine learning session in which I taught them about basics of machine learning like thinking of features, dimension issues, fitting lines and curves etc."+
            "We also covered kaggle courses as assignments and applied skills on real data sets. It was a hybrid session. Over 200 students registered for the event.",
            date: "Apr 2022 - May 2022",
            icon: <DiCodeigniter/>,
            tags: ["python", "applied machine learning", "kaggle", "sessions"]
        },
        {
            id: "work--2",
            title: "Data Engineer Intern",
            company: "DataWeave",
            description: "I was responsible for writing scripts and scraping data from diﬀerent websites. I learn how to handle requests, regex,SQL, build pipeline, Prefect.",
            date: "Oct 2021 – Dec 2021",
            icon: <DiCodeigniter/>,
            tags: ["python", "applied machine learning", "kaggle", "sessions"]
        },
        {
            id: "work--1",
            title: "Summer Research Intern [Machine learning]",
            company: "IIIT-Naya Raipur",
            description: "I was doing research work under the guidance of IIIT NR Professor in Data Privacy. I learned differential privacy and applied it so that every company and country can share data without any security concerns.",
            date: "Apr 2021 - Nov 2021",
            icon: <DiCodeigniter/>,
            tags: ["python", "applied machine learning", "kaggle", "sessions"]
        }
    ]
}


export default homeConfig