# Architecture Visualization

## Component Interactions

```mermaid
graph TD
    A[ProjectDashboard] --> B[ProjectSpecificViz]
    A --> C[ProjectFilterSort]
    B --> D[Project Data]
    C --> D
    D --> E[Project Details]