# HSDM UI

## Getting Started
There is a [comprehensive quick start guide in the Storybook Documentation](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/welcome/quickStart/DOC.md) to setting up an Insights environment complete with:
- This repository
- [Insights Chroming](https://github.com/RedHatInsights/insights-chrome)
- [Insights Proxy](https://github.com/RedHatInsights/insights-proxy)


## Run developer setup
1. Use https://github.com/RedHatInsights/insights-proxy/blob/master/scripts/patch-etc-hosts.sh to patch your /etc/hosts

2. ```docker-compose up```

    - starts webpack bundler and serves the files with webpack dev server
    - every code change will be visible inside container immediately
