import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '40px auto',
  padding: '40px',
  background: '#18181b',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  lineHeight: '1.8',
  color: '#a1a1aa'
};

const ReturnPolicy = () => {
  return (
    <div style={textualStyle}>
      <h2
        style={{
          color: '#fff',
          marginBottom: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '15px'
        }}
      >
        Return & Refund Policy
      </h2>

      <p style={{ marginBottom: '20px' }}>
        At Shopzy, we want our customers to have a smooth and satisfying
        shopping experience. If you are not satisfied with your purchase,
        you may request a return within 30 days of receiving your order,
        subject to the conditions mentioned below.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        1. Eligibility for Returns
      </h4>

      <p style={{ marginBottom: '15px' }}>
        To be eligible for a return, the product must be unused and in the
        same condition in which it was received. The product should also be
        returned in its original packaging along with the invoice or proof
        of purchase.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        2. Refund Processing
      </h4>

      <p style={{ marginBottom: '15px' }}>
        Once we receive the returned product, it will be inspected. If the
        return is approved, the refund will be processed through the original
        payment method. Refunds may take 5-7 business days to appear in your
        account, depending on your payment provider.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        3. Non-Returnable Products
      </h4>

      <p style={{ marginBottom: '15px' }}>
        Certain products may not be eligible for return, including
        personalized products, digital products, perishable items, or products
        that have been damaged or used after delivery.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        4. Return Shipping
      </h4>

      <p style={{ marginBottom: '15px' }}>
        Customers may be responsible for return shipping charges unless the
        product was received damaged, defective, or incorrect. Any applicable
        restocking or shipping charges will be communicated during the return
        process.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        5. How to Request a Return
      </h4>

      <p>
        To request a return, please contact Shopzy support with your order ID,
        product details, and reason for the return. Our team will review your
        request and provide further instructions.
      </p>
    </div>
  );
};

export default ReturnPolicy;