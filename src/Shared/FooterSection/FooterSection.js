import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGithub,faLinkedin,faTwitterSquare } from '@fortawesome/free-brands-svg-icons' 

import { Footer } from 'flowbite-react';
import React from 'react';
import logo from '../../image/logo.png';

const FooterSection = () => {
    return (
        <div>
            <Footer container={true} className="bg-slate-900 rounded-none">
                <div className="w-3/4 mx-auto">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="https://flowbite.com"
                                src={logo}
                                alt="Flowbite Logo"
                                name="Dream Tour"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                    Brand Center
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                    Blog
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="tohinahmed"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <a href="https://www.facebook.com/Bleaklife"><FontAwesomeIcon icon={faFacebookF} size="lg" color='white'></FontAwesomeIcon></a>
                        <a href="https://github.com/tohinahmedrahat"><FontAwesomeIcon icon={faGithub} size="lg" color='white'></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/tohim-ahmed-04a9b7227/"><FontAwesomeIcon icon={faLinkedin} size="lg" color='white'></FontAwesomeIcon></a>
                        <a href="https://twitter.com/tohinahmed15"><FontAwesomeIcon icon={faTwitterSquare} size="lg" color='white'></FontAwesomeIcon></a>
                        
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default FooterSection;