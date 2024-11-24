# ng-geo-keyboard

<p align="center">
  <img src="logo.png" alt="ng-inf-scroll logo" width="200" />
</p>

The `ng-geo-keyboard` library provides the `GeoKeyboard` directive, which maps English keyboard inputs to Georgian characters in `input` and `textarea` fields. It is simple, standalone, and highly configurable.

## Features

- Automatically converts English keyboard inputs to Georgian characters.
- Allows optional inclusion of non-Georgian symbols.
- Lightweight and easy to integrate into any Angular project.
- Works seamlessly with both `<input>` and `<textarea>` elements.

## Installation

Install the library via npm:

```bash
npm install ng-geo-keyboard
```

## Usage

### Basic Setup

Import the `GeoKeyboard` directive into your Angular application:

```typescript
import { GeoKeyboard } from 'ng-geo-keyboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GeoKeyboard],
})
export class AppComponent {}
```

### Add the Directive

Use the `geoKeyboard` directive in your template:

```html
<input type="text" geoKeyboard /> <textarea geoKeyboard></textarea>
```

### Allow Non-Georgian Symbols

By default, the directive restricts input to Georgian characters. To allow mixed symbols, bind `onlyGeoSymbols` to `false`:

```html
<input type="text" geoKeyboard [onlyGeoSymbols]="false" />
<textarea geoKeyboard [onlyGeoSymbols]="false"></textarea>
```

## API

### Inputs

- `onlyGeoSymbols` (boolean, default: `true`):
  - `true`: Only Georgian characters are allowed.
  - `false`: Non-Georgian symbols are preserved.
