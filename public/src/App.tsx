import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CorrectAnswer } from './CorrectAnswer';
import { Results } from './Results';
import { Question } from './Question';
import { ICorrectAnswer, IQuestion } from './entities';

function App() {
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [index, setIndex] = useState<number>(-1);
    const [total, setTotal] = useState<number>(0);
    const [completed, setCompleted] = useState<boolean>(false);
    const [question, setQuestion] = useState<IQuestion>();
    const [answered, setAnswered] = useState<boolean>(false);
    const [correctAnswer, setCorrectAnswer] = useState<ICorrectAnswer>();
    const [totalResults, setTotalResults] = useState<number>(0);

    useEffect(() => {
        fetch('/db.json')
            .then((r) => r.json())
            .then((all) => {
                setQuestions(all.questions);
                setTotal(all.questions.length);
                setIndex(0);
            });
    }, []);

    useEffect(() => {
        setQuestion(questions[index]);
        setAnswered(false);
    }, [index]);

    const userAnswered = (answerId: number) => {
        const correct: boolean = question!.correctId === answerId;
        if (correct) {
            setTotalResults(totalResults + 1);
        }

        setCorrectAnswer({
            correct,
            text: question!.answers.find((a) => a.id === question!.correctId)!.heading,
        })

        setAnswered(true);
    }

    const next = () => {
        if (!questions[index + 1]) {
            setCompleted(true);
            return;
        }

        setIndex(index + 1);
    }

    const reset = () => {
        setTotalResults(0);
        setCompleted(false);
        setIndex(0);
    }

    return (
        <div className="wrapper">
            <Header index={index} total={total}/>

            <div className="main">
                {
                    !completed
                        ?
                        <div className="rows">
                            {question && <Question question={question} answered={userAnswered}/>}
                            {answered && correctAnswer && <CorrectAnswer answer={correctAnswer} next={next}/>}
                        </div>
                        :
                        <Results correct={totalResults} total={total} reset={reset}/>
                }
            </div>

            <Footer/>
        </div>
    );
}

export default App;
