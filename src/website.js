import './res/website.css'
import useCollapse from 'react-collapsed'
import React, { useState } from 'react'
import Slider from "./Slider.js"
function Header(){
    const [isExpanded, setExpanded] = useState(false);
    const config =
        {   
            isExpanded:isExpanded,
            duration: 2000,
            expandStyles: {
                opacity: 0.8
            },
            collapseStyles: {
                opacity: 0.8
            },
            easing:'cubic-bezier(0.4, 0, 0.2, 1)',
        }
    const { getCollapseProps, getToggleProps } = useCollapse(config);
    return(
        <header className="website-header">
            <div id='contains_fast_internal_links'>
            <div class="fast_internal_link" onClick={() => window.location.replace("/#top")}>
                <a>
                    Home
                </a>
            </div>
            <div class="fast_internal_link" onClick={() => window.location.replace("/#contact")}>
                <a >
                    Contact
                </a>
            </div>
            </div>
           {/*  <div className='column'>
            <div {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })}>
                <div id="theme_picker">
                    <a >
                        Theme
                    </a>
                </div>
            </div>
            
            <section {...getCollapseProps()}>
                <div className='row' id='themepicker'>
                    <input  type='radio' id="basic" name="theme_picker" {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })}/>
                    <div className='light_background'>
                        <div className='rounds' id="round1"></div>
                        <div className='rounds' id="round2"></div>
                        <div className='rounds' id="round3"></div>
                        <div className='rounds' id="round4"></div>
                    </div>
                </div>
                <div className='row' id='themepicker'> 
                <input  type='radio' id="dark" name="theme_picker" {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })}/>
                    <div className='light_background'>
                        <div className='rounds' id="round5"></div>
                        <div className='rounds' id="round6"></div>
                        <div className='rounds' id="round7"></div>
                        <div className='rounds' id="round8"></div>
                        </div>
                    </div>
            </section>
            </div> */}
        </header>
    )
}
function Projects(){
    const [isExpanded, setExpanded] = useState(false);
    const config =
    {   
        isExpanded:isExpanded,
        duration: 2000,
        expandStyles: {
            opacity: 0.8
        },
        collapseStyles: {
            opacity: 0.8
        },
        easing:'cubic-bezier(0.4, 0, 0.2, 1)',
    }
const { getCollapseProps, getToggleProps } = useCollapse(config);
    return (
        <div>
            <div {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}>
            <div className='row' id="Expandable_section">      
                <h1 className='Expandable_section'>My projects</h1>
                <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>  
                </div>
            </div>
            </div>  
            <section {...getCollapseProps()}>
            <h2>Software for forest management</h2>
            <div className='Text'>
            <p>I made a software using C/C++/C# combined with a SQL database to help a lumberjack get the data of his work and manage it. Basically, it contains all his clients and the buyers of the lumbers, then selecting a lumber site and a date, following those steps the lumberjack can enter with ease the data of the trees he chopped and the software filter and prints the resume that the lumber hand over to the buyers. I made that software in 1 month only, from home it was during the pandemic, and I was alone working on it. It was a good experience on how to manage a project by myself and from home, I learned how to communicate with clients that knows nothing about IT and to make their realizable ideas come true.  </p>
            </div>
            <h2>Automation of scrapping on Gmap</h2>
            <div className='Text'>
            <p>I made a little software that can scrape data on Google maps to help a friend that needed a list of a kind of facility in all France. I made it using python, it stores all the data into an Excel file.</p>
            </div>
            <h2>Automation of interaction with OpenAI</h2>
            <div className='Text'>
            <p>With a team of 5 members including myself we did for a client of the school an evaluation of the most effective set of settings for completion of sentences. To make it effective we mad a bot to get the completions of every completion we did. That allowed us to be faster and test more efficiently to find the best set of settings.</p>
            </div>
            <h2>Excel automations</h2>
            <div className='Text'>
            <p>I did 2 internships in Thalès where I made Excel files to manage and follow projects like EAC (Estimate At Completion). I also did automations on files already existing to make the employees using them focus on more important tasks.</p>
            </div>
            <h2>Google sheet automation</h2>
            <div className='Text'>
            <p>I made automations on sheets with JavaScript to make tasks automated and avoid loss of time.</p>
            </div>
            <h2>Management of git projects</h2>
            <div className='Text'>
            <p>I made with 4 classmates a management software for git projects that allow to manage a lot of git projects with ease. It was in Java and it was a great experience because it was the first time I actively used Git to manage the projects and commits between the members of the group.</p>
            </div>
            <h2>Monitoring of servers</h2>
            <div className='Text'>
            <p>With 3 other classmates we made a website for monitoring servers. The first goal was to use fully Git during the project with pipelines, automating the release through docker.</p>
            </div>
            <h2>OpenGL SpaceGame</h2>
            <div className='Text'>
            <p>In a team of 2 we made a simple space game using OpengL for a school project.</p>
            </div>
            </section>
        </div>
    );
}
function Website() {
    const [isExpanded, setExpanded] = useState(false);
    const config =
        {   
            isExpanded:isExpanded,
            duration: 2000,
            expandStyles: {
                opacity: 0.8
            },
            collapseStyles: {
                opacity: 0.8
            },
            easing:'cubic-bezier(0.4, 0, 0.2, 1)',
        }
    const { getCollapseProps, getToggleProps } = useCollapse(config);
    const datas=[
        {
            id:1,
            image:require("./assets/img1.png"),
        },
        {
            id:2,
            image:require("./assets/img2.png"),
        },
        {
            id:3,
            image:require("./assets/img3.png"),
        },
        {
            id:4,
            image:require("./assets/img4.png"),
        },
        {
            id:5,
            image:require("./assets/img5.png"),
        },
    ]
    const datas_streetworkout=[
        {
            id:1,
            image:require("./assets/street_workout1.jfif"),
        },
        {
            id:2,
            image:require("./assets/street_workout2.jfif"),
        },
    ]
    const datas_hobbies=[
        {
            id:1,
            image:require("./assets/hobbies1.jfif"),
        },
        {
            id:2,
            image:require("./assets/hobbies2.jfif"),
        },
        {
            id:2,
            image:require("./assets/hobbies3.jfif"),
        },
    ]
    return (
      <div className="website">
        <Header></Header>

        <div id="top"></div>
        <div id='under_header'>

            <div className='row' id='contains_slider'> 
                <Slider datas={datas}></Slider>
            </div>

            <body>        
            <div>
                <h1>What I am looking for:</h1>
                
                <div className='row_to_column'>
                    <div className='Text' id="short_resume">
                        <a>I am on the search for an internship in the field of software and/or networks in a foreign country (other than France). The internship would last 6 month and would start 20 of February 2023 and end between the 18 of August and the 01 of September 2023.</a>
                    </div>
                    <div className='Text' id="short_presentation">
                        <div className='column'>
                            <img src={require("./assets/selfie.jpg")} className="rounded_image" height={'50vh'} ></img>
                            <div className='row' id="row_spacebetween">
                                <div className='row'>
                                    <div className='column'>
                                        <label className='presentation_label'> Teddy Sabatier</label>
                                        <label className='presentation_label'> 22 years old</label>
                                    </div>
                                </div>
                                    <div className='column'>
                                        <label className='presentation_label'> France </label>
                                        <label className='presentation_label'> Saint-Etienne</label>
                                    </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })} >
                <div className='row' id="Expandable_section">
                    <h1 className='Expandable_section'> About me </h1>
                    <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>  
                    </div>
                </div>
                </div>
                    <div {...getCollapseProps()}>
                    <h2>Studies</h2>
                    <div className='Text'>
                    <a>I am studying in <a href='https://www.telecom-st-etienne.fr/en/' target="_blank">Télécom Saint-Etienne</a>, and I am in my 4th year of studies there. I first started out by the integrated preparatory school "CITISE". Thanks to that I had a HND (Higher National Diploma), where I learned about coding, electronics, mechanics and also, I had a preparatory school cursus where I studies mainly math and physics. I also graduated from a UD (University Diploma) Management of ideas in the digital sector that helped me to understand how launching products nowadays I am currently looking for a 6 month-long internship in a foreign country, ( not France), the internship would start the 20 of February 2023 and end between the 18 of August and the 01 of September 2023.
                    </a>
                    </div>
                    <h2>Experiences</h2>
                    <h3>I had serveral experiences in companies for internships:</h3>
                    <div className='Text'>
                    <a> I first had a short internship of 1 month because of Covid during June 2020, I was working remotely, and I made a software in C/C++/C# using database in SQL for a forest management company. During the summer just after the month of July and August were spend in Thales in Saint-Héand where I was automating Excel files to makes tasks faster. My next and last internship was in Thales again and for one month long from January till February 2021 where I continued and perfected the automations from the first internship.</a>
                    </div>
                    <h3>My short works:</h3>
                    <div className='Text'>
                    <a>I started working at the EMF (Electro Music Festival) in the south of France at Barcarès, I was multi-task there. My work was to lift and roll heavy beer barrels. I went there working a second year where I was familiar with how the bar worked and I did the cash desk but also filling up glasses as well as helping with heavy loads. It was hard and intensive work where you begin the day around 3pm and end it at 3-4am. I learned how to be effective and manage stress well. I worked one week as a carpenter just after coming back from working at the festival it was remarkably interesting.</a>
                    </div>
                    <h2>Hobbies</h2>
                    <div className='Text'>
                    <div className='row_to_column'>
                    <div className='restrict_50per_max'>
                        <p className='centered_text'>
                            I like to sport when I can, I am into street-workout and running I try to do it at least 3 times a week. As the proverb says, “Healthy mind in a healthy body”. It helps releasing stress and stay healthy.
                        </p>
                    </div>
                    <div className='restrict_50per_max'>
                    <Slider datas={datas_streetworkout}></Slider>
                    </div>
                    </div>
                    <div className='row_to_column_reverse'>
                    <div className='restrict_50per_max'>
                    <img src={require("./assets/coding1.png")}></img>
                    </div>
                    <div className='restrict_50per_max'>
                    <p className='centered_text'>
                    I am of course into coding I like to train myself on projects and what I love the most is automating tasks. That what I do makes people earn time therefore most of the time earn money.
                    </p>                    
                    </div>
                    </div>
                    <div className='row_to_column' id="items_even">
                    <div className='restrict_50per_max'>
                    <p className='centered_text'>
                        Reading is one of my big-time consuming activities with playing video games and watching series/movies. Reading in english is my main activity.
                    </p>
                    </div>
                    <div className='restrict_50per_max'>
                    <Slider datas={datas_hobbies}></Slider>    
                    </div>
                    </div>
                    </div>
                    </div>
                <Projects></Projects>
            </div>

            </body>

            <footer>
            <div className='row_to_column' id="footer_content">
            <div class="column" id="contain_contact">
                <h1 id="contact">Contact</h1>
                <div class="column">
                    <a
                    className='information'
                    >+33781779932</a>
                    <a
                    className='information'
                    href="mailto:sabatier.teddy@gmail.com" target="_blank" rel="noopener"
                    >sabatier.teddy@gmail.com</a>
                    <a
                    className='information' href='https://www.linkedin.com/in/teddy-sabatier/?locale=en_US' target="_blank"
                    >Linkedin</a>
                </div>
                </div>
                <div className='Text' >
                    <p className='centered_text'>
                        Thank you for coming to my website. In case you are interested, have any suggestion, feel free to contact me.
                    </p>
                </div>
                </div>
            </footer>
        </div>
        </div>
    );
  }
  
  export default Website;
  