# Dataform ELT Template

# Attention Datatonic Developers
This section is Datatonic dev only. Delete this section from the repository after project has been delivered.

- Please add the correct URLs below for relevant documentation when working on a client project
- Please add/amend sections beloew for the correct link for project resources (section names can vary based on your project)
- PLEASE CAREFULLY READ THE NOTION PAGE for this repo [here](https://www.notion.so/Dataform-b86955a89fef4dc2b0b3dcb1cf7f0997)

**To run this pop-up framework, you will need admin/write permissions on client dev project (to create datasets and tables, and run Dataform workflows)**

# Using the Framework Internally to Develop New Features
Following guidelines for internal use - e.g. for adding or amending features for general use

## Using this for the very first time
- Have you set up Dataform core as per our [Notion page](https://www.notion.so/datatonic/Dataform-Setup-3bc4c605ce3d41e6a924bbe7378245f2)
- Are you on the latest version of Dataform. Check [latest version](https://github.com/dataform-co/dataform/releases).

## Create a development workspace in Dataform core & submit Pull Request
- For generic data warehouse implementation guidelines, view guidelines on Notion and publish a **Ways of Working guideline** for Dataform for your client project accordingly [Notion page](https://www.notion.so/datatonic/Data-Warehouse-Design-Development-Guidance-BigQuery-d97ba4db6f5f4b96b611bd339d469c4d#589be16fe27a469c809e7e840429b431)
- For Dataform-specific developer guidance, check [Notion page](https://www.notion.so/datatonic/Dataform-Core-Developer-Guidance-3c09bb86fa714756aa1009ec0093ed22)
- Raise a PR with any new changes. Use the pull_request_template.md file to format your PR
- Assign an SME to review

# Using The Framework On Client Projects
Following guidelines are for using this framework on client projects

## Using this for the very first time
- Have you set up Dataform core as per our [Notion page](https://www.notion.so/datatonic/Dataform-Setup-3bc4c605ce3d41e6a924bbe7378245f2)
- Are you on the latest version of Dataform. Check [latest version](https://github.com/dataform-co/dataform/releases).

## Copy this repo to your client repo
- Copy the master branch to your client specific repository 
- Update the README file per the correct project reousrce links
- Update the `dataform.json` file to reflect the right attributes as per the client project
- Update the **pull_request_template.md** file reflect the correct set up applicable for the client (incl. link to **ways of working** guidelines) or remove if the PR template isn't compatible with the client's chosen repository (**NOTE:** some of the emojis used on this file may also need to be updated if the client's repo isn't **GitHub**)

## First Ever Run (on client dev project)
- Ensure the Dataform assets are set up correctly by following the [notion page](https://www.notion.so/datatonic/Dataform-Setup-3bc4c605ce3d41e6a924bbe7378245f2)
- Trigger a Dataform workflow execution to validate all permissions and roles applied
- **IMPORTANT** For the data models to execute, tables might need to be copied manually into client project. If this is time consuming or not permitted, then write simple DDL to create a dummy table as an example.

# Structuring the Repository's Contents

In this section, lay out an overview of the entire developed solution, including links to publicly available resources as well as documentation created for the client.

The following sub-sections are encouraged.

## Overview 
The overview section should provide a brief summary of what the project is about, it’s purpose, and it’s intended audience. This can be a high-level explanation of the project and what it aims to achieve.

### What is Dataform?
Dataform is Google Cloud’s transformation framework to support the “T” in ELT workloads. It offers serverless orchestration, helps build transformation workflows with just SQL, augments SQL with the programmatic power of Javascript, helps test data with assertions and also allows adding metadata to data such as labels, policy tags and documentation.

[insert diagram showing where Dataform fits into the MDS]

## Dataform setup + Git connection
Refer [notion page](https://www.notion.so/datatonic/Dataform-Setup-3bc4c605ce3d41e6a924bbe7378245f2)

## Design & Architecture Diagrams

[insert any diagrams created]

## Deploying IAC with Terraform

[TBD]

Update/remove the above section depending on the context when passing this over to clients

## Dataform Orchestration Guidelines

Provide information on

- How is the workflow orchestrated?
- What tags are used?
- When are these tags orchestrated to run?
- Frequency and schedule of runs

## Release Process for Production

[Will depend on client]

Releasing to production requires a combination of steps from this repository and the `<infrastructure repository>`

`[Update this based on the project]` [insert ci-cd process image]

- Manually create a tagged release of the dataform repository

- Update `prod/prod.tfvars` in infra repository
    - Gitcommitish for the workflows needs to be the same as the tagged commit

- Create a prod release of the infrastructure repository

- Check the execution logs on the prod workflow or the prod dataform repository to ensure that it has run successfully

- Run the full refresh (if necessary)

- Manually delete tables if necessary (when partitioning/clustering is changed)

## Project Resources
**IMPORTANT** Please familiarise yourself with the project set up and design approaches if this is your first time working in the data warehouse:
- [High Level Solution Design](url)
- [Data Modelling Approach (please also see related child pages)](url)
- [Data Lake Catalogue](url)
- [Environments, ELT Framework and all things Dataform (please also see related child pages)](url)
## Set Up Guidelines
Please see the links below for set up guidelines, including local set up:
- [Dataform Project Set up](url)
- [Dataform Developer Guidance](url)
- [DWH Transformation Principles](url)
## Ways of Working Guidelines
**IMPORTANT** Please carefully read these guidelines and ensure that you have followed the correct protocols for developing models in the data warehouse:
- [Ways of Working Guidelines for DWH Project](url)
- [IMPORTANT: Dataform Developer Checklist](url)

