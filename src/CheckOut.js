const CheckOut = (props) => {
    const { money, tips, people, total, reset } = props;
    return (
        <main className="desktop_checkout">
            <article className="checkout grid">
                <section className="tip-amount">
                    <p className="tip-amount-header">Tip Amount</p>
                    <p className="tip-amount-unit"> /person</p>

                </section>
                <section className="tip-total">
                    {`$ ${tips}`}
                </section>

                <section className="total">
                    <p className="total-header"> Total</p>
                    <p className="total-unit"> /person</p>


                </section>

                <section className="total-money">
                    {`$ ${total}`}
                </section>
                {(money > 0 && people > 0) ? <button className="reset" onClick={reset} > RESET </button>
                    : <button className="cantReset" > RESET </button>

                }


            </article>
        </main>
    );
}

export default CheckOut;