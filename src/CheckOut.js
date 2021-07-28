const CheckOut = (props) => {
    const { money, tips, people, total, reset } = props;
    return (
        <div className="desktop_checkout">
        <div className="checkout grid">
            <div className="tip-amount">
                <p className="tip-amount-header">Tip Amount</p>
                <p className="tip-amount-unit"> /person</p>

            </div>
            <div className="tip-total">
                {`$ ${tips}`}
            </div>

            <div className="total">
                <p className="total-header"> Total</p>
                <p className="total-unit"> /person</p>


            </div>
            
            <div className="total-money">
            {`$ ${total}`}
            </div>
            {(money>0 && people>0)? <button className="reset" onClick={reset} > RESET </button>
             : <button  className="cantReset" > RESET </button>
                
            }
            
               
            </div>
        </div>
    );
}

export default CheckOut;