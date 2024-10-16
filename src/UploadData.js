import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function UploadData({ onDataLoad }) {
    const [file, setFile] = useState(null);
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFile(file);
        readExcel(file);
    }
    const readExcel = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);
            onDataLoad(jsonData);
        }
        reader.readAsArrayBuffer(file);
    }

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            {file && <p>File successfully uploaded: {file.name}</p>}
        </div>
    )
}

export default UploadData;