import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface Props {
    label?: string;
    onChange?: any;
}

const Ckeditor: React.FC<Props> = ({ label, onChange }) => {
    const [editorData, setEditorData] = useState('');

    const handleEditorChange = (event: any, editor: any) => {
        const data = editor.getData();
        setEditorData(data);
        onChange(data);
    };

    

    return (
        <>
            {label && (
                <label className='block font-bold mb-1'>{label}</label>
            )}
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={handleEditorChange}
            />
        </>
    );
};

export default Ckeditor