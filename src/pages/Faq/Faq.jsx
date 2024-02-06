import React from "react";
import "./styles/Faq.css";

function Faq() {
  return (
    <>
      <section id="faq">
        <div className="faq__content">
          <div className="faq__heading">
            <h2>M&H Furniture Frequently Asked Questions</h2>
          </div>
          <div className="faq__flex">
            <div className="faq__topics">
              <p>Shipping & Delivery</p>
              <p>Returns & Exchanges</p>
              <p>Product Care & Maintenance</p>
              <p>Ordering & Payment</p>
              <p>Customization Options</p>
              <p>Assembly Instructions</p>
            </div>
            <div className="faq__conditions">
              <p className="faq__last">Last Updated: February 6, 2024</p>
              <h3>1. Shipping & Delivery</h3>
              <p>
                We offer nationwide shipping on all our furniture products.
                Delivery times may vary depending on your location. For more
                information, please visit our Shipping & Delivery page.
              </p>
              <h3>2. Returns & Exchanges</h3>
              <p>
                If you're not completely satisfied with your purchase, we offer
                a hassle-free returns and exchanges policy. Please see our
                Returns & Exchanges page for detailed instructions.
              </p>
              <h3>3. Product Care & Maintenance</h3>
              <p>
                Proper care and maintenance are essential to ensure the
                longevity of your furniture. Refer to our Product Care &
                Maintenance guide for helpful tips and recommendations.
              </p>
              <h3>4. Ordering & Payment</h3>
              <p>
                Ordering from M&H Furniture is simple and secure. We accept
                various payment methods, including credit/debit cards and
                PayPal. Visit our Ordering & Payment page for more details.
              </p>
              <h3>5. Customization Options</h3>
              <p>
                We offer customization options for many of our furniture pieces,
                allowing you to personalize your order to suit your unique style
                and preferences. Contact our customer service team for
                assistance with customization.
              </p>
              <h3>6. Assembly Instructions</h3>
              <p>
                Most of our furniture items require assembly. Detailed assembly
                instructions are provided with each product. If you need further
                assistance, please don't hesitate to reach out to us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
