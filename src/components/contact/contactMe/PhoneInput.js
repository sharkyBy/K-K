import React, { Fragment } from 'react';

export default function PhoneInput(props) {
  return (
    <Fragment>
      <input
        placeholder="+375 __ ___-__-__"
        required="required"
        // pattern="\+{1,1}\d{3}\s{0,}\(([2]{1}([5]{1}|[9]{1}))|([3]{1}[3]{1})|([4]{1}[4]{1}))\s{0,}\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"

        value={props.value}
        onChange={props.onChange}
      />
    </Fragment>
  )
}
