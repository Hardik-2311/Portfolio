import React from "react";
import Title from "../../layouts/Title";
import Card from "../../layouts/Card";
import { featuresData } from "./featuredata";
const Features = () => {
  // console.log(featuresData)
  return (
    <section id="features" className="w-[90%] mx-auto py-20 border-b-[1px] border-b-white">
      <Title title="Features" desc="What i do"/>
      <div className="grid grid-cols-3 gap-20">
        {
          featuresData.map((featureData)=>{
            return <Card key={featureData.id} icon={featureData.icon} title={featureData.title} des={featureData.des}/>
          })
        }
      </div>
    </section>
  );
};

export default Features;
