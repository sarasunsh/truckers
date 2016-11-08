// Presentational Component for the Checkout Form

import {Component} from 'react';


export default (props) => {

    const {submitPayment} = props;

    return(
        <form id="payment-form" role="form" autocomplete="on">
            <span class="payment-errors"></span>

            <div class="form-row">
                <label>
                    <span>Card Number</span>
                    <input type="text" size="20" data-stripe="number" placeholder="•••• •••• •••• ••••" required>
                </label>
            </div>

            <div class="form-row">
                <label>
                    <span>Expiration (MM/YY)</span>
                    <input type="text" size="2" data-stripe="exp_month">
                </label>
                <span> / </span>
                <input type="text" size="2" data-stripe="exp_year">
            </div>

            <div class="form-row">
                <label>
                <span>CVC</span>
                <input type="text" size="4" data-stripe="cvc">
                </label>
            </div>

            <input type="submit" class="submit" value="Submit Payment">
        </form>


    )


}
