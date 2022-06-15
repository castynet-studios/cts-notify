# Dev Guide

## installation

run `npm install --legacy-peer-deps`

> ❗️ Don't use `yarn`, `npm i` or `npm install`. They cannot resolve the dependencies correctly in this case.

### But Why?

Storybook has a peer dependency to `@mdx-js/react` that uses react@17. Until the package is updated you have to install it with `--legacy-peer-deps`

## Starting Development Environment

run `npm run storybook`

## Running Tests

run `npm run test`
