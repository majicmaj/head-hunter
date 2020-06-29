import React from "react";
import "./Home.css";
import Tilt from "react-tilt";
import { ReactComponent as Document } from "../../resources/document.svg";
import { ReactComponent as Company } from "../../resources/company.svg";
import { ReactComponent as Interview } from "../../resources/interview.svg";
import { ReactComponent as Businessman } from "../../resources/businessman.svg";

export default function Home() {
  return (
    <div className="Home">
      <section className="line around">
        <div className="left half">
          <h1 className="big">
            Find the Job <br />
            of your Dreams.
          </h1>
          <p className="big">
            Our system is designed to help you get the right job for you based
            on your skills and preferences. Get all the benefits of traditional
            recruiters and more!
          </p>
        </div>
        <div className="right half">
          <Businessman className="svg" />
        </div>
      </section>
      <section className="">
        <h1 className="big">Our Services</h1>
        <div className="line">
          <Tilt options={{ max: 10 }} className="service">
            <Document className="svg" />
            <h1>Build your Resume</h1>
            <p className="block">
              Our interactive resume builder helps you present yourself with
              your best foot forwards.
            </p>
          </Tilt>
          <Tilt options={{ max: 10 }} className="service">
            <Company className="svg" />
            <h1>Select Jobs</h1>
            <p className="block">
              Filter through job listings curated based on your experience and
              set up auto-apply.
            </p>
          </Tilt>
          <Tilt options={{ max: 10 }} className="service">
            <Interview className="svg" />
            <h1>Get Interviews</h1>
            <p className="block">
              Skip straight to the technical assements and interivews.
            </p>
          </Tilt>
        </div>
      </section>
    </div>
  );
}
