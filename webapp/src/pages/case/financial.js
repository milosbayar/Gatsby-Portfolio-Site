import React, { useState, useEffect } from "react"
import images from '../../constants/images'
import "../../utils/globals.css"

import { IsMobile } from '../../components/deviceDetect';
import ColorPanel from "../../components/colorPanel";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import FollowMe from "../../components/followMe";

const Financial = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      setLoaded(true);
    });
    const BrowserView = ({ children }) => {
      return !IsMobile() && loaded && children;
    };
  
    const MobileView = ({ children }) => {
      return IsMobile() && loaded && children;
    };
    
    return (
        <Layout>
            <SEO title="Case-Financial"></SEO>
            <BrowserView>
                <div className="bg-whitext-base text-black">
                    <div className="bg-financial flex flex-col z-10">
                        <Link to="/projects" className="mt-32 ml-5p">
                            <button className="customButton text-white bg-financial border-financialDark text-base">
                                <img src={images.IC_VIEW_ALL_WHITE}></img> &nbsp; View All
                            </button>
                        </Link>
                        <div className="pl-8p flex justify-between">
                            <div className="flex flex-col text-white smd:w-5/12 break-normal">
                                <p className="text-25p mt-10p">Aides FInancial Advisor Web Application Design</p>
                                <p className="mt-8">Aides is a fintech web application that helps users to plan and manage their financies, daily income, daily spending and create budget for their daily financial transactions.</p>
                                <p className="text-xl mt-6">Problem Statement</p>
                                <p className="mt-8">By statistical data from survey shows that about 6 of 10 people don’t create budgets to track their spending transactions. 58% of those who create budgets do so manually using pen and paper, Others who create budgets do so with spreadsheet packages and budgeting apps. Using these current means to track expenses have proven to be quite stressful and difficult to manage.</p>
                                <p className="mt-8 mb-10">These prompted for the need to create a web application so user can Plan and manage their finances in a very intuitive and simple way.</p>
                                <div className="flex mb-20">
                                    <Link to="#" target="_blank">
                                        <div className="text-black border-b-2 p-2 border-black items-center flex">
                                            Launch Project &nbsp;
                                        <img src={images.IC_ARROW}></img>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden smd:flex w-7/12 flex-col justify-center pb-10 pl-5">
                            <img className="object-right-bottom object-scale-down" src={images.IMAGE_FINANCIAL_PAGE1}></img>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 px-5p flex justify-between items-center text-black">
                        <div className="flex flex-col justify-center">
                            <p className="text-gray-600 text-sm">Process</p>
                            <p className="text-3xl">Work process</p>
                            <p className="text-gray-600 text-base mt-3 w-8/12">The work process include collection of data from the survay conducted, problem identification, UI wireframe, Visual Design and userbility testing.</p>
                        </div>
                        <img src={images.IMAGE_FINANCIAL_PALETTE}></img>
                    </div>
                    <div className="px-15p flex flex-col text-black">
                        <p className="text-gray-600 text-sm">Style Guide</p>
                        <p className="text-3xl">Colors & Typography</p>
                        <p className="text-gray-600 text-base mt-3 w-8/12">Using Purple as the primary color from the brand with medium gray and white to keep the application simple and clean, this gives the applicatioin sooting looks and feel. </p>
                        <div className="flex flex-wrap justify-between mt-10">
                            <div className="flex">
                                <div className="flex flex-col">
                                    <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-xl text-white" color="#8A55C5" />
                                    <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-xl " color="#FFFFFF" />
                                </div>
                                <div className="flex flex-col">
                                    <ColorPanel className="boxshadow mr-6 mb-6 mt-8 w-150 h-150 rounded-2xl text-xl " color="#F6F6F6" />
                                    <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-xl " color="#7B7B7B" />
                                </div>
                            </div>
                            <div className="flex flex-col text-base text-616161">
                                <p className="text-6xl font-poppins">Heading 1</p>
                                <p className="mt-1">Poppins - Medium 60px | Line Height: 130%</p>
                                <p className="text-3xl mt-3 font-poppins">Heading 2</p>
                                <p className="mt-1">Poppins - Regular 30px | Line Height: 36px</p>
                                <p className="text-2xl mt-3 font-poppins">Body</p>
                                <p className="mt-1">Poppins - Regular 16px | Line Height: Auto</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-10">
                            <p className="text-3xl">Design Solution</p>
                            <p className="text-xl text-lightBlack">High Fidelity Screen Design</p>
                        </div>
                    </div>
                    <div className="my-20 px-5p">
                        <img className="w-full boxshadow mb-10" src={images.IMAGE_FINANCIAL_PAGE1}></img>
                        <p className="text-3xl mb-6">Login Page</p>
                        <img className="w-full boxshadow mb-10" src={images.IMAGE_FINANCIAL_PAGE2}></img>
                        <p className="text-3xl mb-6">Sign up</p>
                        <img className="w-full boxshadow mb-10" src={images.IMAGE_FINANCIAL_PAGE3}></img>
                        <p className="text-3xl mb-6 flex justify-center">Dashboard</p>
                        <img className="w-full boxshadow mb-10" src={images.IMAGE_FINANCIAL_PAGE4}></img>
                        <img className="w-full boxshadow mb-10" src={images.IMAGE_FINANCIAL_PAGE5}></img>
                        <p className="text-3xl mb-6 flex justify-center">User Profile</p>
                        <img className="w-full boxshadow mb-10" src={images.IMAGE_FINANCIAL_PAGE6}></img>
                        <img className="w-full boxshadow mb-10" src={images.IMAGE_FINANCIAL_PAGE7}></img>
                        <img className="w-full boxshadow mb-10" src={images.IMAGE_FINANCIAL_PAGE8}></img>
                        <img className="w-full boxshadow mb-32" src={images.IMAGE_FINANCIAL_PAGE9}></img>
                    </div>
                </div>
                <div className="bg-blacker text-white flex flex-col items-center pt-10">
                    <p className="text-50 mt-8">Have a project Idea?</p>
                    <p className="text-50">Talk to me about it.</p>
                    <Link to="/contact" className="my-5">
                        <button className="w-full py-5 text-xl text-white bg-primary rounded-lg  px-20 flex items-center justify-center">
                            <img src={images.IC_TALK_WHITE}></img>
                            &nbsp;
                            Let's Talk
                        </button>
                    </Link>
                    <div className="mt-20 mb-10 text-gray-500 lg:px-12 py-5">
                        © 2020 Bkay, All rights reserved.
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="bg-white flex flex-col text-sm text-black">
                    <div className="bg-financial flex flex-col">
                        <Link to="/projects" className="mt-24 ml-5p">
                            <button className="customButton text-white bg-financial border-financialDark text-sm">
                                <img src={images.IC_VIEW_ALL_WHITE}></img> &nbsp; View All
                            </button>
                        </Link>
                        <div className="px-5p text-white break-normal mt-10">
                            <p className="text-sm">Aides FInancial Advisor Web Application Design</p>
                            <p className="mt-3 text-xs">Aides is a fintech web application that helps users to plan and manage their financies, daily income, daily spending and create budget for their daily financial transactions.</p>
                            <p className="text-sm mt-2">Problem Statement</p>
                            <p className="mt-3 text-xs">By statistical data from survey shows that about 6 of 10 people don’t create budgets to track their spending transactions. 58% of those who create budgets do so manually using pen and paper, Others who create budgets do so with spreadsheet packages and budgeting apps. Using these current means to track expenses have proven to be quite stressful and difficult to manage.</p>
                            <p className="mt-3 mb-3 text-xs">These prompted for the need to create a web application so user can Plan and manage their finances in a very intuitive and simple way.</p>
                            <div className="flex mb-10">
                                <Link to="#" target="_blank">
                                    <div className="text-black border-b-2 p-2 border-black items-center text-sm flex">
                                        Launch Project &nbsp;
                                        <img src={images.IC_ARROW}></img>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="px-5">
                            <img className="object-scale-down" src={images.IMAGE_FINANCIAL_PAGE1}></img>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-black mt-5 px-5p">
                        <p className="text-gray-600 text-xs">Process</p>
                        <p className="text-3xl">Work process</p>
                        <p className="text-gray-600 text-sm mt-3 px-4">The work process include collection of data from the survay conducted, problem identification, UI wireframe, Visual Design and userbility testing.</p>
                        <img src={images.IMAGE_FINANCIAL_PALETTE}></img>

                        <p className="text-gray-600 text-xs">Style Guide</p>
                        <p className="text-xl">Colors</p>

                        <div className="flex mt-5">
                            <div className="flex flex-col">
                                <ColorPanel className="boxshadow mr-2 mb-6 w-90 h-90 rounded-2xl text-xs text-white" color="#8A55C5" />
                                <ColorPanel className="boxshadow mr-2 mb-6 w-90 h-90 rounded-2xl text-xs " color="#FFFFFF" />
                            </div>
                            <div className="flex flex-col">
                                <ColorPanel className="boxshadow mr-2 mb-6 mt-3 w-90 h-90 rounded-2xl text-xs " color="#F6F6F6" />
                                <ColorPanel className="boxshadow mr-2 mb-6 w-90 h-90 rounded-2xl text-xs " color="#7B7B7B" />
                            </div>
                        </div>

                        <p className="text-xl">Typography</p>

                        <div className="flex flex-col text-sm text-center text-616161 mt-4">
                            <p className="text-2xl font-poppins">Heading 1</p>
                            <p className="mt-1">Poppins - Medium 60px | Line Height: 130%</p>
                            <p className="text-2xl mt-3 font-poppins">Heading 2</p>
                            <p className="mt-1">Poppins - Regular 30px | Line Height: 36px</p>
                            <p className="text-2xl mt-3 font-poppins">Body</p>
                            <p className="mt-1">Poppins - Regular 16px | Line Height: Auto</p>
                        </div>

                        <p className="text-xl my-5">Design Solution</p>
                        <p className="text-base text-lightBlack">High Fidelity Screen Design</p>
                        <img className="w-full boxshadow mb-6" src={images.IMAGE_FINANCIAL_PAGE1}></img>

                        <div className="text-left">
                            <p className="text-xl pl-4 mb-3">Login Page</p>
                            <img className="w-full boxshadow mb-6" src={images.IMAGE_FINANCIAL_PAGE2}></img>

                            <p className="text-xl pl-4 mb-3">Sign up</p>
                            <img className="w-full boxshadow mb-6" src={images.IMAGE_FINANCIAL_PAGE3}></img>

                            <p className="text-xl pl-4 mb-3">Dashboard</p>
                            <img className="w-full boxshadow mb-6" src={images.IMAGE_FINANCIAL_PAGE4}></img>
                            <img className="w-full boxshadow mb-6" src={images.IMAGE_FINANCIAL_PAGE5}></img>

                            <p className="text-xl pl-4 mb-3">User Profile</p>
                            <img className="w-full boxshadow mb-6" src={images.IMAGE_FINANCIAL_PAGE6}></img>
                            <img className="w-full boxshadow mb-6" src={images.IMAGE_FINANCIAL_PAGE7}></img>
                            <img className="w-full boxshadow mb-6" src={images.IMAGE_FINANCIAL_PAGE8}></img>
                            <img className="w-full boxshadow mb-32" src={images.IMAGE_FINANCIAL_PAGE9}></img>
                        </div>
                    </div>
                    <div className="bg-blacker text-white flex flex-col items-center px-5p">
                        <p className="text-25p mt-8">Have a project Idea?</p>
                        <p className="text-25p">Talk to me about it.</p>
                        <Link to="/contact" className="my-5 w-9/12">
                            <button className="w-full py-5 text-base text-white bg-primary rounded-lg  px-4 flex items-center justify-center">
                                <img src={images.IC_TALK_WHITE}></img>
                                &nbsp;
                                Let's Talk
                            </button>
                        </Link>
                        <FollowMe className="text-base mb-24 mt-8" />
                    </div>
                </div>
            </MobileView>
        </Layout>
    );
}

export default Financial;