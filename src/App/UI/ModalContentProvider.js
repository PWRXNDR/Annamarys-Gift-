export default class ModalContentProvider {
    constructor() {
        this.modalContents = {
            aboutMe: {
                title: 'About Me',
                description: ` <div style="max-height: 50vh; overflow-y: auto; max-width: 100%;">
                                  <style>
                                /* For Webkit (Chrome, Safari, and Opera) */
                                ::-webkit-scrollbar {
                                  width: 1px;
                                }
                                ::-webkit-scrollbar-track {
                                  background: transparent;
                                }
                                ::-webkit-scrollbar-thumb {
                                  background: rgba(30, 100, 150, 0.2);
                                }
                                ::-webkit-scrollbar-thumb:hover {
                                  background: rgba(30, 100, 200, 0.2);
                                }
                                </style>
                                  <div style="text-align: start;">
                                    <img src="/img/profile_img.jpg" alt="profile img" style="float:left; margin-right: 15px; width: 17vh; height: auto; border-radius: 75px;">
                                    My name is Alex Dubranov, I'm an AI Integration Specialist and Web Developer. My expertise includes incorporating advanced technologies such as natural language processing and predictive analytics to create dynamic web experiences. My work also extends to smart contracts and blockchain technology, but my core focus remains on leveraging AI to refine and augment web functionalities.
                                  </div>
                                  <div style="margin-top: 15px; ">
                                    <img src="/img/xr.png" alt="xr" style="float:right; margin-left: 15px; width: 17vh; height: auto; border-radius: 75px;">
                                    I am also the founder of <strong><a href="https://pwrxndr.github.io/xnr_website/" style="color: black;">X&R</a></strong>, a platform where we are empowring solutions, and automating your success. At X&R, we are dedicated to harnessing the power of AI to solve real-world problems. We integrate AI solutions into the world of Web and Business, ensuring that businesses stay ahead of the curve in a rapidly evolving digital landscape.
                                  </div>
                               </div>
      </div>`,
            },
            projects: {
                title: 'Projects',
                description: `<div style="max-height: 50vh; overflow-y: auto; max-width: 100%; margin: auto;">
                    <style>
                    /* For Webkit (Chrome, Safari, and Opera) */
                    ::-webkit-scrollbar {
                      width: 1px;
                    }
                    ::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    ::-webkit-scrollbar-thumb {
                      background: rgba(30, 100, 150, 0.2);
                    }
                    ::-webkit-scrollbar-thumb:hover {
                      background: rgba(30, 100, 200, 0.2);
                    }
                    </style>
                    <ul style="list-style-type: none; padding: 0;">
                        <li style="margin-bottom: 10px; border-bottom: 1px solid #007bff; padding-bottom: 10px;">
                            <img src="/img/NutriVisionAI.jpg" alt="NutriVisionAI" style="display: block; margin: 10px auto; width:40%; height: auto; border-radius: 5%; box-shadow: (5,5,5);">
                            <a href="https://huggingface.co/spaces/pwrxndr/NutriVisionAI" style="color: #000; text-decoration: none;" target="_blank">NutriVisionAI</a> - NutriVisionAI is your every day assistant with healthy food choices. Trained on a large amount of pictures and data, it's cabale of identifying and giving the most precise information and tips. It's currently only a Beta Version, but the work goes every day to enhance its quality.
                        </li>
                        <li style="margin-bottom: 10px; border-bottom: 1px solid #007bff; padding-bottom: 10px;">
                            <img src="/img/nasa.png" alt="nasa" style="display: block; margin: 10px auto; width:40%; height: auto; border-radius: 5%; box-shadow: (5,5,5);">
                            <a href="https://pwrxndr.github.io/SpaceScopeExplorer/" style="color: #000; text-decoration: none;" target="_blank">SpaceScopeExplorer (NASA APOD)</a> - SpaceScope Explorer is a web-based platform offering enthusiasts a gateway to the wonders of the cosmos, courtesy of NASA's Astronomy Picture of the Day (APOD). With its interactive gallery, users can indulge in daily celestial images, delve into detailed explanations, and seamlessly curate a personal collection of favorites.
                        </li>
                        <li style="margin-bottom: 10px; border-bottom: 1px solid #007bff; padding-bottom: 10px;">
                            <img src="/img/picinpic.png" alt="PicInPic" style="display: block; margin: 10px auto; width:40%; height: auto; border-radius: 5%; box-shadow: (5,5,5);">
                            <a href="https://pwrxndr.github.io/picture-in-picture/" style="color: #000; text-decoration: none;" target="_blank">Picture in Picture App</a> - This innovative application empowers users with the flexibility to create a floating window from any selected page or video. Ideal for multitasking, it allows you to keep a resizable, always-on-top window open, enhancing productivity and offering convenience in accessing content as you navigate across different tasks or websites.
                        </li>
                        <li style="margin-bottom: 10px; border-bottom: 1px solid #007bff; padding-bottom: 10px;">
                            <img src="/img/eth.png" alt="Ethereum" style="display: block; margin: 10px auto; width:40%; height: auto; border-radius: 5%; box-shadow: (5,5,5);">
                            <a href="https://github.com/PWRXNDR/StableCoin" style="color: #000; text-decoration: none;" target="_blank">StableCoin Smart Contract</a> - A Solidity-based contract for a collateral-backed stablecoin, integrating an ERC20 token and an Oracle for price feeds. Key features include dynamic fee rates, collateral management, and a custom Depositor Coin for surplus collateral. This contract allows minting and burning of stablecoins with ETH, ensuring stability and security in transactions.
                        </li>
                        <li style="margin-bottom: 10px; border-bottom: 1px solid #007bff; padding-bottom: 10px;">
                            <img src="/img/autographix.jpg" alt="Autographix" style="display: block; margin: 10px auto; width:40%; height: auto; border-radius: 5%; box-shadow: (5,5,5);">
                            <a href="https://pwrxndr.github.io/Autographix/" style="color: #000; text-decoration: none;" target="_blank">Autographix</a> - is an interactive web platform that seamlessly merges AI-driven text and image creation, enabling users to transform their creative ideas into reality. Designed for artists, creators, and businesses alike, it offers tools that enhance digital storytelling and content creation through intuitive, powerful AI technologies.
                        </li>
                        <li style="margin-bottom: 10px; border-bottom: 1px solid #007bff; padding-bottom: 10px;">
                            <img src="/img/TWUST.png" alt="TWUST" style="display: block; margin: 10px auto; width:40%; height: auto; border-radius: 5%; box-shadow: (5,5,5);">
                            <a href="https://github.com/PWRXNDR/TWUST" style="color: #000; text-decoration: none;" target="_blank">TWUST - Twitter clone built in Rust</a> - Twust is a sleek, simple microblogging platform demonstrating the power and efficiency of Rust for web application development. It's a compact, yet powerful showcase of how Rust's speed and safety can enhance social media tools.
                        </li>
                        <li style="margin-bottom: 10px; border-bottom: 1px solid #007bff; padding-bottom: 10px;">
                            <img src="/img/weather.png" alt="Weather-Astro Discord Bot" style="display: block; margin: 10px auto; width:40%; height: auto; border-radius: 5%; box-shadow: (5,5,5);">
                            <a href="https://discord.com/oauth2/authorize?client_id=1232217064807337994&permissions=2147485696&scope=bot" style="color: #000; text-decoration: none;" target="_blank">Weather-Astro Discord Bot</a> - Weather-Astro Discord Bot provides forecasts and data related to sunset, sunrises, and moonsets moonrises as well as temperature and general weather to any place in the world. You just need to provide the name of the place or zip number.
                        </li>
                    </ul>
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="https://pwrxndr.github.io/xnr_website/projects.html" style="color: #007bff; font-size: 2em;">See all my projects</a>
                    </div>
                  </div>`,
            },
            certs: {
                title: 'Contributions, Awards, and Certifications',
                description: `
<div style="max-width: 100%; margin: auto; max-height: 50vh; overflow-y: auto;">
    <style>
        /* For Webkit (Chrome, Safari, and Opera) */
        ::-webkit-scrollbar {
            width: 1px;
        }
        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(30, 100, 150, 0.2);
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(30, 100, 200, 0.3);
        }

        .icon-scrolling-wrapper {
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            max-width: 100%;
            margin-bottom: 20px;
        }

        @keyframes slideIcons {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
        }

        .icon-container {
            display: inline-flex;
            animation: slideIcons 60s linear infinite;
            padding-left: 15px;
            gap: 30px;
            flex-wrap: nowrap;
        }

        .certification-item {
            text-align: center;
        }

        .certification-logo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: block;
            margin: auto;
        }
    </style>
    <div class="icon-scrolling-wrapper">
        <div class="icon-container">
            <div class="certification-item">
                <img src="img/IBM.jpg" alt="IBM" class="certification-logo">
                <span>Product Manager</span>
            </div>
            <div class="certification-item">
                <img src="img/Google.jpg" alt="Google" class="certification-logo">
                <span>Advanced Data Analytics</span>
            </div>
            <div class="certification-item">
                <img src="img/DataCamp.jpg" alt="DataCamp" class="certification-logo">
                <span>Certified AI Specialist</span>
            </div>
            <div class="certification-item">
                <img src="img/DeepLearningAI.jpg" alt="DeepLearningAI" class="certification-logo">
                <span>MLOps for Production</span>
            </div>
            <div class="certification-item">
                <img src="img/ztm.jpg" alt="ZTM" class="certification-logo">
                <span>Web Development</span>
            </div>
            <div class="certification-item">
                <img src="img/StipendiumHungaricum.jpg" alt="SH" class="certification-logo">
                <span>SH Scholarship</span>
            </div>
            <div class="certification-item">
                <img src="img/IBM.jpg" alt="IBM" class="certification-logo">
                <span>Product Manager</span>
            </div>
            <div class="certification-item">
                <img src="img/Google.jpg" alt="Google" class="certification-logo">
                <span>Advanced Data Analytics</span>
            </div>
            <div class="certification-item">
                <img src="img/DataCamp.jpg" alt="DataCamp" class="certification-logo">
                <span>Certified AI Specialist</span>
            </div>
            <div class="certification-item">
                <img src="img/DeepLearningAI.jpg" alt="DeepLearningAI" class="certification-logo">
                <span>MLOps for Production</span>
            </div>
            <div class="certification-item">
                <img src="img/ztm.jpg" alt="ZTM" class="certification-logo">
                <span>Web Development</span>
            </div>
            <div class="certification-item">
                <img src="img/StipendiumHungaricum.jpg" alt="SH" class="certification-logo">
                <span>SH Scholarship</span>
            </div>
            <div class="certification-item">
                <img src="img/IBM.jpg" alt="IBM" class="certification-logo">
                <span>Product Manager</span>
            </div>
            <div class="certification-item">
                <img src="img/Google.jpg" alt="Google" class="certification-logo">
                <span>Advanced Data Analytics</span>
            </div>
            <div class="certification-item">
                <img src="img/DataCamp.jpg" alt="DataCamp" class="certification-logo">
                <span>Certified AI Specialist</span>
            </div>
            <div class="certification-item">
                <img src="img/DeepLearningAI.jpg" alt="DeepLearningAI" class="certification-logo">
                <span>MLOps for Production</span>
            </div>
            <div class="certification-item">
                <img src="img/ztm.jpg" alt="ZTM" class="certification-logo">
                <span>Web Development</span>
            </div>
            <div class="certification-item">
                <img src="img/StipendiumHungaricum.jpg" alt="SH" class="certification-logo">
                <span>SH Scholarship</span>
            </div>
        </div>
    </div>
    <div>
    <h2 style="text-align: center; color: #007bff; margin-top: 20px;">Featured Articles</h2>
    <div style="text-align: center; margin-top: 20px;">
        <img src="img/blockchain.jpg" alt="Blockchain Tutorial" style="width: 50%; height: auto; border-radius: 5%; display: block; margin: auto;">
        <span>Blockchain, Smart Contracts, Web3 and Ethereum: Simple Tutorial</span>
        <a href="https://medium.com/@pwrxndr/blockchain-smart-contracts-web3-and-ethereum-simple-tutorial-fb0e51694727" style="text-decoration: none;"><button style="display: block; margin: 10px auto; padding: 10px 20px; background-color: #007bff; color: white; border-radius: 5px; border: none; cursor: pointer; box-shadow: 0 4px #0056b3; transition: all 0.3s ease;">Read this Article</button></a>
    </div>
    <div style="text-align: center; margin-top: 20px;">
        <img src="img/nlp.jpg" alt="NLP Tutorial" style="width: 50%; height: auto; border-radius: 5%; display: block; margin: auto;">
        <span>NLP & Transformers: Demystifying false ideas</span>
        <a href="https://medium.com/@pwrxndr/pytorch-transfer-learning-how-to-choose-the-right-model-ed4ad94c8b02" style="text-decoration: none;"><button style="display: block; margin: 10px auto; padding: 10px 20px; background-color: #007bff; color: white; border-radius: 5px; border: none; cursor: pointer; box-shadow: 0 4px #0056b3; transition: all 0.3s ease;">Read this Article</button></a>
    </div>
    <div style="text-align: center; margin-top: 20px;">
        <img src="img/torch.jpg" alt="Pytorch" style="width: 50%; height: auto; border-radius: 5%; display: block; margin: auto;">
        <span>Pytorch Transfer Learning: How to choose the right model</span>
        <a href="https://medium.com/@pwrxndr/pytorch-transfer-learning-how-to-choose-the-right-model-ed4ad94c8b02" style="text-decoration: none;"><button style="display: block; margin: 10px auto; padding: 10px 20px; background-color: #007bff; color: white; border-radius: 5px; border: none; cursor: pointer; box-shadow: 0 4px #0056b3; transition: all 0.3s ease;">Read this Article</button></a>
    </div>
</div>
</div>
`,
            },
            Calisthenics: {
                title: 'Calisthenix',
                description: `
                        <div style="max-height: 50vh; overflow-y: auto; max-width: 100%;">
                    <style>
                        /* For Webkit (Chrome, Safari, and Opera) */
                        ::-webkit-scrollbar {
                            width: 1px;
                        }
                        ::-webkit-scrollbar-track {
                            background: transparent;
                        }
                        ::-webkit-scrollbar-thumb {
                            background: rgba(30, 100, 150, 0.2);
                        }
                        ::-webkit-scrollbar-thumb:hover {
                            background: rgba(30, 100, 200, 0.2);
                        }
                        .calisthenix-link-container {
                            position: relative;
                            display: block;
                            cursor: pointer;
                            transition: transform 0.3s ease;
                            width: 80%;
                            border-radius: 10px;
                            overflow: hidden;
                            margin: 20px auto;
                            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        }
                        .calisthenix-link-container img {
                            width: 100%;
                            display: block;
                            transition: opacity 0.3s ease;
                        }
                        .calisthenix-overlay {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: rgba(0, 0, 0, 0); /* initially transparent */
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-size: 36px;
                            opacity: 0; /* initially invisible */
                            transition: background-color 0.3s ease, opacity 0.3s ease;
                        }
                        .calisthenix-link-container:hover img {
                            opacity: 0.7;
                        }
                        .calisthenix-link-container:hover .calisthenix-overlay {
                            background: rgba(0, 0, 0, 0.5);
                            opacity: 1; /* make text appear on hover */
                        }
                    </style>
                    <div style="text-align: center; padding: 20px;">
                        <h2 style="margin-bottom: 20px;">Calisthenix - Where your goals are always achievable</h2>
                        <a href="https://pwrxndr.github.io/CalistheniX/" target="_blank" class="calisthenix-link-container">
                            <img src="/img/calisthenix.png" alt="Calisthenix">
                            <div class="calisthenix-overlay">Go to the Website</div>
                        </a>
                        <p>Calisthenix is dedicated to promoting the dynamic discipline of calisthenics. We bring you the latest in calisthenics culture, from trending movements to in-depth articles on training techniques and right nutrition choices for achieving your personal goals. Discover inspiring stories from athletes who elevate the art of Calisthenics.</p>
                        <p>Our platform also offers an extensive range of sports equipment designed to enhance your training experience, whether you're a beginner or a seasoned athlete.</p>
                        <p>Stay updated with:</p>
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="font-size: 1.5em;">Latest news in Calisthenics</li>
                            <li style="font-size: 1.5em;">Training tips and techniques</li>
                            <li style="font-size: 1.5em;">High-quality calisthenics gear and accessories</li>
                        </ul>
                        <p>Explore our website to connect with the calisthenics community and shop for essential gear.</p>
                        <p style="margin-top: 15px;">Join us to push the boundaries of what you can achieve with your body.</p>
                    </div>
                </div>`
                },
            XR: {
                title: 'X&R',
                description: `
        <div style="max-height: 50vh; overflow-y: auto; max-width: 100%;">
    <style>
        /* For Webkit (Chrome, Safari, and Opera) */
        ::-webkit-scrollbar {
            width: 1px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(30, 100, 150, 0.2);
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(30, 100, 200, 0.2);
        }
        .xnr-link-container {
            position: relative;
            display: block;
            cursor: pointer;
            transition: transform 0.3s ease;
            width: 80%;
            border-radius: 10px;
            overflow: hidden;
            margin: 20px auto;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .xnr-link-container img {
            width: 100%;
            display: block;
            transition: opacity 0.3s ease;
        }
        .xnr-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0); /* initially transparent */
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 36px;
            opacity: 0; /* initially invisible */
            transition: background-color 0.3s ease, opacity 0.3s ease;
        }
        .xnr-link-container:hover img {
            opacity: 0.7;
        }
        .xnr-link-container:hover .xnr-overlay {
            background: rgba(0, 0, 0, 0.5);
            opacity: 1; /* make text appear on hover */
        }
    </style>
    <div style="text-align: center; padding: 20px;">
        <h2 style="margin-bottom: 20px;">X&R - Empowering Solutions, Automating Success</h2>
        <a href="https://pwrxndr.github.io/xnr_website/" target="_blank" class="xnr-link-container">
            <img src="/img/xnr.png" alt="X&R">
            <div class="xnr-overlay">Go to the Website</div>
        </a>
        <p>X&R specializes in integrating advanced AI technologies to enhance business processes and user experiences. Our services range from building sophisticated machine learning models to developing scalable AI-driven applications that cater to a diverse set of industries including finance, healthcare, and e-commerce.</p>
        <p>Our commitment lies in automating success and empowering solutions through:</p>
        <ul style="list-style: none; padding-left: 0;">
            <li style="color: purple; font-size: 1.5em;">Custom AI Solutions</li>
            <li style="color: blue; font-size: 1.5em;">Mind-Blowing websites and their automation</li>
            <li style="color: lime; font-size: 1.5em;">Advanced Predictive Analytics</li>
            <li style="color: lightblue; font-size: 1.5em;">Blockchain Technology Applications</li>
        </ul>
        <p>Explore our website to see how we leverage cutting-edge technology to drive innovation and transform industries.</p>
        <p style="margin-top: 15px;">Visit to discover more about our projects and breakthroughs in AI and blockchain.</p>
    </div>
</div>
`
            },
            Portfolio: {
                title: 'Portfolio',
                description: `
<div style="max-height: 50vh; overflow-y: auto; max-width: 100%;">
    <style>
        /* For Webkit (Chrome, Safari, and Opera) */
        ::-webkit-scrollbar {
            width: 1px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(30, 100, 150, 0.2);
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(30, 100, 200, 0.2);
        }
        .portfolio-link-container {
            position: relative;
            display: block;
            cursor: pointer;
            transition: transform 0.3s ease;
            width: 80%;
            border-radius: 10px;
            overflow: hidden;
            margin: 20px auto;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .portfolio-link-container img {
            width: 100%;
            display: block;
            transition: opacity 0.3s ease;
        }
        .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0); /* initially transparent */
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 36px;
            opacity: 0; /* initially invisible */
            transition: background-color 0.3s ease, opacity 0.3s ease;
        }
        .portfolio-link-container:hover img {
            opacity: 0.7;
        }
        .portfolio-link-container:hover .portfolio-overlay {
            background: rgba(0, 0, 0, 0.5);
            opacity: 1; /* make text appear on hover */
        }
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }
    </style>
    <div style="text-align: center; padding: 20px;">
        <h2 style="margin-bottom: 20px;">Explore My Professional Portfolio</h2>
        <p>Visit to view more about my projects and skills.</p>
        <a href="https://pwrxndr.github.io/Alex_Dubranov/" target="_blank" class="portfolio-link-container">
            <img src="/img/portfolio.png" alt="Portfolio">
            <div class="portfolio-overlay">Go to the Website</div>
        </a>
        <p style="margin-top: 15px;">Find me on these social media channels</p>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/aleksandr-dubranov-394481281/"><i class="bi bi-linkedin" style="font-size: 24px;"></i></a>
            <a href="https://twitter.com/pwrxndr"><i class="bi bi-twitter" style="font-size: 24px;"></i></a>
            <a href="https://medium.com/@pwrxndr"><i class="bi bi-medium" style="font-size: 24px;"></i></a>
            <a href="https://www.youtube.com/@CLSTNX"><i class="bi bi-youtube" style="font-size: 24px;"></i></a>
            <a href="https://github.com/PWRXNDR"><i class="bi bi-github" style="font-size: 24px;"></i></a>
            <a href="https://www.instagram.com/pwr_xndr/"><i class="bi bi-instagram" style="font-size: 24px;"></i></a>
        </div>
    </div>
</div>
`
            }
        }
    }

    getModalInfo(portalName) {
        return this.modalContents[portalName];
    }
}
