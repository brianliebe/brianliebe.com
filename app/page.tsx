"use client";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@carbon/react";
import {
  At,
  BuildingInsights_2,
  DataCategorical,
  Education,
  Home,
  Launch,
  ToolKit,
} from "@carbon/icons-react";

export default function HomePage() {
  return (
    <main className="main">
      <Tabs>
        <TabList aria-label="List of tabs">
          <Tab renderIcon={Home}>Home</Tab>
          <Tab renderIcon={BuildingInsights_2}>Work</Tab>
          <Tab renderIcon={Education}>Education</Tab>
          <Tab renderIcon={ToolKit}>Skills</Tab>
          <Tab renderIcon={DataCategorical}>Projects</Tab>
          <Tab renderIcon={At}>Contact</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <span className="text-xl font-bold">Brian Liebe</span>
            <p className="py-2">
              Software Engineer
              <br />
              New York, NY
            </p>
            <p>
              <a
                className="flex items-center justify-center underline"
                href="https://www.github.com/brianliebe"
                target="_blank"
              >
                GitHub
                <Launch size="12" className="inline-icon" />
              </a>
            </p>
          </TabPanel>
          <TabPanel className="flex flex-col gap-y-4">
            <div className="leading-tight">
              <span className="text-xl font-bold">
                Senior Software Engineer, <i>User Trust</i>
              </span>
              <p>
                Betterment
                <br />
                <small>
                  <i>Ruby on Rails • React.js • GraphQL• SQL</i>
                </small>
                <br />
                <small>May 2026 - Present</small>
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">
                Advanced Software Engineer, <i>Clinical Research</i>
              </span>
              <p>
                Memorial Sloan Kettering Cancer Center
                <br />
                <small>
                  <i>React.js • C#/.NET • GraphQL• SQL</i>
                </small>
                <br />
                <small>Apr 2024 - May 2026</small>
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">
                Software Engineer, <i>Clinical Integrations</i>
              </span>
              <p>
                Memorial Sloan Kettering Cancer Center
                <br />
                <small>
                  <i>C#/.NET • React.js • Vue.js • SQL</i>
                </small>
                <br />
                <small>Dec 2021 - Apr 2024</small>
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">
                Software Engineer, <i>Implementation</i>
              </span>
              <p>
                n-Tier Financial Services
                <br />
                <small>
                  <i>Python • SQL</i>
                </small>
                <br />
                <small>Mar 2021 - Jul 2021</small>
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">
                Software Engineer, <i>Delivery</i>
              </span>
              <p>
                Fidessa (ION Group)
                <br />
                <small>
                  <i>C# • Java • TCL</i>
                </small>
                <br />
                <small>Jan 2019 - Mar 2021</small>
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="leading-tight">
              <span className="text-xl font-bold">
                B.S. in Computer Science
              </span>
              <p>
                Binghamton University
                <br />
                <small>Aug 2015 - Dec 2018</small>
              </p>
            </div>
          </TabPanel>
          <TabPanel className="flex flex-col gap-y-4">
            <div className="leading-tight">
              <span className="text-xl font-bold">Frontend</span>
              <p>
                React.js
                <br />
                Vue.js
                <br />
                JavaScript
                <br />
                TypeScript
                <br />
                Tailwind
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">Backend</span>
              <p>
                C# / .NET / ASP.NET
                <br />
                Ruby on Rails
                <br />
                Python
                <br />
                SQL / MySQL / Oracle
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">Additional</span>
              <p>
                Git / GitHub / Actions
                <br />
                Entity Framework
                <br />
                GraphQL
                <br />
                Figma
                <br />
                Databricks
                <br />
                Splunk
              </p>
            </div>
          </TabPanel>
          <TabPanel className="flex flex-col gap-y-4">
            <div className="leading-tight">
              <span className="text-xl font-bold">NYT Games Discord Bot</span>
              <p>
                Discord chat bot that detects and tracks Wordle, Connections,
                and Strands scores
                <br />
                <small>
                  <i>Python • MySQL</i>
                </small>
                <br />
                <small>
                  <a
                    className="flex items-center justify-center underline"
                    href="https://github.com/brianliebe/nyt-games-bot"
                    target="_blank"
                  >
                    View on GitHub
                    <Launch size="12" className="inline-icon" />
                  </a>
                </small>
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">Circle9 Puzzle Solver</span>
              <p>
                React webpage which provides hints and solutions for Circle9
                puzzles
                <br />
                <small>
                  <i>React.js</i>
                </small>
                <br />
                <small>
                  <a
                    className="flex items-center justify-center underline"
                    href="https://github.com/brianliebe/circle9"
                    target="_blank"
                  >
                    View on GitHub
                    <Launch size="12" className="inline-icon" />
                  </a>
                </small>
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">
                Image Recognition Discord Bot
              </span>
              <p>
                Discord chat bot that uses Google Vision to identify images
                <br />
                <small>
                  <i>Python • Google Vision</i>
                </small>
                <br />
                <small>
                  <a
                    className="flex items-center justify-center underline"
                    href="https://github.com/brianliebe/vision-bot"
                    target="_blank"
                  >
                    View on GitHub
                    <Launch size="12" className="inline-icon" />
                  </a>
                </small>
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">
                Call of Duty Match Analysis Tools
              </span>
              <p>
                Parse match details and killfeed from a YouTube demo
                <br />
                <small>
                  <i>Python • OpenCV • Tesseract • C#</i>
                </small>
                <br />
                <small>
                  <a
                    className="flex items-center justify-center underline"
                    href="https://github.com/brianliebe/vanguard"
                    target="_blank"
                  >
                    View on GitHub
                    <Launch size="12" className="inline-icon" />
                  </a>
                </small>
              </p>
            </div>
          </TabPanel>
          <TabPanel className="flex flex-col gap-y-4">
            <div className="leading-tight">
              <span className="text-xl font-bold">LinkedIn</span>
              <p>
                <a
                  className="flex items-center justify-center underline"
                  href="https://www.linkedin.com/in/brianliebe"
                  target="_blank"
                >
                  @brianliebe
                  <Launch size="12" className="inline-icon" />
                </a>
              </p>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold">GitHub</span>
              <p>
                <a
                  className="flex items-center justify-center underline"
                  href="https://www.github.com/brianliebe"
                  target="_blank"
                >
                  @brianliebe
                  <Launch size="12" className="inline-icon" />
                </a>
              </p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
