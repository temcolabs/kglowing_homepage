"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AboutAmazon from "@/components/sections/AboutAmazon";
import Clients from "@/components/sections/Clients";
import CoreServices from "@/components/sections/CoreServices";
import ServiceSection from "@/components/sections/ServiceSection";
import ServicePlans from "@/components/sections/ServicePlans";
import Reviews from "@/components/sections/Reviews";
import CaseStudy1 from "@/components/sections/CaseStudy1";
import CaseStudy2 from "@/components/sections/CaseStudy2";
import Dashboard from "@/components/sections/Dashboard";
import Contact from "@/components/sections/Contact";

import {
  accountManagementData,
  advertisingData,
  logisticsData,
  contentServiceData,
} from "@/data/serviceSections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* 섹션 1 */}
        <Hero />
        {/* 섹션 2 */}
        <About />
        {/* 섹션 3 */}
        <AboutAmazon />
        {/* 섹션 4 */}
        <Clients />
        {/* 섹션 5 */}
        <CoreServices />
        {/* 섹션 6 */}
        <ServiceSection data={accountManagementData} />
        {/* 섹션 7 */}
        <ServiceSection data={advertisingData} />
        {/* 섹션 8 */}
        <ServiceSection data={logisticsData} />
        {/* 섹션 9 */}
        <ServiceSection data={contentServiceData} />
        {/* 섹션 10 */}
        <ServicePlans />
        {/* 섹션 11 */}
        <Reviews />
        {/* 섹션 12 */}
        <CaseStudy1 />
        {/* 섹션 13 */}
        <CaseStudy2 />
        {/* 섹션 14 */}
        <Dashboard />
        {/* 섹션 15 */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
