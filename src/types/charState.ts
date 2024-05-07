export interface Char {
  char: string
  state: State
}

export enum State {
  RIGHT,
  WRONGPLACE,
  WRONG,
  GUESS
}
