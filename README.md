# React Modern Tooltip

> **React Modern Tooltip** is a informative message or custom objects that appears when user interacts with item.
> This package designed for using with **ReactJS** and **Next.Js** project.

[![NPM](https://img.shields.io/npm/v/react-modern-tooltip.svg)](https://www.npmjs.com/package/react-modern-tooltip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://standardjs.com)

`
Detailed documentation is coming soon.
`

## Installation

#### With NPM

```bash
npm install --save react-modern-tooltip
```

## Usage

> 1- Require react-modern-tooltip after installation

```jsx
import Tooltip from 'react-modern-tooltip'
import 'react-modern-tooltip/dist/tooltip.css'
```

> 2- Example Usage

```jsx
<Tooltip
  placement='topStart'
  color='blue'
  content='Developers love React Modern Tooltip'
>
  Tooltip
</Tooltip>
```

## Options

| Prop              | Type            | Default | Description                                           |
| :---------------- | :-------------- | :------ | :---------------------------------------------------- |
| `content`         | `string/object` | `null`  | Content of the Tooltip to display **Required**        |
| `color`           | `string`        | `red`   | Tooltip background color **Required**                 |
| `placement`       | `string`        | `top`   | Tooltip placement relative to the target **Required** |
| `shadow`          | `boolean`       | `false` | Display shadow effect                                 |
| `focus`           | `boolean`       | `false` | Keeps open when tooltip target hovered                |
| `rounded`         | `boolean`       | `true`  | Border radius Tooltip                                 |
| `block`           | `boolean`       | `false` | Makes tooltip target full width relative to parent    |
| `offset(px)`      | `number`        | `10`    | Tooltip space relative to target                      |
| `arrowOffset(px)` | `number`        | `15`    | Space to near edge of Tooltip arrows.                 |
| `trigger`         | `string`        | `hover` | Tooltip trigger mode                                  |
| `className`       | `string`        | `null`  | Add target classname                                  |
| `popupClassName`  | `string`        | `null`  | Add tooltip classname                                 |

## PropTypes

#### Color

```jsx
oneOf([
  'red',
  'yellow',
  'orange',
  'green',
  'purple',
  'blue',
  'turqoise',
  'cyan',
  'gray',
  'white'
])
```

#### Placement

```jsx
oneOf([
  'top',
  'topStart',
  'topEnd',
  'left',
  'leftStart',
  'leftEnd',
  'bottom',
  'bottomStart',
  'bottomEnd',
  'right',
  'rightStart',
  'rightEnd'
])
```

#### Trigger

```jsx
oneOf(['click', 'hover'])
```

## License

MIT © [necatayhan](https://github.com/necatayhan)
