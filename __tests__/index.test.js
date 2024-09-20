import reverse from '../src/index.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { test, expect } from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('reverse', () => {
  expect(reverse('string')).toEqual('gnirts');
  expect('').toEqual('');
});

test('reverse with log', () => {
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

  const text = readFile('input.txt');
  const result = readFile('output.txt');

  expect(reverse(text)).toEqual(result);
});