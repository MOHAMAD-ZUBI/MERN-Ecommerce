import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';

type Props = {}

const PaypalPayment = (props: Props) => {

    const server_url= 'http://localhost:3060'

    const createOrder = (data : any, actions: any) => {
        // Order is created on the server and the order id is returned
        return fetch(`${server_url}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product skus and quantities
            body: JSON.stringify({
                product : {
                    description : "whey protein",
                    cost: "149.95"
                }
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    };

    const onApprove = (data : any, actions : any) => {
        // Order is captured on the server and the response is returned to the browser
        return fetch(`${server_url}/api/orders/${data.orderID}/capture`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            
        })
            .then((response) => {
                console.log(response.json())
            });
    };

    return (
        <PayPalButtons
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    )
}

export default PaypalPayment;
