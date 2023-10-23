import React from "react";
import ServiceTopHeader from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/ServiceTopHeader";
import ServiceMainSection from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/ServiceMainSection";
import CustomWeb from "../../Assets/Images/Services/WebDevelopment/CustomWeb.svg";
import APIintigration from "../../Assets/Images/Services/WebDevelopment/APIintigration.svg";
import CloudServices from "../../Assets/Images/Services/WebDevelopment/CloudServices.svg";
import Ecommerce from "../../Assets/Images/Services/WebDevelopment/Ecommerce.svg";
import Quality from "../../Assets/Images/Services/WebDevelopment/Quality.svg";
import TechSupport from "../../Assets/Images/Services/WebDevelopment/TechSupport.svg";
import UIUX from "../../Assets/Images/Services/WebDevelopment/UIUX.svg";
import Upgrade from "../../Assets/Images/Services/WebDevelopment/Upgrade.svg";
import Consultation from "../../Assets/Images/Services/WebDevelopment/Consultation.svg";
import Deployment from "../../Assets/Images/Services/WebDevelopment/Deployment.svg";
import Development from "../../Assets/Images/Services/WebDevelopment/Development.svg";
import Maintenance from "../../Assets/Images/Services/WebDevelopment/Maintenance.svg";
import Planning from "../../Assets/Images/Services/WebDevelopment/Planning.svg";
import Prototyping from "../../Assets/Images/Services/WebDevelopment/Prototyping.svg";
import Testing from "../../Assets/Images/Services/WebDevelopment/Testing.svg";
import {
  TwoPartGridLeft,
  TwoPartGridRight,
} from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/TwoPartGrid";
import TopBanner from '../../Assets/Images/Universal/BG1.webp'
import ServiceWhyComp from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/ServiceWhyComp";
import TechStacks from "../../Components/SubComponents/TechStacks";
import JavaScript from "../../Assets/Images/tech/ProgLang/JavaScript.webp";
import TypeScript from "../../Assets/Images/tech/ProgLang/TypeScript.webp";
import python from "../../Assets/Images/tech/ProgLang/python.webp";
import Java from "../../Assets/Images/tech/ProgLang/Java.webp";
import CLang from "../../Assets/Images/tech/ProgLang/CLang.webp";
import Kotlin from "../../Assets/Images/tech/ProgLang/Kotlin.webp";
import Php from "../../Assets/Images/tech/ProgLang/Php.webp";
import swift from "../../Assets/Images/tech/ProgLang/swift.webp";
import Ruby from "../../Assets/Images/tech/ProgLang/Ruby.webp";
import angular from "../../Assets/Images/tech/Framework/angular.webp";
import ReactIMG from "../../Assets/Images/tech/Framework/React.webp";
import Vue from "../../Assets/Images/tech/Framework/Vue.webp";
import django from "../../Assets/Images/tech/Framework/django.webp";
import laravel from "../../Assets/Images/tech/Framework/laravel.webp";
import springbot from "../../Assets/Images/tech/Framework/springbot.webp";
import asp from "../../Assets/Images/tech/Framework/asp.webp";
import codeignaater from "../../Assets/Images/tech/Framework/codeignaater.webp";
import AWS from "../../Assets/Images/tech/CloudandDB/AWS.webp";
import Azure from "../../Assets/Images/tech/CloudandDB/Azure.webp";
import GoogleCloud from "../../Assets/Images/tech/CloudandDB/GoogleCloud.webp";
import Mongo from "../../Assets/Images/tech/CloudandDB/Mongo.webp";
import mysql from "../../Assets/Images/tech/CloudandDB/mysql.webp";
import salesforce from "../../Assets/Images/tech/CloudandDB/salesforce.webp";
import AmazonDynamoDb from "../../Assets/Images/tech/CloudandDB/AmazonDynamoDb.webp";
import IBM from "../../Assets/Images/tech/CloudandDB/IBM.webp";
import MarinaDB from "../../Assets/Images/tech/CloudandDB/MarinaDB.webp";
import MsSQLServer from "../../Assets/Images/tech/CloudandDB/MsSQLServer.webp";
import redis from "../../Assets/Images/tech/CloudandDB/redis.webp";
import IndustriesWeServe from "../../Components/SubComponents/About/IndustriesWeServe";
import WhyUsComp from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/WhyUsComp";

