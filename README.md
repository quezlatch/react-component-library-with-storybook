# React component library with storybook, tailwind and anything else that seems useful

A step by step investigation to figure out how to build a react component library that can be published.
Note, this is more about the wiring that an actual useful UI library.

## Notes

### General

- Dear god! The node ecosystem. Why does nothing just work?
- And why does each version of something work differently?
- `ui-lib.css` is extracted into it's own file and must be included separately. Is maybe a better way?
- if you're using tailwind at the client use a preset instead of importing css
- using tailwind-variants for, er, variants. bleeds through in the types so how to resolve this...

### React

- Didn't use a template. Just included the packages

### Storybook

- Used `npx sb init`

### Tailwind

- I just really like tailwind...
- see **sample** for how config is inherited
- preset has content configured to scan `ui-lib` for usage
- added classRegex to settings for tailwind variants

### Rollup

- Extract CSS rather than embedding in bundle so that SSR doesn't break it. Not sure this is the best approach though...

### Typescript

- Used `npx tsc init`
- Not using `baseUrl` cos it looks nice but it isn't half fiddly. And docs imply it shouldn't be used willy nilly

### NextJs

- Should be a good work out for a nested sample app
- SSR means the embedded tailwind css doesn't make it to browser (i think)
- Explicitly importing the ui-lib css
- Now using tailwind presets. nice!
