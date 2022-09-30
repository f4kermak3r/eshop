import { CardElement } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASSES } from "../button/button.component";

import Button from "../button/button.component";

export const PaymentForm = () => {
    return(
        <div>
            <CardElement/>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay now</Button>
        </div>
    )
}

export default PaymentForm;