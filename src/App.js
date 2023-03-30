import React, { useRef } from 'react';

import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RowsDirective,
  RowDirective,
  CellDirective,
  CellsDirective,
  RangeDirective,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
import "./App.css";

function App() {
  const spreadsheetRef = useRef(null);

  const onCreated = () => {
    spreadsheetRef.current.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    spreadsheetRef.current.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
    spreadsheetRef.current.cellFormat({ textAlign: 'center' }, 'A2:B5');
    spreadsheetRef.current.cellFormat({ textAlign: 'center' }, 'D2:D5');
    // To wrap the cells from E2 to E5 range
    spreadsheetRef.current.wrap('E2:E5');
    // To unwrap the H3 cell
    spreadsheetRef.current.wrap('H3', false);
  };
  return (
    <div className='App'>
    <div>
      <SpreadsheetComponent
        ref={spreadsheetRef}
        created={onCreated}
        showFormulaBar={false}
       isReadOnly={true}
      >
        <SheetsDirective >
          <SheetDirective name={'Movie List'} >
            <RowsDirective>
              <RowDirective height={30}  />
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={7} wrap={true} />
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={7} wrap={true} />
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={7} wrap={true} />
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={7} wrap={true} />
                </CellsDirective>
              </RowDirective>
              </RowsDirective>
            <RangesDirective>
              <RangeDirective dataSource={data} />
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={100} index={1} />
              <ColumnDirective width={140} />
              <ColumnDirective width={90} />
              <ColumnDirective width={150} />
              <ColumnDirective width={120} />
              <ColumnDirective width={90} />
              <ColumnDirective width={180} />
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
    </div>
  );
}

export default App;
