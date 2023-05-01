import React, { Component } from 'react';

class Calculator extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Total Amount" name="total"  />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Down Payment" name="down-p"  />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Interest Rate" name="interest"  />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Loan Term" name="loan-term"  />
                </div>
                <div className="form-group">
                    <select className="form-control" name="cycle">
                        <option value="Daily">Daily</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <button type="submit" className="btn-custom btn-block" name="button">Calculate</button>
            </form>
        );
    }
}

export default Calculator;