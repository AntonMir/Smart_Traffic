import { useState, useEffect } from 'react'
// castom hook
import { useHttp } from '@hooks/http.hook.js'
import { useMessage } from '@hooks/message.hook.js'
// config
import config from '@config/config.js'
// components
import Text from '@feedbackForm/elements/Text.js'
// anim on scroll
import 'aos/dist/aos.css'
// styled
import styled from 'styled-components'

// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const text = textContent.feedbackForm


export default function FeedbackForm() {

    // кастомный хук для вывоа ошибки
    const message = useMessage()

    // кастомный хук для отправки данных
    const { error, request, clearError } = useHttp()

    // how many seconds need wait
    const waitingInterval = 10

    // state для name, email и question
    // prohibition - запрет
    const [form, setForm] = useState({
        name: '',
        email: '',
        question: '',
        lang: config.appLang,
        appName: config.appName
    })
    const [prohibitionSending, setProhibitionSending] = useState(false)
    const [counter, setCounter] = useState(10)

    // обработаем ошибку
    useEffect(() => {
        message(error?.RU)
        clearError()
    }, [error, message, clearError])

    // заводим счетчик
    useEffect(() => {
        let timer
        if (prohibitionSending && counter >= 0) {
            timer = setTimeout(() => setCounter((counter) => counter - 1), 1000)
        }
        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [prohibitionSending, counter])

    // сохраняем в наш state name, email и question
    const changeUserData = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    // возвращаем доступ к отправке данных и откатываем счетчик обратно до "10"
    const accessSending = () => {
        setProhibitionSending(false)
        setCounter(10)
    }

    // вызывает хук useHttp, отправляет запрос на сервер,
    // получает ответ в виде промиса и выводит его на экран
    const sendQuestion = async () => {
        try {
            const data = await request(`${config.PostServerURL}`, 'POST', { ...form })
            // очищаем форму
            setForm({ name: '', email: '', question: '', lang: config.appLang, appName: config.appName })
            // выводим ответ от сервера
            message(config.appLang === 'RU' ? data?.message?.RU : data?.message?.EN)
            // после отправки запрещаем на время повторную отправку
            setProhibitionSending(true)
            setTimeout(() => {
                accessSending()
            }, waitingInterval * 1000)
        } catch (error) {
            message(error.message);
        }
    }

    return (
        <FeedbackFormBackground
            data-aos='fade-up'
            data-aos-anchor-placement="top-center"
        >
            <FeedbackFormStyled>
                <Text />
                <Form>
                    <H2>{text[1].title}</H2>
                    <InputName
                        placeholder={text[1].name}
                        id="feedback-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={changeUserData}
                    />
                    <InputEmail
                        placeholder={text[1].email}
                        id="feedback-email"
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={changeUserData}
                    />
                    <Question
                        placeholder={text[1].question}
                        id="feedback-question"
                        type="text"
                        name="question"
                        autoComplete="off"
                        value={form.question}
                        onChange={changeUserData}
                    />
                    <Button onClick={sendQuestion} disabled={prohibitionSending}>
                        {config.appLang === 'RU' ? 'Отправить' : 'Send'}
                    </Button>
                    <p style={{ opacity: `${prohibitionSending ? '1' : '0'}` }}>
                        {config.appLang === 'RU'
                            ? `Повторная отправка будет доступна через ${counter} секунд`
                            : `Resubmitting will be available in ${counter} seconds`}
                    </p>
                </Form>
                {/* <BlueRectangle /> */}
            </FeedbackFormStyled>
        </FeedbackFormBackground>
    )
}

const FeedbackFormBackground = styled.div`
    // background-color: #e6f3ff;
    z-index: -1;
    margin: 30px 0 100px;
    padding: 0;

    @media (max-width: 991px) {
        margin: 0 0 50px;
    }
`
const FeedbackFormStyled = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1440px;

    @media (max-width: 1599px) {
        max-width: 1140px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 0 2%;
    }

    @media (max-width: 991px) {
        max-width: 750px;
    }

    @media (max-width: 800px) {
        padding: 0 2%;
    }
    @media (max-width: 600px) {
        padding: 0 2% 0;
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    padding: 0;
    margin: 50px auto 0;
    border: 1px solid #274557;
    border-radius: 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    background: #fff;

    @media (max-width: 1599px) {
        width: 60%;
    }
    @media (max-width: 991px) {
        width: 90%;
        padding: 0 40px 0;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`

const H2 = styled.h2`
    color: rgba(0, 146, 168, 1);
    font-size: calc(0.5vw + 15px);
    // margin: 30px 0 20px 0;
    font-weight: bold;
    letter-spacing: -0.032em;

    // & > span {
    //     background: #4bcbe4;
    //     padding: 4px 1px 4px 12px;
    //     margin: 0 -1px 0 0;
    // }

    @media (min-width: 1920px) {
        font-size: 30px;
    }

    @media (max-width: 991px) {
        max-width: 100%;
        margin: 20px 0;
        font-size: calc(1.2vw + 16px);
    }

    @media (max-width: 600px) {
        max-width: 100%;
        margin: 20px 0 0;
    }
`

const InputName = styled.input`
    margin-bottom: 20px !important;
    background-color: #fff !important;
    color: #000;
    max-width: 60%;
    padding: 0 20px !important;
    opacity: 0.8;
    border: 1px solid #0092a8 !important;
    border-radius: 5px !important;
    transition: all 0.3s ease;
    &:focus {
        border: 1px solid #00b0d2 !important;
        box-shadow: none !important;
    }
    @media (max-width: 991px) {
        max-width: 84%;
    }
    @media (max-width: 450px) {
        max-width: calc(100% - 41px);
    }
`
const InputEmail = styled.input`
    margin-bottom: 20px !important;
    background-color: #fff !important;
    color: #000;
    max-width: 60%;
    padding: 0 20px !important;
    opacity: 0.8;
    border: 1px solid #00b0d2 !important;
    
    border-radius: 5px !important;
    transition: all 0.3s ease;
    &:focus {
        border: 1px solid #00b0d2 !important;
        box-shadow: none !important;
    }
    @media (max-width: 991px) {
        max-width: 84%;
    }
    @media (max-width: 450px) {
        max-width: calc(100% - 41px);
    }
`

const Question = styled.textarea`
    background-color: #fff !important;
    padding: 20px;
    color: #000;
    height: 150px;
    max-height: 1000px;
    max-width: calc(60% + 40px);
    min-width: 30%;
    opacity: 0.8;
    border: 1px solid #0092a8 !important;
    border-radius: 5px !important;
    &:focus-visible {
        border: 1px solid #00b0d2 !important;
        box-shadow: none !important;
        outline: none !important;
    }
    &::-webkit-input-placeholder {
        font-size: 17px;
    }
    &::-moz-placeholder {
        font-size: 17px;
    }
    &:-ms-input-placeholder {
        font-size: 17px;
    }
    &:-moz-placeholder {
        font-size: 17px;
    }
    @media (max-width: 991px) {
        max-width: calc(84% + 40px);
    }
    @media (max-width: 450px) {
        max-width: calc(100%);
    }
`

const Button = styled.button`
    padding: 15px 45px 17px;
    margin: 25px 0 0 0;
    font-size: 20px;
    color: #fff;
    background-color: #ff4a1e;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border: none;

    &:focus {
        background-color: #ff4a1e;
    }
    &:active {
        box-shadow: 0 0 1px #000;
        background-color: #ff4a1e;
    }
    &:disabled {
        opacity: 0.5;
        background-color: gray;
    }

    @media (max-width: 991px) {
        margin: 25px 0 0 0;
        font-size: 15px;
    }
`
