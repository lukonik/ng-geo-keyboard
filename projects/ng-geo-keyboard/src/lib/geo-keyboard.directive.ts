import { Directive, HostListener, input } from '@angular/core';
const mapper = new Map<string, string>([
  ['a', 'ა'],
  ['b', 'ბ'],
  ['g', 'გ'],
  ['d', 'დ'],
  ['e', 'ე'],
  ['v', 'ვ'],
  ['z', 'ზ'],
  ['T', 'თ'],
  ['i', 'ი'],
  ['k', 'კ'],
  ['l', 'ლ'],
  ['m', 'მ'],
  ['n', 'ნ'],
  ['o', 'ო'],
  ['p', 'პ'],
  ['J', 'ჟ'],
  ['r', 'რ'],
  ['s', 'ს'],
  ['t', 'ტ'],
  ['u', 'უ'],
  ['f', 'ფ'],
  ['q', 'ქ'],
  ['R', 'ღ'],
  ['y', 'ყ'],
  ['S', 'შ'],
  ['C', 'ჩ'],
  ['c', 'ც'],
  ['Z', 'ძ'],
  ['w', 'წ'],
  ['W', 'ჭ'],
  ['x', 'ხ'],
  ['j', 'ჯ'],
  ['h', 'ჰ'],
]);

const GEORGIAN_LETTERS = new Set(mapper.values());

@Directive({
  selector: 'input[geoKeyboard],textarea[geoKeyboard]',
  standalone: true,
})
export class GeoKeyboard {
  onlyGeoSymbols = input(true);

  @HostListener('input', ['$event'])
  beforeInput($event: InputEvent) {
    const input = $event.target as HTMLInputElement;
    const value = input.value;

    let transformed = '';

    for (let i = 0; i < value.length; i++) {
      const currentChar = value[i];
      const foundChar = mapper.get(currentChar);
      if (foundChar === undefined) {
        if (GEORGIAN_LETTERS.has(currentChar)) {
          transformed += currentChar;
        } else if (!this.onlyGeoSymbols()) {
          transformed += currentChar;
        }
      } else {
        transformed += foundChar;
      }
    }

    input.value = transformed;
  }
}
