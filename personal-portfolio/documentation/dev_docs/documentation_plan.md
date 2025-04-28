# Plan: Automated Documentation Workflow Setup

**Goal:** Create a system where project documentation in `personal-portfolio/documentation/` is automatically updated alongside code changes, generate initial documentation, and create a guide file for AI assistants.

**Phase 1: Setup & Rule Definition**

1.  **Persistent Rule (User Action):** Manually add the persistent rule to the custom instructions of the primary ROO coding mode:
    *   `"**Persistent Rule:** After successfully modifying any code files within the 'personal-portfolio' directory, you MUST identify and update any relevant documentation files located in the 'personal-portfolio/documentation' folder to accurately reflect the changes made. Ensure documentation stays synchronized with the code."`
2.  **Create Documentation Directory (ROO Action):** Create the directory `personal-portfolio/documentation/`.

**Phase 2: Initial Documentation Generation (ROO Action)**

*   Analyze project structure (`astro.config.mjs`, `package.json`, `tsconfig.json`) and source files (`src/`).
*   Create the following markdown files within `personal-portfolio/documentation/` with initial content:
    *   `project-setup.md`: Covers project purpose, technologies, configuration, and running the project.
    *   `layout-baselayout.md`: Describes `src/layouts/BaseLayout.astro`.
    *   `page-index.md`: Describes `src/pages/index.astro`.
    *   `page-about.md`: Describes `src/pages/about.astro`.
    *   `page-contact.md`: Describes `src/pages/contact.astro`.
    *   `page-projects.md`: Describes `src/pages/projects.astro`.
    *   `page-resume.md`: Describes `src/pages/resume.astro`.
    *   `styles-global.md`: Describes `src/styles/global.css`.
    *   *(Note: If a `src/components/` directory is added later, documentation for those components should be created here following the same pattern).*

**Phase 3: Chatbot Guide Creation (ROO Action)**

1.  **Create Guide File:** Create `chatbot_guide.md` in the workspace root directory (`c:/Users/Decartes/Documents/GitHub/Iftekhar - Personal Portfolio`).
2.  **Populate Guide File:** Add the following content:
    *   Brief project overview.
    *   Summary of technologies used.
    *   Outline of the `personal-portfolio` directory structure, including `documentation/`.
    *   A list/summary of the documentation files created in Phase 2, **clearly stating which file covers which topic (e.g., 'For setup instructions, see `personal-portfolio/documentation/project-setup.md`; for details on the main page, see `personal-portfolio/documentation/page-index.md`')**.
    *   Instructions on how documentation files relate to source code files.
    *   Explicit mention of the standing rule: "Documentation in `/personal-portfolio/documentation/` is automatically updated by ROO when corresponding code changes are made."

**Phase 4: Review & Refinement (User & ROO Interaction)**

1.  **User Review:** Review all generated markdown files.
2.  **Feedback & Iteration:** Provide feedback for refinement. ROO updates files accordingly.

**Phase 5: Handoff for Implementation**

1.  **Mode Switch:** Once the plan is approved, ROO requests to switch to `code` mode to execute Phases 1, 2, and 3.

**Workflow Visualization (Mermaid):**

```mermaid
graph TD
    A[Phase 1: Setup & Rule] --> B(User: Add Rule to Custom Instructions);
    A --> C(ROO: Create 'personal-portfolio/documentation' Dir);
    C --> D[Phase 2: Initial Docs Generation];
    D --> E(ROO: Analyze Project);
    D --> F(ROO: Create project-setup.md);
    D --> G(ROO: Create layout-baselayout.md);
    D --> H(ROO: Create page-*.md files);
    D --> I(ROO: Create styles-global.md);
    I --> J[Phase 3: Chatbot Guide];
    J --> K(ROO: Create chatbot_guide.md);
    J --> L(ROO: Populate chatbot_guide.md with specific pointers);
    L --> M[Phase 4: Review & Refine];
    M --> N(User: Review Docs);
    N --> O{Feedback?};
    O -- Yes --> P(ROO: Refine Docs);
    P --> N;
    O -- No --> Q[Phase 5: Handoff];
    Q --> R(ROO: Request Switch to 'code' Mode);
    R --> S(Code Mode: Execute File Creation);

    style B fill:#f9f,stroke:#333,stroke-width:2px
    style N fill:#f9f,stroke:#333,stroke-width:2px