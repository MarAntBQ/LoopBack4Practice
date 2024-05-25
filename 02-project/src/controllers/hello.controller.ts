import {get} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    return "Hello World";
  }
  @get('/hello2')
  hello2(): string {
    return "Hello World";
  }
}
