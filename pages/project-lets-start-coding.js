/* eslint-disable */
import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#269C2C';

const ProjectPrix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h1 className="title">Let’s Start Coding</h1>
              <p className="description">Physical code kits and online lessons on computer coding for kids</p>
              <PortfolioTechnologyTags tags={['Education']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <div className="macbook--screen">
                  <img src="/static/portfolio/lets-start-coding/lets-start-coding.jpg" alt="Let’s Start Coding" />
                </div>
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <section>
              <h2 className="title">What Is Let’s Start Coding?</h2>
              <p>
                Children comprise the most common but the most difficult demographic group of students. While studying is a major activity they are involved in, educators often find it difficult to retain the attention and interest of a kid. For this reason, they should <b>encourage natural curiosity, give children an opportunity to choose their own learning path</b>, and <b>minimize the chance of failure</b>.
              </p>
              <p>
                Let’s Start Coding is a desktop application aimed at teaching kids on the basics of computer coding. <b>It effectively inspires natural curiosity in kids since the tasks are not trivial</b>.
              </p>
              <p>
                Besides the software part, there are some physical code kits, which look like printed circuit boards shaped like a car, a rocket, or a piano. By letting students choose a kit for themselves, <b>Let’s Start Coding enables children to choose their own learning path</b>. By coding the behavior of code kits, children are taught the basics of programming.
              </p>
              <p>
                Also, the lessons are subsequent and comprehensive, leaving no room for knowledge gaps. Yet, even if a certain task appears to be too complicated, <b>the program gives a student plenty of tips to minimize their chance of failure</b>.
              </p>
              <img
                style={{ maxWidth: '450px', width: '100%' }}
                src="/static/portfolio/lets-start-coding/lets-start-coding-open-graph-img.jpg"
                alt="Let’s Start Coding"
              />
              <p>
                This technology e-learning platform teaches children to code, improves their understanding of how hardware and software parts of a computer interact, and trains them on algorithmic thinking. It features pre-written code examples and in-depth explanations to ensure the best learning outcome.
              </p>
              <p>
                Such an interactive approach to outside the classroom learning is an important constituent of a comprehensive and effective child’s education system. In this way, children are motivated, inspired, and engaged, which is absolutely necessary for them not to fall behind their peers or not to drop out.
              </p>
              <p>
                The desktop application is used to load the company website but with some additional features. Unlike the website, a desktop platform gives an opportunity to install drivers to the kits. Also, one can purchase kits here although the company recommends doing it via a web version.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/img.png"
                alt="Let’s Start Coding Icon"
              />
              <p>
                At first, a student gets a kit. Base Coding Kit is claimed to be the best option for beginners since it enables kids to learn the very basics.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/start-your-computer.png"
                alt="Let’s Start Coding Icon"
              />
              <p>
                The next step is to set up a computer, Windows, Mac, or Chromebook, to code online. Here, children or parents install the program to a computer, get familiar with the platform, and download drivers for a certain kit.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/watch-intro-video.png"
                alt="Let’s Start Coding Icon"
              />
              <p>
                Then, a student watches an introductory video with in-depth explanations on different program pages and code modification process.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/get-hands-on.png"
                alt="Let’s Start Coding Icon"
              />
              <p>
                Actual coding projects are the next step in the learning process where a kid actually works with the program. They are given pre-written parts of the code, and they are taught to change some values or variables, to rewrite commands or to change their sequence.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/step-up-to-challenges.png"
                alt="Let’s Start Coding Icon"
              />
              <p>
                Each project is aimed to challenge a student to move from coding toys to coding software. The tasks become more and more complicated so that children gradually develop their expertise in programming.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/start-exploring.png"
                alt="Let’s Start Coding Icon"
              />
              <p>
                Finally, students are encouraged to explore more coding projects to broaden their knowledge. They can search for these in the desktop application itself or online, or they can come up with their own ideas and try turning these into reality.
              </p>
            </section>
            <section>
              <h2>Our Cooperation</h2>
              <h3>Challenges</h3>
              <p>
                The development itself was somewhat complicated since the functionality of the online learning platform was unusual and so were the tasks. Also, we did not start working on this e-learning platform for kids from scratch but continued developing code written by our predecessors. Still, we did our best for the result to be fully satisfactory, and we succeeded in pursuing this goal.
              </p>
              <h3>Our Team</h3>
              <p>
                The project was carried out by two professional software developers and one expert QA specialist. The Project Manager was provided on the client’s part.
              </p>
              <h3>Technologies</h3>
              <p>
                We have developed this desktop platform for both Windows and Mac with the use of Electron.
              </p>
              <ul className="technologies-list">
                <li className="technologies-item">
                  <img style={{ maxHeight: '90px' }} src="/static/portfolio/technologies/apple.png" alt="Apple" />
                </li>
                <li className="technologies-item">
                  <img style={{ maxHeight: '90px' }} src="/static/portfolio/technologies/electron.png" alt="Electron" />
                </li>
                <li className="technologies-item">
                  <img style={{ maxHeight: '90px' }} src="/static/portfolio/technologies/windows.png" alt="Windows" />
                </li>
              </ul>
              <h3>Methodology</h3>
              <p>
                To ensure constant interaction and communication with the client’s team, our cooperation was based on the principles of <a href="/blog/how-to-choose-your-optimal-development-methodology" target="_blank">Scrum</a>.
              </p>
            </section>
            <section>
              <h2>What Makes Let’s Start Coding Special?</h2>
              <p>
                Let’s Start Coding is so much more than just an app. It is augmented with various physical kits, which give children an opportunity to see and test the results of their coding.
              </p>
              <img
                style={{ maxWidth: '800px', width: '100%', margin: '20px auto' }}
                src="/static/portfolio/lets-start-coding/physical-kits-1.jpg"
                alt="Let’s Start Coding"
              />
              <img
                style={{ maxWidth: '800px', width: '100%', margin: '20px auto' }}
                src="/static/portfolio/lets-start-coding/physical-kits-2.jpg"
                alt="Let’s Start Coding"
              />
              <p>The UI/UX design is super simple for the app to be intuitively clear for young learners.</p>
              <p>There are three types of lessons: First time setup, Sequential lessons, and Projects.</p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/code-index.png"
                alt="Let’s Start Coding Icon"
              />
              <p>Through First time setups, a kid is taught the very basics of working with a code editor featured in the online learning platform and a certain kit they have purchased.</p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/lessons.png"
                alt="Let’s Start Coding Icon"
              />
              <p>
                Sequential lessons are aimed to teach a student to develop some light or sound features, to identify and fix bugs in a code, and to automate some processes. They navigate children step-by-step through a course devoted to a certain topic. In this way, children’s education is consistent and comprehensive.
              </p>
              <img
                style={{ maxWidth: '125px', width: '100%', margin: '30px auto' }}
                src="/static/portfolio/lets-start-coding/explore.png"
                alt="Let’s Start Coding Icon"
              />
              <p>
                Projects are developed for those who do not want to stick to the plan but strive to explore the world of coding at their own pace. A student is free to choose any challenges without any specific order. Here, one learns to work with lights or sound, for instance, to create an alarm sound or to control LED blinking, to toss a coin or to roll a dice.
              </p>
              <p>In addition, the app features a messenger, through which one can reach the support and get instant help.</p>
              <p>
                It is a perfect e-learning platform for kids since it is bright, interactive, intuitively clear, and useful. Young learners enjoy learning to code while playing with cars and rockets. They get a basic understanding of major coding concepts, an inspiration to continue learning to program in the future, and a productive way to spend their leisure.
              </p>
            </section>
            <section>
              <h2>Do You Have a Similar Project Idea?</h2>
              <CallToActionButton
                title="SHARE YOUR IDEA"
                buttonBefore={(
                  <a
                    href="https://www.letsstartcoding.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <button type="button" className="call-to-cation-btn -secondary">
                      CHECK THE PROJECT
                    </button>
                  </a>
                )}
              />
            </section>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPrix;
