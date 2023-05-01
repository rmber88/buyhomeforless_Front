// import React, { Component } from 'react';
// import { Accordion, Card, NavLink } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import contactinfo from '../../../data/contactinfo.json';

// class Faqs extends Component {
//     render() {
//         return (
//             <div className="section">
//                 <div className="container">
//                     <div className="section-title-wrap section-header">
//                         <h5 className="custom-primary">FAQ</h5>
//                         <h2 className="title">FAQ Pricing</h2>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-8 mb-lg-30">
//                             <Accordion defaultActiveKey="0" className="with-gap">
//                                 <Card>
//                                     <Accordion.Collapse eventKey="0" className="collapseparent">
//                                         <Card.Body>
//                                             <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
//                                             tempor,
//                                             sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
//                                             </p>
//                                             <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
//                                             </p>
//                                             <ul className="acr-list mb-0">
//                                                 <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
//                                                 <li> Many desktop publishing packages and web page editors now use Lorem Ipsum </li>
//                                                 <li> There are many variations of passages of Lorem Ipsum </li>
//                                                 <li> Internet tend to repeat predefined chunks as necessary </li>
//                                             </ul>
//                                         </Card.Body>
//                                     </Accordion.Collapse>
//                                     <Card.Header>
//                                         <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
//                                             How can I start with buying a home?
//                                             </Accordion.Toggle>
//                                     </Card.Header>
//                                 </Card>
//                                 <Card>
//                                     <Accordion.Collapse eventKey="1" className="collapseparent">
//                                         <Card.Body>
//                                             <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
//                                             tempor,
//                                             sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
//                                             </p>
//                                             <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
//                                             </p>
//                                             <ul className="acr-list mb-0">
//                                                 <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
//                                                 <li> Many desktop publishing packages and web page editors now use Lorem Ipsum </li>
//                                                 <li> There are many variations of passages of Lorem Ipsum </li>
//                                                 <li> Internet tend to repeat predefined chunks as necessary </li>
//                                             </ul>
//                                         </Card.Body>
//                                     </Accordion.Collapse>
//                                     <Card.Header>
//                                         <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
//                                             Is the service free?
//                                             </Accordion.Toggle>
//                                     </Card.Header>
//                                 </Card>
//                                 <Card>
//                                     <Accordion.Collapse eventKey="2" className="collapseparent">
//                                         <Card.Body>
//                                             <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
//                                             tempor,
//                                             sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
//                                             </p>
//                                             <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
//                                             </p>
//                                             <ul className="acr-list mb-0">
//                                                 <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
//                                                 <li> Many desktop publishing packages and web page editors now use Lorem Ipsum </li>
//                                                 <li> There are many variations of passages of Lorem Ipsum </li>
//                                                 <li> Internet tend to repeat predefined chunks as necessary </li>
//                                             </ul>
//                                         </Card.Body>
//                                     </Accordion.Collapse>
//                                     <Card.Header>
//                                         <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
//                                             How many agents can I have at once?
//                                             </Accordion.Toggle>
//                                     </Card.Header>
//                                 </Card>
//                             </Accordion>
//                         </div>
//                         <div className="col-lg-4 infographics-5">
//                             {contactinfo.slice(0, 2).map((item, i) => (
//                                 <div key={i} className="acr-infographic-item">
//                                     <i className={"flaticon-" + item.icon + ""} />
//                                     <div className="acr-infographic-item-body">
//                                         <h5>{item.title}</h5>
//                                         <p>{item.text}</p>
//                                         <Link to={item.btnurl} className="btn-custom secondary btn-sm">{item.btntext}</Link>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Faqs;

/////////////////////////////////////////////////       Functional Component          ///////////////////////////////////////////////

