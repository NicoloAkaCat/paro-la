import { State, type Char } from './char'

export const getAlphabet = (): Char[] => [
  { char: 'q', state: State.GUESS },
  { char: 'w', state: State.GUESS },
  { char: 'e', state: State.GUESS },
  { char: 'r', state: State.GUESS },
  { char: 't', state: State.GUESS },
  { char: 'y', state: State.GUESS },
  { char: 'u', state: State.GUESS },
  { char: 'i', state: State.GUESS },
  { char: 'o', state: State.GUESS },
  { char: 'p', state: State.GUESS },
  { char: 'a', state: State.GUESS },
  { char: 's', state: State.GUESS },
  { char: 'd', state: State.GUESS },
  { char: 'f', state: State.GUESS },
  { char: 'g', state: State.GUESS },
  { char: 'h', state: State.GUESS },
  { char: 'j', state: State.GUESS },
  { char: 'k', state: State.GUESS },
  { char: 'l', state: State.GUESS },
  { char: 'z', state: State.GUESS },
  { char: 'x', state: State.GUESS },
  { char: 'c', state: State.GUESS },
  { char: 'v', state: State.GUESS },
  { char: 'b', state: State.GUESS },
  { char: 'n', state: State.GUESS },
  { char: 'm', state: State.GUESS }
]

export const getStateMatrix = () => [
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ],
  [
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS },
    { char: '', state: State.GUESS }
  ]
]
