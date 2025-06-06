import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function ExcelExport (data, fileName) {

  const filteredData = data.map(({id, msisdn, ...remainingData}) => remainingData)
  // const data = [
  //   { name: 'John', age: 30 },
  //   { name: 'Jane', age: 25 },
  // ];

  const worksheet = XLSX.utils.json_to_sheet(filteredData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(dataBlob, `${fileName}.xlsx`);
};
