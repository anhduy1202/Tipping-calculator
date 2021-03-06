import { useState } from "react";
import CheckOut from "./CheckOut";
import icon from './images/icon-person.svg';

const Calculator = (props) => {
    const [bill, setBill] = useState('')
    const [people, setPeople] = useState('');
    const [tip, setTip] = useState(0);
    const [total, setTotal] = useState(0);
    const [placeholder, setPlaceHolder] = useState(0);




    const calTip = (num) => {
        if (people > 0) {
            num = num / 100;
            let totalTip = (bill * num) / people;
            let totalMoney = (bill / people) + totalTip;
            totalTip = totalTip.toFixed(2);
            totalMoney = totalMoney.toFixed(2);
            setTip(totalTip);
            setTotal(totalMoney);
        }

    }
    const displayBill = (num) => {

        setBill(num);


        if (num >= 0 && people == 0) {


            setTotal(num);
        }
        else if (num >= 0 && people > 0) {

            setTotal(num / people);
        }
    }
    const displayPeople = (ppl) => {

        setPeople(ppl);
        setTotal((bill / ppl).toFixed(2));
    }
    const Reset = () => {
        setBill('');
        setTotal(0);
        setPeople('');
        setTip(0);
        setPlaceHolder(0);
    }



    return (
        <main className="calculator flex">
            <article className="desktop-container">
                <section className="calculator-bill">
                    <p className="bill"> Bill </p>
                    <div className="bill-input flex">
                        <label htmlFor="bill"> $ </label>
                        <input className="bill-input" type="text"
                            lang="en"
                            inputMode="decimal"
                            required
                            name="bill"
                            placeholder={placeholder}
                            value={bill}
                            onChange={(e) => displayBill(e.target.value)}
                        />


                    </div>
                </section>
                <section className="tips">
                    <header className="tips-header">
                        Select Tip %
                    </header>

                    <section className="percents grid">
                        <p className="box5" onClick={() => calTip(5)}> 5% </p>
                        <p className="box10" onClick={() => calTip(10)}> 10%</p>
                        <p className="box15" onClick={() => calTip(15)}> 15%</p>
                        <p className="box25" onClick={() => calTip(25)}> 25%</p>
                        <p className="box50" onClick={() => calTip(50)}> 50%</p>

                        <input type="text" className="custom"
                            name="custom"
                            placeholder="Custom"
                            onChange={(e) => calTip(e.target.value)}
                        />
                    </section>
                </section>
                <section className="people">
                    <header className="people-header">
                        Number of People
                    </header>
                    <section className="peopleInput">
                        <label htmlFor="people">  <img src={icon} /></label>
                        <input type="text"
                            name="people"
                            inputMode="numeric"
                            placeholder={placeholder}
                            value={people}
                            onChange={(e) => displayPeople(e.target.value)}

                        />

                    </section>
                </section>
            </article>

            <CheckOut money={bill} tips={tip} people={people} total={total} reset={() => Reset()} />

        </main>
    );
}

export default Calculator;
