import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ColumnGridWrap, InputFormik } from '.'

interface Props {
    cols?: string,
    gap?: string
}

const NameFamily: FC<Props> = ({cols = "2", gap = "3"}) => {

    const {i18n: {language}} = useTranslation()

    const getDir = () => language === 'fa' ? 'rtl' : 'ltr'

    return (
        <ColumnGridWrap cols={cols} gap={gap}>
            <InputFormik name="name" dir={getDir()} />
            <InputFormik name="family" dir={getDir()} />
        </ColumnGridWrap>
    )
}

export default NameFamily