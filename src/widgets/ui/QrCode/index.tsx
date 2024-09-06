import { Button, Input, Popup } from '@shared/ui'
import s from './QrCode.module.css'
import { useState } from 'react'
import qr from 'qrcode'

const QrCode = () => {

    const [error, setError] = useState<string | null>(null)
    const [generatedQrCode, setGeneratedQrCode] = useState<string | null>(null)
    const [link, setLink] = useState('')

    return <div className={s.main}>
        <Popup className={s.popup}>
            {generatedQrCode && <>
                <img src={generatedQrCode} />
                <Button
                    variant='primary'
                    size='small'
                    wide
                    onClick={() => {
                        const link = document.createElement('a')
                        link.href = generatedQrCode
                        link.download = 'my-image.png'
                        link.click()
                    }}
                >Download</Button>
            </>}
            <Input
                value={link}
                setValue={setLink}
                placeholder='dypaParavozSaloNeMargarun@gmail.com'
            />
            <div className={s.buttons}>
                <Button
                    onClick={() => {
                        setLink('')
                    }}
                    size='large'
                    variant='secondary'
                    wide
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        qr.toDataURL(link)
                            .then((generated) => {
                                setGeneratedQrCode(generated)
                                setError(null)
                            })
                            .catch((err) => {
                                setError(err.message)
                            })
                    }}
                    size='large'
                    variant='primary'
                    wide={true}
                >Generate Qr </Button>
            </div>
            {error && error}
        </Popup>
    </div>
}

export default QrCode