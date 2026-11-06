export type InlineSpan =
  | string
  | {
      text: string;
      href: string;
    };

export type BlogListItem = string | InlineSpan[];

export type BlogPanelTone = "teal" | "sky" | "amber";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "p"; spans: InlineSpan[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: BlogListItem[] }
  | { type: "ol"; items: BlogListItem[] }
  | { type: "note"; text: string }
  | { type: "video"; src: string; caption?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "panel";
      title: string;
      tone?: BlogPanelTone;
      blocks: BlogBlock[];
    };

export type BlogCategory = "General" | "Software" | "Hardware";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  authors: string[];
  category: BlogCategory;
  image?: string;
  body: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "introducing-eig",
    title: "Introducing the Embodied Intelligence Group",
    description:
      "The Embodied Intelligence Group at the University of Florida is a student organization focused on physical AI and robot learning.",
    date: "2026-10-28",
    authors: ["EIG"],
    category: "General",
    body: [
      {
        type: "image",
        src: "/images/first-gbm.jpg?v=2",
        alt: "A member presenting on learning-based robotics at EIG’s first general body meeting.",
        caption: "EIG’s first general body meeting.",
      },
      {
        type: "p",
        text: "Robot learning is an emerging and rapidly evolving field. The success of modern machine learning has proved effective in robotics, where models trained on data acquire skills such as manipulation and locomotion. Our goal at EIG is not to solve general-purpose robotics, but to learn more about it by building platforms, running experiments, and working with these models firsthand.",
      },
      {
        type: "p",
        text: "Robot learning is an interdisciplinary field at the intersection of robotics, machine learning, cognitive science, and control theory. It aims to create robotic systems that learn from their environment and experience. Developing learning algorithms for real robotic systems is difficult. The physical world is complex, safety constraints apply, and the methods must be efficient and robust.",
      },
      {
        type: "p",
        spans: [
          "EIG centers on a primary project team spanning software, mechanical, and electrical subteams, complemented by instructional workshops and recurring discussions of current literature in robot learning and embodied AI. Members are training and evaluating robot learning policies and multimodal foundation models on UF’s ",
          {
            text: "HiPerGator",
            href: "https://it.ufl.edu/rc/hipergator/",
          },
          " supercomputer, alongside designing and fabricating ARM0, a 6+1 degree-of-freedom robotic arm with custom in-house actuators.",
        ],
      },
      {
        type: "video",
        src: "/videos/so101.mp4",
        caption: "LeRobot SO-101, inspiration for ARM0.",
      },
      {
        type: "p",
        spans: [
          "ARM0 is a robotic arm EIG is developing for manipulation and robot learning experiments. Commercial arms with the repeatability, payload, and control bandwidth required for this work are prohibitively expensive for a student organization, and inexpensive hobby arms do not meet those requirements. The design uses Hugging Face’s ",
          {
            text: "LeRobot SO-101",
            href: "https://huggingface.co/docs/lerobot/en/so101",
          },
          " as a primary reference. Design files and documentation are maintained on ",
          {
            text: "GitHub (eig-uf/ARM0)",
            href: "https://github.com/eig-uf/ARM0",
          },
          ".",
        ],
      },
      {
        type: "note",
        text: "ARM0 is a living project plan. Goals and team responsibilities may change as requirements, designs, and resources develop.",
      },
      {
        type: "ul",
        items: [
          "Mechanical design: physical structure including links, joints, and component mounts; CAD modeling, mechanism and material selection, load analysis, prototyping, and assembly, with attention to reach, stiffness, weight, and manufacturability.",
          "Electrical design: power and signal systems connecting controllers, motors, and sensors; component selection, schematics, wiring, motor-driver integration, and PCB design where needed, with testing focused on power, protection, and reliable communication.",
          "Software design: command and motion coordination; embedded programming, sensor feedback, kinematics, motion control, and simulation, plus interfaces for operation and data recording in support of future learning experiments.",
        ],
      },
      {
        type: "panel",
        title: "Getting started",
        tone: "teal",
        blocks: [
          {
            type: "p",
            text: "Prior research experience is not required. The following resources provide a structured entry into the technical foundations EIG draws on. Members are encouraged to begin with one track and seek guidance through Discord as questions arise.",
          },
          {
            type: "h3",
            text: "Robot learning",
          },
          {
            type: "ul",
            items: [
              [
                {
                  text: "Carnegie Mellon University 16-831 Robot Learning (lecture materials)",
                  href: "https://16-831-s24.github.io/lectures",
                },
              ],
              [
                {
                  text: "ETH Zürich Robot Learning",
                  href: "https://cvg.ethz.ch/lectures/Robot-Learning/",
                },
              ],
            ],
          },
          {
            type: "p",
            text: "Organizations working on this problem include:",
          },
          {
            type: "ul",
            items: [
              [{ text: "Physical Intelligence", href: "https://www.pi.website/" }, ": generalist vision-language-action policies"],
              [{ text: "Skild AI", href: "https://www.skild.ai/" }, ": foundation models across robot embodiments"],
              [{ text: "Rhoda", href: "https://www.rhoda.ai/" }, ": robot foundation models"],
              [{ text: "Google DeepMind", href: "https://deepmind.google/models/gemini-robotics/" }, ": Gemini Robotics"],
              [{ text: "Generalist", href: "https://generalistai.com/" }, ": embodied foundation models (GEN-1.5)"],
              [{ text: "Hugging Face LeRobot", href: "https://huggingface.co/lerobot" }, ": open-source robot learning models, datasets, and hardware"],
              [{ text: "Figure", href: "https://www.figure.ai/" }, ", ", { text: "1X", href: "https://www.1x.tech/" }, ", and ", { text: "Agility Robotics", href: "https://www.agilityrobotics.com/" }, ": learned control for humanoid robots"],
              [{ text: "Boston Dynamics", href: "https://bostondynamics.com/" }, ": reinforcement learning for legged locomotion and whole-body control"],
            ],
          },
          {
            type: "h3",
            text: "Machine learning coursework and references",
          },
          {
            type: "p",
            text: "Recommended University of Florida preparation includes:",
          },
          {
            type: "ul",
            items: [
              "MAC2311, MAC2312, MAC2313: Calculus 1-3",
              "MAS3114 or MAS4105: Linear algebra",
              "STA4321: Introduction to Probability",
              "EEL5840 / EEE4773: Fundamentals of Machine Learning",
              "EGN5216 / EEL5934 / EEL4930: Applied ML for AI systems",
              "CIS4930: Reinforcement Learning for Humans, Animals, and Robots (Spring 2027)",
            ],
          },
          {
            type: "ul",
            items: [
              [
                {
                  text: "Goodfellow, Bengio, and Courville, Deep Learning",
                  href: "https://www.deeplearningbook.org/",
                },
              ],
              [
                {
                  text: "Google Machine Learning Crash Course",
                  href: "https://developers.google.com/machine-learning/crash-course",
                },
                " (introductory overview)",
              ],
            ],
          },
          {
            type: "h3",
            text: "Classical robotics",
          },
          {
            type: "p",
            spans: [
              "Competence in robot learning does not require prior specialization in classical robotics, but a grounding in mechanisms, sensing, and control remains valuable. Campus design organizations provide practical exposure, including ",
              { text: "GATR VEX", href: "https://www.instagram.com/gatorvex/" },
              ", the ",
              {
                text: "Machine Intelligence Laboratory",
                href: "https://mil.ufl.edu/",
              },
              ", and ",
              {
                text: "Gator Robotics",
                href: "https://www.instagram.com/gator.robotics/",
              },
              ". For a concise comparison of classical and learning-based approaches, see ",
              {
                text: "Krishna, “The stark contrast between classical robotics and learning methods”",
                href: "https://medium.com/@krrish94/the-stark-contrast-between-classical-robotics-and-learning-methods-4ae66525dbe4",
              },
              ".",
            ],
          },
          {
            type: "p",
            text: "Courses with publicly available lecture videos include:",
          },
          {
            type: "ul",
            items: [
              [
                {
                  text: "Stanford University CS223A, Introduction to Robotics",
                  href: "https://see.stanford.edu/Course/CS223A",
                },
              ],
              [
                {
                  text: "ETH Zürich, Robot Dynamics",
                  href: "https://www.youtube.com/playlist?list=PLZnJoM76RM6ItAfZIxJYNKdaR_BobleLY",
                },
              ],
            ],
          },
          {
            type: "h3",
            text: "Software, tools, and skills",
          },
          {
            type: "p",
            text: "Programming and development:",
          },
          {
            type: "ul",
            items: [
              "Python (COP3502C)",
              "C++ for embedded and real-time control",
              "Linux, the command line, and Git",
              [{ text: "Docker", href: "https://www.docker.com/" }, " for reproducible environments"],
              "Slurm job scheduling on HiPerGator",
            ],
          },
          {
            type: "p",
            text: "Learning and simulation:",
          },
          {
            type: "ul",
            items: [
              [{ text: "PyTorch", href: "https://pytorch.org/" }],
              [{ text: "JAX", href: "https://docs.jax.dev/" }],
              [{ text: "LeRobot", href: "https://github.com/huggingface/lerobot" }, " for datasets, teleoperation, and policy training"],
              [{ text: "Gymnasium", href: "https://gymnasium.farama.org/" }, " for reinforcement learning environments"],
              [{ text: "MuJoCo", href: "https://mujoco.org/" }],
              [
                {
                  text: "NVIDIA Isaac Sim",
                  href: "https://developer.nvidia.com/isaac/sim",
                },
                " and ",
                {
                  text: "Isaac Lab",
                  href: "https://isaac-sim.github.io/IsaacLab/",
                },
              ],
              [{ text: "ROS 2", href: "https://docs.ros.org/en/rolling/" }, " for robot software integration"],
            ],
          },
          {
            type: "p",
            text: "Hardware design:",
          },
          {
            type: "ul",
            items: [
              "CAD / SolidWorks (EML2023)",
              [
                { text: "KiCad", href: "https://www.kicad.org/" },
                " and ",
                { text: "Altium", href: "https://www.altium.com/" },
                " for schematic capture and PCB layout",
              ],
              "Microcontroller programming (STM32, ESP32)",
              "Motor control, encoders, and CAN bus communication",
            ],
          },
          {
            type: "p",
            text: "Core skills:",
          },
          {
            type: "ul",
            items: [
              "Rigid-body kinematics and dynamics",
              "Feedback control",
              "Probability and state estimation",
              "Teleoperation and demonstration data collection",
              "Reading and reproducing research papers",
            ],
          },
        ],
      },
      {
        type: "p",
        spans: [
          "Membership is open to University of Florida students. Prospective members should join the ",
          {
            text: "EIG Discord",
            href: "https://discord.gg/cgJTww7kBT",
          },
          ". Updates are also posted on ",
          {
            text: "Instagram",
            href: "https://www.instagram.com/eig_uf/",
          },
          " and ",
          {
            text: "LinkedIn",
            href: "https://www.linkedin.com/company/uf-embodied-intelligence-group",
          },
          ".",
        ],
      },
    ],
  },
];



export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatPostDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