const Webdevelopment = () => {
  return (
    <>
      <ServiceTopHeader
        TopBanner={TopBanner}
        title="Web Application Development Company"
        disc="Kasper Infotech is not just a company; we are a team of passionate professionals dedicated to creating exceptional web applications. Our years of excellence make us a trusted partner for innovative digital solutions."
      />
      <ServiceMainSection
        highlights="OUR SERVICES"
        highlightsDouble="SERVICES"
        heading="Revolutionize Your Digital Presence with Our Web Application Development Services"
      />
      <div className="row container m-auto">
        <TwoPartGridLeft
          title="Custom Web Application Development"
          Discription="Our team excels in creating custom web applications that specifically address your business requirements. Whether you need an e-commerce platform, a robust content management system or an advanced enterprise solution we are here to transform your vision into a reality."
          ImageHandle={CustomWeb}
        />
        <TwoPartGridRight
          title="UI/UX Design"
          Discription="User experience is paramount to us. Our UI/UX experts craft visually appealing and intuitive interfaces that engage users and enhance conversion rates, ensuring a memorable online experience for your audience."
          ImageHandle={UIUX}
        />
        <TwoPartGridLeft
          title="E-commerce Solutions"
          Discription="Boost your online sales potential with our user-friendly e-commerce platforms. We develop scalable and secure e-commerce solutions helping you succeed in the competitive online marketplace."
          ImageHandle={Ecommerce}
        />
        <TwoPartGridRight
          title="Support and Maintenance"
          Discription="We provide comprehensive support and maintenance services to keep your web applications secure, up-to-date and performing at their best."
          ImageHandle={TechSupport}
        />
        <TwoPartGridLeft
          title="Cloud-Based Solutions"
          Discription="Harness the scalability and flexibility of the cloud with our cloud-based web application development services. We ensure seamless integration and optimization to fully leverage the potential of cloud computing."
          ImageHandle={CloudServices}
        />
        <TwoPartGridRight
          title="Web Application Upgrades and Enhancements"
          Discription="Is your existing web application due for improvements or additional features? Our team can help you upgrade and enhance your web applications to meet evolving market demands and user expectations."
          ImageHandle={Upgrade}
        />
        <TwoPartGridLeft
          title="Quality Assurance"
          Discription="Quality is our top priority. Strict testing processes ensure your web applications are bug-free and function seamlessly across various platforms and devices."
          ImageHandle={Quality}
        />
        <TwoPartGridRight
          title="API Integration"
          Discription="Effortlessly integrate third-party APIs into your web applications to enhance functionality improve user experiences and access a wide range of data and services."
          ImageHandle={APIintigration}
        />
      </div>
      <ServiceMainSection highlights="WHY US" highlightsDouble="WHY US" heading="Why Kasper Infotech is the best choice for selecting from the top Web Application Development Companies in India"/>
      <WhyUsComp/>
      
      <ServiceWhyComp />
      <ServiceMainSection  highlights=" INDUSTRIES WE SERVE"
        highlightsDouble="INDUSTRIES"
        heading="Our team is always curious and eager to explore the latest
            programming languages, frameworks, platforms, and databases. We stay
            up-to-date with the industry's advancements." />
      <IndustriesWeServe     
      />
      <ServiceMainSection
        highlights="OUR DEVELOPMENT PROCESS"
        highlightsDouble="PROCESS"
        heading="Steps we follow to provide best quality services."
      />
      <div className="row container m-auto">
        <TwoPartGridLeft
          title="Initial Consultation and Exploration"
          Discription="Our journey begins with understanding your business goals. During this stage, we have in-depth discussions to learn your objectives, target audience and unique needs. We value your insights as they form the foundation of our project."
          ImageHandle={Consultation}
        />
        <TwoPartGridRight
          title="Planning and Strategy Building"
          Discription="With your objectives in mind, we create a comprehensive project plan and strategy. It involves defining the project's scope, setting milestones and establishing timelines. We carefully select the right technologies and frameworks that align with your web application."
          ImageHandle={Planning}
        />
        <TwoPartGridLeft
          title="Design and Prototyping"
          Discription="Our talented design team takes over to craft the visual identity of your web application. We prioritize creating user-friendly interfaces that enhance engagement. To ensure we are on the same page, we present you with prototypes for your input."
          ImageHandle={Prototyping}
        />
        <TwoPartGridRight
          title="Development Phase"
          Discription="Once the design is approved, our development team takes the reins. They diligently write clean and efficient code to build the core functionality of your web application. We maintain open lines of communication to keep you updated and seek your feedback."
          ImageHandle={Development}
        />
        <TwoPartGridLeft
          title="Testing and Quality Assurance"
          Discription="Quality is at the core of our process. We conduct extensive testing to uncover and address any issues. Our testing includes functional, performance, security and compatibility checks across different browsers and devices."
          ImageHandle={Testing}
        />
        <TwoPartGridRight
          title="Deployment and Launch"
          Discription="With thorough testing and refinements complete, we move to the deployment phase. Our team ensures a flawless transition from development to production, overseeing the launch to ensure a smooth start."
          ImageHandle={Deployment}
        />
        <TwoPartGridLeft
          title="Post-Launch Support and Maintenance"
          Discription="We offer ongoing support and maintenance to keep your web application secure, up-to-date and performing at its best. We remain responsive to any evolving needs or improvements."
          ImageHandle={Maintenance}
        />
      </div>

      <ServiceMainSection
        highlights="TECHNOLOGY WE USE"
        highlightsDouble="TECHNOLOGY"
        heading="Our expertise combined with these technologies allows us to craft web applications that are not only robust and scalable but also innovative, all tailored precisely to meet our client's unique requirements."
      />
      <TechStacks
      Filter1="Programming Languages"
      Filter2="Platform & Frameworks"
      Filter3="Cloud & Database"

      page1Image1={JavaScript}
      page1Image2={TypeScript}
      page1Image3={python}
      page1Image4={Java}
      page1Image5={CLang}
      page1Image6={Kotlin}
      page1Image7={Php}
      page1Image8={swift}
      page1Image9={Ruby}

      page2Image1={ReactIMG}
      page2Image2={angular}
      page2Image3={Vue}
      page2Image4={django}
      page2Image5={laravel}
      page2Image6={springbot}
      page2Image7={asp}
      page2Image8={codeignaater}

      page3Image1={AWS}
      page3Image2={Azure}
      page3Image3={GoogleCloud}
      page3Image4={Mongo}
      page3Image5={mysql}
      page3Image6={salesforce}
      page3Image7={AmazonDynamoDb}
      page3Image8={IBM}
      page3Image9={MarinaDB}
      page3Image10={MsSQLServer}
      page3Image11={redis}
      />
    </>
  );
};

export default Webdevelopment;
