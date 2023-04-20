import { Fragment } from 'react'
import React from 'react'

function Invitation({subject,email,invitee,purpose,venue,inviter,guest1,guest2,guest3}) {
  
    return (
        <Fragment>
                <h3>Subject : {subject}</h3>
                <p>To : {email}</p>

                <p>Hi , {invitee}<p/>

                <p>I am having a {purpose} next Friday at my Home . Would you like to come ? It will be fun.Lots of people from my school are coming . you know some of them - {guest1} , {guest2}, {guest3} .</p>

                <p>My house is behind our school , {venue} .</p>

                <p>I hope you will come and see you soon .</p>

                <p>from ,</p>
                <p>{inviter}</p>

            </p>
        </Fragment>
    )
}

export default Invitation;