import React from "react";
import { Accordion, Card, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import contactinfo from "../../../data/contactinfo.json";

const Faqs = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">FAQ</h5>
          <h2 className="title">FAQ</h2>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-lg-30">
            <Accordion defaultActiveKey="0" className="with-gap">
              <Card>
                <Accordion.Collapse eventKey="0" className="collapseparent">
                  <Card.Body>
                    <p>
                      {" "}
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                    <p>
                      {" "}
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod.
                    </p>
                    <ul className="acr-list mb-0">
                      <li>
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </li>
                      <li>
                        {" "}
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum{" "}
                      </li>
                      <li>
                        {" "}
                        There are many variations of passages of Lorem Ipsum{" "}
                      </li>
                      <li>
                        {" "}
                        Internet tend to repeat predefined chunks as necessary{" "}
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                    How can I start with buying a home?
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="1" className="collapseparent">
                  <Card.Body>
                    <p>
                      {" "}
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                    <p>
                      {" "}
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod.
                    </p>
                    <ul className="acr-list mb-0">
                      <li>
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </li>
                      <li>
                        {" "}
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum{" "}
                      </li>
                      <li>
                        {" "}
                        There are many variations of passages of Lorem Ipsum{" "}
                      </li>
                      <li>
                        {" "}
                        Internet tend to repeat predefined chunks as necessary{" "}
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                    Is the service free?
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="2" className="collapseparent">
                  <Card.Body>
                    <p>
                      {" "}
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </p>
                    <p>
                      {" "}
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod.
                    </p>
                    <ul className="acr-list mb-0">
                      <li>
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </li>
                      <li>
                        {" "}
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum{" "}
                      </li>
                      <li>
                        {" "}
                        There are many variations of passages of Lorem Ipsum{" "}
                      </li>
                      <li>
                        {" "}
                        Internet tend to repeat predefined chunks as necessary{" "}
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                    How many agents can I have at once?
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="3" className="collapseparent">
                  <Card.Body>
                    <p>
                      {" "}
                      You don’t need to be in Thailand to purchase a property
                      from us. We can assist you online and arrange funding from
                      your country to sign all the documents. We can arrange a
                      notary public through your embassy and get everything done
                      while you are in your country. If you want to assign a
                      nominee to assist you, we can work with your family and
                      friend to get all the transactions completed: turnaround
                      is fast. You can be rest assured that you are in good
                      hands with our professional staff and international law
                      firms to assist you throughout the process.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="3">
                    Do you need to be in Thailand to purchase a property?
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="4" className="collapseparent">
                  <Card.Body>
                    <p>
                      {" "}
                      Yes, you can buy certain properties in Thailand. If you
                      request to buy land or residential property in Thailand,
                      we can arrange a certain free hold right for you to own
                      land or property in Thailand. Our real estate
                      international law firm has helped thousands of foreign
                      clients purchase property in Thailand. Their specialty in
                      real estate laws is second to none and they can help you
                      buy your dream home in Thailand legally.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="4">
                    If I am a foreigner, can I buy property in Thailand?
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="5" className="collapseparent">
                  <Card.Body>
                    <p>
                      {" "}
                      Yes, you can receive a permanent resident visa in Thailand
                      if you invest over ten million baht in any business or
                      property. There are several types of visas that the Thai
                      government issues to foreign investment for long term stay
                      or permanent residency. Our attorney can assist you with
                      your visa needs and help you with long term stays and
                      property rights.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="5">
                    Can you receive a permanent resident visa in Thailand?
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="6" className="collapseparent">
                  <Card.Body>
                    <p>
                      {" "}
                      Yes, of course. If you have proof of employment and bank
                      statements, we can help approve your loans through our
                      partner financial institution that has a lot of experience
                      in international loans. We have funded thousands of
                      foreigner and expat in the recent years. Our company’s
                      uniqueness is that we understand what it takes to get your
                      loans approved through our local bank and even your own
                      bank overseas if you prefer. Our teams of expert loans
                      processing staff can work directly with your bank to help
                      ease all the difficulties that you may face.
                    </p>
                    <p>
                      {" "}
                      This is why we are the number one real estate company in
                      Thailand, who understands foreigners and expats that face
                      difficulties in purchasing a home in Thailand through
                      local banks. Our partner financial institution is on
                      standby to help you during your loans and escrow
                      transactions. You can be rest assured that we can get your
                      dream home approved.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="6">
                    If I am a foreigner, can I get a mortgage loan in Thailand?
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Collapse eventKey="7" className="collapseparent">
                  <Card.Body>
                    <p>
                      {" "}
                      Buyhomeforless.com have thousands of properties from
                      single residences and hotels to apartments, condos,
                      resorts and even land throughout Thailand. Every property
                      that we choose to be listed on our website is fully
                      audited to ensure that they are safe, secure, and can be
                      legally transferred. In essence, we ensure that every
                      property listed with us is problem free in terms of
                      quality, price, and transfer of ownership—legally and
                      worry free. Every property that we sell is certified
                      through our company. We stand behind every deal that we
                      close.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                  <Accordion.Toggle as={NavLink} variant="link" eventKey="7">
                    Why do you need to buy property through Buyhomeforless.com?
                  </Accordion.Toggle>
                </Card.Header>
              </Card>
            </Accordion>
          </div>
          <div className="col-lg-4 infographics-5">
            {contactinfo.slice(0, 2).map((item, i) => (
              <div key={i} className="acr-infographic-item">
                <i className={"flaticon-" + item.icon + ""} />
                <div className="acr-infographic-item-body">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <Link
                    to={item.btnurl}
                    className="btn-custom secondary btn-sm"
                  >
                    {item.btntext}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
