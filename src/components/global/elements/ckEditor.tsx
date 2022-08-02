import { FC, memo } from 'react'
import {  CKEditor  } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

interface Props {
    keyname: string,
    value: string,
    inputHandler: any
}

const CKEditorElement: FC<Props> = ({keyname, value, inputHandler}) => {
    return (
        <CKEditor
            config={{language: 'fa', toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote']}}
            editor={ClassicEditor} 
            data={value} 
            onBlur={(event: any, editor: any) => inputHandler(keyname, editor.getData())}
        />
    )
}

export default memo(CKEditorElement)