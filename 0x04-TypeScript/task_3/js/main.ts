/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

export const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
}

export const newRowID: RowID = CRUD.insertRow(row);
export const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);