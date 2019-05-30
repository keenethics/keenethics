import React from 'react';

import Layout from '../components/layout/main';
import ContentNavigation from '../components/content/navigation';
import PageTabs from '../components/content/tabs';

import { techBackEnd } from '../main.config';

const TechBackEnd = () => (
  <Layout>
    <ContentNavigation image="be" />
    <PageTabs points={techBackEnd()} />
    <div className="content-block">
      <h1>Back-End</h1>
      <p>
        Backend development - is the process of programming the site and filling it with
        functional. Creating a core site, site development platform, filling it with basic
        functionality and creation of the administrative area - this is the backend development.
      </p>
      <p>
        Website backend development process is a web programming, the purpose of which is to
        implement server-side of site, integrate database connect it with user`s (front-end)
        side. Backend development also includes software setup on a server.
      </p>
      <p>
        The frontend sends information and commands from the user to the website backend, and
        that in turn makes their processing. In short, front-end is created for the users and
        back-end for admins.
      </p>
      <p>
        Backend developer must have a basic programming skills. It`s a coding systems and
        languages for every field of development. Java and C# are, maybe, the most popular
        programming languages for now. But who knows, times change, web and app development
        grows, Ruby, Javascript and Python catching up.
      </p>
      <p>
        Backend development requires a database skill. A majority of e-commerce websites have
        databases, so this expertise is also basic for backend developers.
      </p>
      <p>
        It`s not so easy to code. It`s even more harder to code good stuff. A good coder must
        know backend development tools. It says that good backend coder makes a complex from
        development tools and “hand-made code”. Besides, we do believe that high-skilled backend
        developer must know both frontend and backend tools.
      </p>
    </div>
  </Layout>
);

export default TechBackEnd;
