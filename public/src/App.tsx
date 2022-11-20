import React from 'react';

function App() {
    return (
        <div className="wrapper">
            <header className="header primary-container">
                <div className="logo">Quiz!</div>
                <div className="spacer"></div>
                <div className="counter">Вопрос: 2 из 15</div>
            </header>

            <div className="main">
                <div className="rows">
                    <div className="card">
                        <h1 className="heading question__heading">Что такое HTML?</h1>

                        <form className="question__answers rows">
                            <div className="radio-group rows">
                                <label className="form-label radio-group-item">
                                    <input type="radio" name="answer" value="1" checked disabled/>
                                    Язык разметки
                                </label>

                                <label className="form-label radio-group-item">
                                    <input type="radio" name="answer" value="2" disabled/>
                                    Таблицы стилей
                                </label>

                                {/*<label>*/}
                                {/*  <span className="form-label">Ответ</span>*/}
                                {/*  <input className="text-field" type="text"/>*/}
                                {/*</label>*/}
                            </div>

                            <div className="form-footer">
                                <button disabled className="btn--cta btn btn--primary" type="submit">Отправить</button>
                            </div>
                        </form>
                    </div>

                    <div className="correct-answer">
                        <h2 className="heading heading--sub text-success">Верно!</h2>
                        {/*<h2 className="heading heading--sub text-fail">Неверно!</h2>*/}

                        <p>
                            HTML - это язык разметки
                        </p>

                        <button className="btn btn--default" type="button">Далее</button>
                    </div>
                </div>

                {/*<div className="card results">*/}
                {/*  <p className="results__text">Вы ответили корректно на 4 из 15 вопросов!</p>*/}

                {/*  <button type="button" className="btn btn--primary">Начать заново</button>*/}
                {/*</div>*/}
            </div>

            <footer className="footer primary-container">Codemasters International, 2022 &copy;</footer>
        </div>
    );
}

export default App;
