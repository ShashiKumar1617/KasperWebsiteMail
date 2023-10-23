import React from "react";
import ServiceTopHeader from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/ServiceTopHeader";
import TopBanner from "../../Assets/Images/Universal/BG2.webp";
import Android from "../../Assets/Images/Services/Mobiledev/Android.svg";
import Backenddev from "../../Assets/Images/Services/Mobiledev/Backenddev.svg";
import Crossplatform from "../../Assets/Images/Services/Mobiledev/Crossplatform.svg";
import IOS from "../../Assets/Images/Services/Mobiledev/IOS.svg";
import mobilemaintanance from "../../Assets/Images/Services/Mobiledev/mobilemaintanance.svg";
import qualityassuarnce from "../../Assets/Images/Services/Mobiledev/qualityassuarnce.svg";
import security from "../../Assets/Images/Services/Mobiledev/security.svg";
import UIUXMOBILE from "../../Assets/Images/Services/Mobiledev/UIUXMOBILE.svg";
import webapp from "../../Assets/Images/Services/Mobiledev/webapp.svg";
import LaunchService from "../../Assets/Images/Services/Mobiledev/LaunchService.svg";
import MobileDevelopment from "../../Assets/Images/Services/Mobiledev/MobileDevelopment.svg";
import TestingQuality from "../../Assets/Images/Services/Mobiledev/TestingQuality.svg";
import DeploymentApp from "../../Assets/Images/Services/Mobiledev/DeploymentApp.svg";
import Design from "../../Assets/Images/Services/Mobiledev/Design.svg";
import Idea from "../../Assets/Images/Services/Mobiledev/Idea.svg";


import ServiceMainSection from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/ServiceMainSection";
import {
  TwoPartGridLeft,
  TwoPartGridRight,
} from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/TwoPartGrid";

// import FIGMA from "../../Assets/Images/tech/MobileStacks/MOBILEUI/FIGMA.webp";
// import MUI from "../../Assets/Images/tech/MobileStacks/MOBILEUI/MUI.webp";
// import SwiftUi from "../../Assets/Images/tech/MobileStacks/MOBILEUI/SwiftUi.webp";
// import UiKIT from "../../Assets/Images/tech/MobileStacks/MOBILEUI/UiKIT.webp";
// import FIGMA from "../../Assets/Images/tech/MobileStacks/MOBILEUI/FIGMA.webp";


const AppDevelopment = () => {
  return (
    <div>
      <ServiceTopHeader
        TopBanner={TopBanner}
        title="Mobile App Development Company"
        disc="Kasper Infotech stands out as a unique Mobile app development company. We specialize in developing custom, easy-to-use and high-performance Android and IOS apps for businesses of all sizes. Our App development team is ready to create an app that suits your needs perfectly."
      />
      <ServiceMainSection
        highlights="OUR SERVICES"
        highlightsDouble="SERVICES"
        heading="Boost Your Digital Presence with Our Exceptional Mobile App Development Services."
      />
      <div className="row container m-auto">
        <TwoPartGridLeft
          title="UI/UX Design"
          Discription="The success of a mobile app greatly depends on the design. Services include user interface and user experience design, wireframing, prototyping and creating visually appealing and user-friendly app interfaces."
          ImageHandle={UIUXMOBILE}
        />
        <TwoPartGridRight
          title="iOS App Development"
          Discription="Our team excel in framing apps for Apple's iOS platform. We are skilled in Swift and Objective-C programming languages and stay up-to-date with the latest iOS guidelines and design principles."
          ImageHandle={IOS}
        />
                <TwoPartGridLeft
          title="Android App Development"
          Discription="Using Java and Kotlin, the two most popular programming languages for Android development, we are experts at building Android apps. We know various Android hardware and software."
          ImageHandle={Android}
        />
                <TwoPartGridRight
          title="Cross-Platform App Development"
          Discription="We can create apps that operate without any issues on iOS and Android devices saving you time and money. To do this, we use frameworks like React Native, Flutter or Xamarin."
          ImageHandle={Crossplatform}
        />
                        <TwoPartGridLeft
          title="Backend Development"
          Discription="Most mobile apps also need a backend server to manage data storage, user authentication and other functions. Setting up servers, databases and APIs is part of backend development."
          ImageHandle={Backenddev}
        />
                <TwoPartGridRight
          title="Quality Assurance and Testing"
          Discription="Testing is required to ensure the app functions correctly and is free of bugs and vulnerabilities. Services include functional testing, usability testing, security testing and performance testing."
          ImageHandle={qualityassuarnce}
        />
                        <TwoPartGridLeft
          title="Maintenance and Updates"
          Discription="After the app is live, ongoing maintenance is essential to fix bugs, enhance features and ensure compatibility with new device versions and operating system updates."
          ImageHandle={mobilemaintanance}
        />
                <TwoPartGridRight
          title="Progressive Web Apps"
          Discription="Our Progressive Web Apps offer an app-like experience through web browsers. They feature offline capabilities, fast loading times and responsive designs making them accessible on various devices."
          ImageHandle={webapp}
        />
                <TwoPartGridLeft
          title="Security"
          Discription="Encryption, secure authentication and vulnerability assessments are just a few of the services required to guarantee the security of customer data and the app itself."
          ImageHandle={security}
        />
      </div>
      <ServiceMainSection
        highlights="OUR DEVELOPMENT PROCESS"
        highlightsDouble="PROCESS"
        heading="Steps we follow to provide best quality services."
      />
      <div className="row container m-auto">
        <TwoPartGridLeft
          title="Idea "
          Discription="This is the stage where you come up with the idea for your app and define its purpose."
          ImageHandle={Idea}
        />
        <TwoPartGridRight
          title="Design & Prototyping"
          Discription="Our expert designers create visual representations and interactive prototypes to showcase how your app will look and function. We focus on designs that are user-friendly and align with your brand."
          ImageHandle={Design}
        />
        <TwoPartGridLeft
          title="Development"
          Discription="Our skilled developers take the approved design and turn it into a working app. Using the latest technologies and best coding practices we build an app that's both robust and responsive. "
          ImageHandle={MobileDevelopment}
        />
        <TwoPartGridRight
          title="Testing & Quality Assurance"
          Discription="We subject the app to strict testing to ensure it works flawlessly. It contains checking for functionality, performance and security. Any issues are identified and resolved promptly to guarantee a smooth user experience."
          ImageHandle={TestingQuality}
        />
        <TwoPartGridLeft
          title="Deployment"
          Discription="Once the app is flawless then we prepare it for launch. We will help you navigate the app store submission process ensuring that your app meets all the requirements for a successful release."
          ImageHandle={DeploymentApp}
        />
        <TwoPartGridRight
          title="Post-Launch Support"
          Discription="Our commitment doesn't end with the launch. We offer continuous support and maintenance to keep your app running smoothly. We can also implement updates and new features as needed."
          ImageHandle={LaunchService}
        />
      </div>
    </div>
  );
};

export default AppDevelopment;
