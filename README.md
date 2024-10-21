<h1 align="center">jhtkoo0426.github.io</h1>
<p align="center">This repository stores various web portfolio designs created throughout my career.</p>

## Prerequisites
The `main` branch stores the default/template portfolio site which you can develop upon. Remember to create a separate branch when creating a new version.

Before starting your development, ensure that there exists a `portfolio/src` directory within the project, which should contain all template files and fonts required for development.

## Development

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli)) to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into the portfolio site's directory and start it up.

    ```shell
    cd portfolio
    gatsby develop
    ```

## Version Control
When you make a patch or version update, ensrue you carry out the following steps:
1. Make a commit to the remote repository;
2. Update the version tag for the repo:
   1. `git tag v<version>`
   2. `git push origin v<version>`
   3. If you aren't sure what the current version tag is, run `git tag -l`
3. Deploy the updated version.
Correct changes will only be made visible from the website after you complete these steps.