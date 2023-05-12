import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiAmazonaws,
    SiCplusplus,
    SiStreamlit,
    SiGit,
    SiOpencv,
    SiNvidia,
    SiDjango,
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/>,
            text: "TensorFlow"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiPytorch size={50}/>,
            text: "PyTorch"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiAmazonaws size={50}/>,
            text: "AWS"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit Learn"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiCplusplus size={50}/>,
            text: "C++"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "MLflow"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiRedis size={50}/>,
            text: "Redis"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiApacheairflow size={50}/>,
            text: "Airflow"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiOpencv size={50}/>,
            text: "OpenCV"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiNvidia size={50}/>,
            text: "Cuda"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiDjango size={50}/>,
            text: "django"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiGit size={50}/>,
            text: "Git"
        }
        ,
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiApachekafka size={50}/>,
            text: "Kafka"
        }
        ,
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiStreamlit size={50}/>,
            text: "Streamlit"
        }
    ]
}

export default skillsConfig
