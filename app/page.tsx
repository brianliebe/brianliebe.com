"use client";
import { ComponentType } from "react";
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
  const iconHome = Home as ComponentType<{ size: number }>;
  const iconWork = BuildingInsights_2 as ComponentType<{ size: number }>;
  const iconEducation = Education as ComponentType<{ size: number }>;
  const iconSkills = ToolKit as ComponentType<{ size: number }>;
  const iconProjects = DataCategorical as ComponentType<{ size: number }>;
  const iconContact = At as ComponentType<{ size: number }>;

  return (
    <main className="main">
      <Tabs>
        <TabList aria-label="List of tabs">
          <Tab renderIcon={iconHome} style={{ marginRight: "3px" }}>
            Home
          </Tab>
          <Tab renderIcon={iconWork} style={{ marginRight: "3px" }}>
            Work
          </Tab>
          <Tab renderIcon={iconEducation} style={{ marginRight: "3px" }}>
            Education
          </Tab>
          <Tab renderIcon={iconSkills} style={{ marginRight: "3px" }}>
            Skills
          </Tab>
          <Tab renderIcon={iconProjects} style={{ marginRight: "3px" }}>
            Projects
          </Tab>
          <Tab renderIcon={iconContact}>Contact</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h3 style={{ paddingBottom: "0.5rem" }}>Brian Liebe</h3>
            <p>
              Software Engineer
              <br />
              New York, NY
            </p>
            <p>
              <a href="https://www.github.com/brianliebe" target="_blank">
                GitHub
                <Launch size="12" className="inline-icon" />
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <h3>
              Advanced Software Engineer, <i>Clinical Research</i>
            </h3>
            <p>
              Memorial Sloan Kettering Cancer Center
              <br />
              <small>
                <i>React.js • C#/.NET • GraphQL• SQL</i>
              </small>
              <br />
              <small>Apr 2024 - Present</small>
            </p>
            <h3>
              Software Engineer, <i>Clinical Integrations</i>
            </h3>
            <p>
              Memorial Sloan Kettering Cancer Center
              <br />
              <small>
                <i>C#/.NET • React.js • Vue.js • SQL</i>
              </small>
              <br />
              <small>Dec 2021 - Apr 2024</small>
            </p>
            <h3>
              Software Engineer, <i>Implementation</i>
            </h3>
            <p>
              n-Tier Financial Services
              <br />
              <small>
                <i>Python • SQL</i>
              </small>
              <br />
              <small>Mar 2021 - Jul 2021</small>
            </p>
            <h3>
              Software Engineer, <i>Delivery</i>
            </h3>
            <p>
              Fidessa (ION Group)
              <br />
              <small>
                <i>C# • Java • TCL</i>
              </small>
              <br />
              <small>Jan 2019 - Mar 2021</small>
            </p>
          </TabPanel>
          <TabPanel>
            <h3>B.S. in Computer Science</h3>
            <p>
              Binghamton University
              <br />
              <small>Aug 2015 - Dec 2018</small>
            </p>
          </TabPanel>
          <TabPanel>
            <h3>Frontend</h3>
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
            <h3>Backend</h3>
            <p>
              C# / .NET / ASP.NET
              <br />
              Python
              <br />
              SQL / MySQL / Oracle
            </p>
            <h3>Additional</h3>
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
          </TabPanel>
          <TabPanel>
            <h3>NYT Games Discord Bot</h3>
            <p>
              Discord chat bot that detects and tracks Wordle, Connections, and
              Strands scores
              <br />
              <small>
                <i>Python • MySQL</i>
              </small>
              <br />
              <small>
                <a
                  href="https://github.com/brianliebe/nyt-games-bot"
                  target="_blank"
                >
                  View on GitHub
                  <Launch size="12" className="inline-icon" />
                </a>
              </small>
            </p>
            <h3>Circle9 Puzzle Solver</h3>
            <p>
              React webpage which provides hints and solutions for Circle9
              puzzles
              <br />
              <small>
                <i>React.js</i>
              </small>
              <br />
              <small>
                <a href="https://github.com/brianliebe/circle9" target="_blank">
                  View on GitHub
                  <Launch size="12" className="inline-icon" />
                </a>
              </small>
            </p>
            <h3>Image Recognition Discord Bot</h3>
            <p>
              Discord chat bot that uses Google Vision to identify images
              <br />
              <small>
                <i>Python • Google Vision</i>
              </small>
              <br />
              <small>
                <a
                  href="https://github.com/brianliebe/vision-bot"
                  target="_blank"
                >
                  View on GitHub
                  <Launch size="12" className="inline-icon" />
                </a>
              </small>
            </p>
            <h3>Call of Duty Match Analysis Tools</h3>
            <p>
              Parse match details and killfeed from a YouTube demo
              <br />
              <small>
                <i>Python • OpenCV • Tesseract • C#</i>
              </small>
              <br />
              <small>
                <a
                  href="https://github.com/brianliebe/vanguard"
                  target="_blank"
                >
                  View on GitHub
                  <Launch size="12" className="inline-icon" />
                </a>
              </small>
            </p>
          </TabPanel>
          <TabPanel>
            <h3>LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/brianliebe" target="_blank">
                @brianliebe
                <Launch size="12" className="inline-icon" />
              </a>
            </p>
            <h3>GitHub</h3>
            <p>
              <a href="https://www.github.com/brianliebe" target="_blank">
                @brianliebe
                <Launch size="12" className="inline-icon" />
              </a>
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
