import { useState } from "react";
import { BlueBtn } from "../components/Btn";
import { RiDeleteBinLine } from "react-icons/ri";
export const Agreement = () => {
  const [add2input, setAdd2input] = useState("");
  console.log(add2input);
  return (
    <>
      <div className=" container">
        <div className="agreemet_top_div">
          <div className="agreemet_title_div text-center">
            <h2>SUBSCRIPTION TERMS FOR DIGITAL SERVICES</h2>
          </div>
          <p>
            These SUBSCRIPTION TERMS FOR DIGITAL SERVICES
            <b> (“Subscription Terms”) </b>
            in addition to the Website terms of use (which can be accessed here:
            <input
              onChange={(e) => setAdd2input(e.target.value)}
              value={add2input}
              className="agreementinput"
              type="text"
              name="add2input"
              style={{ border: "none", borderBottom: "1px solid" }}
            />
            ), represent a legal and binding agreement between the user
            <b> (“User”) </b> of the services provided by Maxlence Digital (OPC)
            Private Limited <b>(“Maxlence”)</b> stating the terms that govern
            Users’ use of Maxlence’s services.
          </p>
          <p>
            Please note that if the User does not agree to these Subscription
            Terms, the User is not entitled to avail of / use Maxlence’s
            services, and any use thereafter shall be unauthorized.
          </p>
          <p>
            Maxlence Digital (OPC) Private Limited, is a part of the MAXLENCE
            CONSULTING GROUP, being a private limited company duly incorporated
            under the Companies Act, 2013 operating under the brand name
            <b> ‘TECNOGEX’ </b>. Throughout these Subscription Terms, Maxlence
            and the User are collectively referred to as <b>“Parties”</b> and
            individually referred to as <b>“Party”</b>.
          </p>
          <div className="agreemet_title_div text-center">
            <h2>PART A: COMMERCIAL TERMS</h2>
          </div>
          <div className="agreemet_title_div">
            <h3>
              <span>1.</span>OBJECTIVE AND SCOPE
            </h3>
          </div>
          <p>
            <span>1.2.</span>These Subscription Terms apply to all services as
            listed on Maxlence’s website <b> (“Services”) </b> purchased by the
            User as provided by Maxlence through its platform and official
            website
            <b> (“Website”) </b>.
          </p>
          <p>
            <span>1.3.</span>
            By purchasing the Services, the User agrees to be bound by these
            Subscription Terms and all terms and conditions incorporated by
            reference therein, including without limitation, the Website Terms,
            Privacy Notice, the Cookie Policy and other applicable policies.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>2.</span>TERM
            </h3>
          </div>
          <p>
            <span>2.1.</span>These Subscription Terms shall be in effect from
            the moment the User purchases the Services and shall remain valid
            until the termination of such Services <b> (“Term”) </b>.
          </p>
          <p>
            <span>2.2.</span> This Subscription Terms shall be renewed on terms
            and conditions as updated by Maxlence from time to time. A notice of
            the same shall be sent to the User.
          </p>
          <p>
            <span>2.3</span>Given the nature of the Services (including, for
            example, website design, maintenance, marketing services, etc.) and
            the User input required (as further described below), Maxlence
            cannot guarantee that the Services will be completed by a specific
            date but Maxlence will use commercially reasonable efforts to
            perform the Services in an efficient and timely manner.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>3.</span>SERVICES
            </h3>
          </div>
          <p>
            <span>3.1.</span>Maxlence shall provide Services in accordance with
            the Service descriptions available on the Website and the scope
            outlined in the welcome email sent to the User.
          </p>
          <p>
            <span>3.2.</span>Maxlence will be unable to modify the scope of the
            User’s original subscription of Services. Requests for additional
            services such as adding pages to the User’s website, subscription to
            new services like search engine optimization, addition of new
            content and features like mailing service etc., new designs or
            content to be placed on the website may be accommodated for an
            additional fee and shall be referred to as
            <b> “Additional Services” </b>.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>4.</span>SUBSCRIPTION FEE & TAXES
            </h3>
          </div>
          <p>
            <span>4.1.</span>In consideration of the Services subscribed to by
            the User under these Subscription Terms, the User shall pay to
            Maxlence a service fee <b> (“Subscription Fee”) </b>.
          </p>
          <p>
            <span>4.2.</span>The quantum of the Subscription Fee shall be as
            specified on the Website in the description of Services. The
            Subscription Fee shall be excluding applicable taxes including the
            Goods and Services Taxes
            <b> (“GST”) </b>, cess, charges, levies, and duties. All applicable
            taxes, duties, cesses, and other statutory levies, including but not
            limited to GST, payable on the Subscription Fee shall be added as
            per applicable taxes to the final billable amount and shall be
            detailed in the invoice at the time of payment.
          </p>
          <p>
            <span>4.3.</span> All payments to be made by the User to Maxlence
            shall be subject to deduction of applicable taxes and other levies
            as per applicable law.
          </p>
          <p>
            <span>4.4.</span> If the User begins to use the Services, however,
            after does not begin using, continues to use, or fails to finalize
            the particulars of the Services, fails to participate, or becomes
            otherwise unresponsive to Maxlence’s requests for specification of
            the User’s preferences, requirements, etc. for a period of two (2)
            months or longer, the project may be considered abandoned and no
            refunds of any kind will be provided by Maxlence to the User.
          </p>
          <p>
            <span>4.5.</span>Delays by Maxlence in delivering the Services will
            not be a reason to delay payment for the Services. If the User fails
            to pay on time, Maxlence may delay or suspend the Services until the
            User account is in good standing. Failure to pay for the Services
            may also result in cancellation of the Services without a refund
          </p>
          <p>
            <span>4.6.</span>Unless otherwise specifically stated in these
            Subscription Terms, the Subscription Fee for the Services is
            nonrefundable. In the event Maxlence terminates the Services under
            these Subscription Terms, the User shall receive a prorated refund
            of any Subscription Fee, provided that such termination is not a
            result of the User’s breach of this Agreement or Maxlence’s Website
            Terms and/or any other policy of Maxlence.
          </p>
          <p>
            <span>4.7.</span>Maxlence may change its Subscription Fees at any
            time. Maxlence will provide the User with advance notice of these
            fee changes via the Services. New Subscription Fees will not apply
            retroactively. If the User does not agree with the fee changes, it
            has the right to reject the change by cancelling the Service before
            the next payment date.
          </p>
          <p>
            <span>4.8.</span>
            <b>Payment Processor: </b> Maxlence uses third party payment
            processors (each, a <b>“Payment Processor”</b> ) for the purpose of
            billing the User. The processing of payments will be subject to the
            terms, conditions, and privacy policies of the Payment Processor, in
            addition to these Subscription Terms. The User agrees to pay
            Maxlence, through the Payment Processor, all charges at the prices
            then in effect for any purchase in accordance with the applicable
            payment terms. User further agrees to make payment using the payment
            method specified in the User Account. Maxlence reserves the right to
            correct, or to instruct Payment Processor to correct, any errors or
            mistakes, even if payment has already been requested or received.
          </p>
          <p>
            <span>4.9.</span>
            <b>Fees For third-party services:</b> Third-party services purchased
            via the Services may be subject to different refund or other
            policies that those third-party services determine, and such
            third-party services may be non-refundable. The purchase terms and
            conditions for such third-party services may be displayed during the
            purchase process, such as through a link to the purchase terms and
            conditions. It's the User’s responsibility to verify its ability to
            purchase, cancel or obtain a refund for such third-party services.
            Maxlence does not offer refunds for purchases of third-party
            services.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>5.</span>USER RESPONSIBILITIES, REPRESENTATIONS & WARRANTIES
            </h3>
          </div>
          <p>
            <span>5.1.</span> <b>Responsibilities:</b> User agrees to perform
            all tasks required and to provide all necessary assistance and
            cooperation to Maxlence in order to complete the Services in a
            timely manner. It is solely the responsibility of the User to
            provide any assets or materials for designing, content creation,
            website building, etc. within five (5) business days of the welcome
            email. To the extent that the performance of any of Maxlence’s
            obligations under these Subscription Terms depends upon User’s
            performance of its obligations, Maxlence is not responsible for any
            delays.
          </p>
          <p>
            <span>5.2.</span>
            <b>Representations & warranties:</b> User represents and warrants
            that any User content that is provided to Maxlence for providing the
            Services is owned by the User, or that the User has permissions from
            the rightful owner to use such intellectual property, and the User
            will hold harmless, protect, and defend Maxlence, its affiliates and
            subcontractors, from any claim or suit arising from Maxlence’s use
            of the such User for providing the Services.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>6.</span>TERMINATION
            </h3>
          </div>
          <p>
            <span>6.1.</span>Maxlence may terminate Services under these
            Subscription Terms with immediate effect if the User: (i) fails to
            pay any Subscription Fee due hereunder; (ii) fails to cooperate with
            Maxlence or hinders Maxlence’s ability to perform the Services;
            (iii) breaches the terms of these Subscription Terms or (iv) as
            deemed fit by Maxlence at its sole discretion. User may discontinue
            the Services via the mechanism provided therein and such
            cancellation of the Services by the User shall be considered
            complete as soon as all the dues, including any due Subscription Fee
            has been paid by the User.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>7.</span>DISCLAIMER
            </h3>
          </div>
          <p>
            <span>7.1</span> THE SERVICES PROVIDED UNDER THIS AGREEMENT ARE
            PROVIDED ON AN “AS IS” AND “AS AVAILABLE BASIS.” EXCEPT AS EXPRESSLY
            PROVIDED IN THIS SECTION, MAXLENCE AND ITS AFFILIATES, EMPLOYEES,
            AGENTS, SUPPLIERS AND LICENSORS DISCLAIM ALL WARRANTIES OF ANY KIND,
            INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY
            OR FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, FOR THE
            SERVICES PROVIDED HEREUNDER. MAXLENCE AND ITS AFFILIATES, EMPLOYEES,
            AGENTS, SUPPLIERS AND LICENSORS MAKE NO REPRESENTATIONS OR
            WARRANTIES (I) THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR FREE
            OR COMPLETELY SECURE; (II) AS TO THE RESULTS THAT MAY BE OBTAINED
            FROM THE USE OF THE SERVICES; OR (III) AS TO THE ACCURACY,
            RELIABILITY OR CONTENT OF ANY INFORMATION PROVIDED THROUGH THE
            SERVICES. MAXLENCE AND ITS AFFILIATES, EMPLOYEES, AGENTS, SUPPLIERS
            AND LICENSORS ARE NOT LIABLE, AND EXPRESSLY DISCLAIM ANY LIABILITY,
            FOR THE CONTENT OF ANY DATA TRANSFERRED EITHER TO OR FROM USERS OR
            STORED BY USERS ON OR THROUGH THE SERVICES. THE TERMS OF THIS
            SECTION SHALL SURVIVE ANY TERMINATION OF THIS AGREEMENT.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>8.</span>LIMITATION OF LIABILITY
            </h3>
          </div>
          <p>
            <span>8.1.</span>MAXLENCE SHALL NOT BE LIABLE FOR NONPERFORMANCE OR
            DELAY IN PERFORMANCE CAUSED BY ANY REASON, WHETHER WITHIN OR OUTSIDE
            OF ITS CONTROL. IN NO EVENT WILL MAXLENCE BE LIABLE TO THE USER OR
            ANY THIRD PERSON FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY,
            INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING FOR ANY LOST
            PROFITS OR LOST DATA ARISING FROM USER’S USE OF THE SERVICES, OR ANY
            CONTENT, WEBSITE OR OTHER MATERIALS ACCESSED OR DOWNLOADED THROUGH
            THE SERVICES, EVEN IF MAXLENCE IS AWARE OR HAS BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            <span>8.2.</span>NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
            HEREIN, MAXLENCE’S LIABILITY TO THE USER OR ANY PARTY CLAIMING
            THROUGH THE USER FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE
            FORM OF THE ACTION, IS LIMITED TO THE AMOUNT PAID, IF ANY, BY THE
            USER TO MAXLENCE FOR THE SERVICES IN THE THREE (3) MONTHS PRIOR TO
            THE INITIAL ACTION GIVING RISE TO LIABILITY. THIS IS AN AGGREGATE
            LIMIT. THE EXISTENCE OF MORE THAN ONE CLAIM HEREUNDER WILL NOT
            INCREASE THIS LIMIT. NO ACTION, REGARDLESS OF FORM, ARISING OUT OF
            THIS AGREEMENT OR OUT OF THE SERVICES MAY BE BROUGHT BY THE USER,
            MORE THAN THREE (3) YEARS AFTER THE EVENT WHICH GAVE RISE TO THE
            CAUSE OF ACTION. SOME JURISDICTIONS DO NOT ALLOW A LIMITATION ON
            LIABILITY FOR NEGLIGENCE THAT CAUSES DEATH OR PERSONAL INJURY AND,
            IN SUCH JURISDICTIONS, MAXLENCE’S LIABILITY SHALL BE LIMITED TO THE
            GREATEST EXTENT PERMITTED BY LAW.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>9.</span>INDEMNIFICATION
            </h3>
          </div>
          <p>
            <span>9.1.</span>INDEMNIFICATIONUser agrees to indemnify, defend and
            hold harmless Maxlence from and against any and all claims, damages,
            losses, liabilities, suits, actions, demands, proceedings (whether
            legal or administrative), and expenses (including, but not limited
            to, reasonable attorney's fees) threatened, asserted, or filed by a
            third party against any of Maxlence arising out of or relating to
            (i) the use of Services, (ii) any breach or violation by User of
            this Agreement; or (iii) any of the User’s acts or omissions
            (including without limitation fraud, negligence or willful
            misconduct), except to the extent any of the foregoing directly
            results from Maxlence’s own gross negligence or willful misconduct.
            The terms of this clause shall survive any termination of this
            Agreement.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>10.</span>DISPUTE RESOLUTION
            </h3>
          </div>
          <p>
            <span>10.1</span>Resolution of any dispute raised under this
            Agreement shall be resolved in the dispute resolution mechanism
            specified in the Website Terms of Maxlence.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>11.</span>COMPLIANCE WITH LAWS
            </h3>
          </div>
          <p>
            <span>11.1</span>User agrees to comply with all applicable laws,
            rules, and regulations, including without limitation all local rules
            where the User is located regarding User content, User websites,
            online activities, email, and User’s overall use of the Services.
            Maxlence makes no representation that the Services are appropriate
            or available for use in every country or jurisdiction. User is fully
            responsible for compliance with all applicable laws that apply to it
            and its business.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>12.</span>FORCE MAJEURE
            </h3>
          </div>
          <p>
            <span>12.1.</span>Maxlence is not in breach of this Agreement or
            liable to the User if there is any total or partial failure of
            performance of the Services resulting from any act, circumstance,
            event or matter beyond Maxlence’s reasonable control. This may
            include where such inability to perform the Services results from
            any act of God, fire, act of government or state or regulation, war,
            civil commotion, terrorism, pandemic, insurrection, inability to
            communicate with third parties for whatever reason, failure of any
            computer dealing or necessary system, failure or delay in
            transmission of communications, failure of any internet service
            provider, strike, industrial action or lock-out or any other reason
            beyond Maxlence’s reasonable control.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>13</span>RELATIONSHIP OF PARTIES
            </h3>
          </div>
          <p>
            <span>13.1.</span>Maxlence and the User are independent contractors,
            and nothing contained in this Agreement places Maxlence and the User
            in a relationship of principal and agent, partners or joint
            venturers. Neither Party has, expressly or by implication, or may
            represent itself as having, any authority to make contracts or enter
            into any agreements in the name of the other party, or to obligate
            or bind the other party in any manner whatsoever.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>14.</span>ASSIGNMENT
            </h3>
          </div>
          <p>
            <span>14.1.</span>User may not assign or transfer this Agreement or
            any of its rights or obligations hereunder, without the prior
            written consent of Maxlence. Any attempted assignment in violation
            of the foregoing provision shall be null and void and of no force or
            effect whatsoever. Maxlence may assign this Agreement and Maxlence’s
            rights and obligations hereunder, and Maxlence may engage
            subcontractors or agents in performing its duties and exercising its
            rights hereunder, without the User’s consent.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>15.</span>WAIVER
            </h3>
          </div>
          <p>
            <span>15.1.</span>No failure or delay by any Party hereto to
            exercise any right or remedy hereunder shall operate as a waiver
            thereof, nor shall any single or partial exercise of any right or
            remedy by any party preclude any other or further exercise thereof
            or the exercise of any other right or remedy. No express waiver or
            assent by any Party hereto to any breach of or default in any term
            or condition of these Subscription Terms shall constitute a waiver
            of or an assent to any succeeding breach of or default in the same
            or any other term or condition of these Subscription Terms.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>16.</span>MODIFICATION BY MAXLENCE
            </h3>
          </div>
          <p>
            <span>16.1.</span>
            <b>Modification of Services:</b> Maxlence reserves the right to
            modify, change, or discontinue any aspect of the Services at any
            time, provided that the User will be notified in advance of any
            material change and given the opportunity to cancel without penalty
            in the event User does not agree to such change.
          </p>
          <p>
            <span>16.2.</span>
            <b>Modification of these Subscription Terms:</b> Maxlence may in its
            sole discretion change or modify these Subscription Terms at any
            time. Maxlence will post a notice of any significant changes to
            these Subscription Terms on the Website for at least thirty (30)
            days after the changes are posted and will indicate on these
            Subscription Terms the date these terms were last revised. Any
            changes or modifications to these Subscription Terms shall be
            effective and binding on the User as of the date indicated in a
            notice posted on this page, together with any options that the User
            may have to accept or reject such changes where required by law or
            as otherwise made available. If no effective date for the changes is
            specified, User’s use of the Services after such changes or
            modifications shall constitute User’s acceptance of these
            Subscription Terms as modified. If User does not agree to abide by
            these Subscription Terms or any changes made to these Subscription
            Terms, the User is not authorized to use or access the Services and
            User’s sole remedy is to cancel the Services.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>17.</span>SEVERABILITY
            </h3>
          </div>
          <p>
            <span>17.1.</span>If any term, clause, or provision hereof is held
            invalid or unenforceable by a court of competent jurisdiction, such
            invalidity shall not affect the validity or operation of any other
            term, clause or provision and such invalid term, clause or provision
            shall be deemed to be severed from these Subscription Terms.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>18.</span>ENTIRE AGREEMENT
            </h3>
          </div>
          <p>
            <span>18.1.</span>These Subscription Terms, including documents
            incorporated herein by reference including Website Terms, Privacy
            Policy, Cookies Policy, and Maxlence’s policies constitutes the
            entire understanding of the Parties in connection with the Services,
            and revokes and supersedes all prior agreements between the Parties
            with respect to the matters covered herein.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>19.</span>GOVERNING LAW
            </h3>
          </div>
          <p>
            <span>19.1.</span>The Subscription Terms shall in all respects be
            governed and interpreted by, and construed in accordance with the
            laws of India, without giving effect to conflict of law principles.
            Subject to Part B of these Subscription Terms, Courts in New Delhi
            shall have sole and exclusive jurisdiction in relation to any
            disputes that arise out of or in relation to this Agreement.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>20.</span>MISCELLANEOUS
            </h3>
          </div>
          <p>
            <span>20.1.</span>
            <b>Additional Documentation:</b> The User shall, on the Maxlence’s
            request, perform any further act or execute, acknowledge, and
            deliver any documents which may be necessary to carry out the
            provisions of these Subscription Terms.
          </p>
          <p>
            <span>20.2.</span>
            <b>Authorization:</b> The Parties are duly authorized and empowered
            in accordance with their respective constituent documents to so sign
            and execute this document on behalf of the Parties for whom they are
            signing. The Parties further acknowledge and agree that these
            Subscription Terms may be executed by electronic signature, which
            shall be considered as an original signature for all purposes and
            shall have the same force and effect as that of an original
            signature.
          </p>
          <p>
            <span>20.3.</span>
            <b>Survival:</b> The responsibilities, duties, indemnities,
            obligations, termination, disclaimer of warranties, dispute
            resolution, limitation of liability, confidentiality, and
            Subscription fee and taxes, and notices clauses in these
            Subscription Terms shall survive the termination or expiry of these
            Subscription Terms.
          </p>
          <p>
            <span>20.4.</span>
            <b>Notices:</b> Any notices shall be served in writing in English
            and served on each Party at its respective address as stated on its
            Account/Website. Notices shall be deemed given: (i) if delivered
            personally, when the person delivering the notice obtains the
            signature of a person or a chop stamp at the registered address;
            (ii) if sent by registered post, except registered air-mail, 2 (two)
            days after posting it; (iii) if sent by registered air-mail, 6 (six)
            days after posting it; and (iv) if sent by email, on completion of
            its transmission.
          </p>
          <div className="agreemet_title_div text-center">
            <h2>PART B: SERVICE LEVEL AGREEMENT</h2>
          </div>
          <div className="agreemet_title_div">
            <h3>
              <span>1.</span>Introduction
            </h3>
          </div>
          <p>
            This service level agreement <b>(“SLA”)</b> describes the levels of
            service that the User will receive from Maxlence. The capitalised
            terms used in this SLA shall have the same meaning ascribed to them
            in this Agreement for Digital Services.
          </p>
          <p>
            This SLA should be read alongside the Website Terms and the
            Agreement between the User and Maxlence. Although the SLA covers key
            areas of the Services and support, other documents may include areas
            not covered by this SLA.
          </p>
          <p>This SLA forms an important part of these Subscription Terms.</p>
          <div className="agreemet_title_div">
            <h3>
              <span>2.</span>Purpose
            </h3>
          </div>
          <p>
            The received Service depends on IT equipment, software, and Services
            (collectively referred to as <b>“the System”</b> ) that are
            provided, maintained, and supported by Maxlence.
          </p>
          <p>
            This SLA sets out what levels of availability and support the User
            will receive through the System. It also explains the circumstances
            in which the availability of Services may be affected and remedies
            for the same.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>3.</span>Services Covered
            </h3>
          </div>
          <p>
            This SLA covers only those Services as are subscribed to by the
            User. The SLA makes no guarantees or representations as to the
            provision or availability of any other service that may be provided
            by Maxlence as an ancillary benefit to its Users.
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>4.</span>Responsibilities
            </h3>
          </div>
          <p>(a) Maxlence’s Responsibilities</p>
          <p>
            Maxlence will provide and maintain the System used by the User.
            Maxlence will make available the System through the Website and
            mobile application. Additionally, Maxlence will:
          </p>
          <p>
            • Ensure relevant software, services and equipment are available to
            the User where necessary.
          </p>
          <p>• Respond to support requests within a reasonable timeframe.</p>
          <p>
            • Take steps to escalate and resolve issues in an appropriate,
            timely manner.
          </p>
          <p>• Maintain good communication with the User at all times.</p>
          <p>(b) User Responsibilities</p>
          <p>
            The User will use Maxlence-provided System as intended. The User
            will be responsible for, and obtain, all consents required under any
            law or regulation in any jurisdiction, relating to the use of the
            System. The Client will ensure, indemnify, and hold harmless
            Maxlence for any violations, real or alleged, of any laws or
            regulations, relating to the use of the System with the User’s
            consumers and customers. Additionally, the USerr will: • Notify
            Maxlence of issues or problems in a timely manner.
          </p>
          <p>
            • Provide Maxlence with access to equipment, software and services
            for the purposes of maintenance, updates and fault prevention.
          </p>
          <p>• Maintain good communication with Maxlence at all times.</p>
          <div className="agreemet_title_div">
            <h3>
              <span>5.</span>Exclusions
            </h3>
          </div>
          <p>
            This SLA is written in good faith. Maxlence will undertake
            commercially possible acts to rectify User’s issues in a timely
            manner. However, there are some exclusions. This SLA does not apply
            to:
          </p>
          <p>
            • Any equipment, software, services, third party or otherwise, or
            any other parts of the System not listed above.
          </p>
          <p>
            • Software, equipment or services not purchased via and managed by
            Maxlence.
          </p>
          <p>Additionally, this SLA does not apply when:</p>
          <p>
            • The problem has been caused by using equipment, software or
            service(s) in a way that is not recommended.
          </p>
          <p>
            • The User has made unauthorized changes to the configuration or set
            up of affected equipment, software or services.
          </p>
          <p>
            • The User has prevented Maxlence from performing required
            maintenance and update tasks.
          </p>
          <p>
            • The issue has been caused by unsupported mobile devices,
            equipment, software or other services.
          </p>
          <p>
            This SLA further does not apply in circumstances that could be
            reasonably said to be beyond Maxlence’s control. This SLA also does
            not apply if the User is in breach of its Agreement with Maxlence
            for any reason (for e.g., late payment of fees, improper use,
            violation of terms, etc.)
          </p>
          <div className="agreemet_title_div">
            <h3>
              <span>6.</span>Service Availability
            </h3>
          </div>
          <p>
            In order to enable the User to do business effectively, Maxlence
            guarantees that certain Services will be available for a certain
            percentage of time as specified below:
          </p>
          <EditableTable />
          <p>
            Except as described otherwise stated herein, Maxlence will provide
            technical support via chat and phone for the Services
            <b> (“Support”)</b>. User will be required to provide as much
            information as possible to aid Maxlence’s investigation into any
            issues or problems. By utilizing Maxlence’s Support, User grants
            Maxlence the permission to access User’s account, if necessary, to
            resolve the issue. User agrees that Maxlence and its agents and
            employees are not liable for any damage resulting from the provision
            of Support.
          </p>
          <p>
            <b>Ineligibility for Support:</b> Maxlence India will not provide
            Support if: (a) User is in breach of this Agreement; (b) the need
            for Support is due to (i) any modification or attempted modification
            of the Services by the User or any third party outside of Maxlence’s
            control, or (ii) User’s failure or refusal to implement changes
            recommended by Maxlence; or (c) User is abusive toward Maxlence’s
            staff in any manner.
          </p>
          <p>
            User agrees and acknowledges that if the User alters or removes this
            server access, Maxlence’s ability to provide Support may be severely
            limited.
          </p>
          <p>
            <b>Response time:</b> When the User raises a support issue with
            Maxlence, Maxlence promises to respond in a timely fashion. Response
            times are measured from the moment the User submits a Support
            request. Response times apply during standard working hours (9am —
            5.30pm) on weekdays only. Subject to the aforementioned limitations,
            Maxlence shall try to respond to Support requests as soon as
            possible.
          </p>
          <p>
            Maxlence recognises that the Maxlence’s use of the System is key to
            the Users. However, Maxlence is unable to provide guaranteed
            resolution times. This is because the nature and causes of problems
            can vary enormously.
          </p>
          <div className="agreemet_title_div">
            <h3>Right of termination</h3>
          </div>
          <p>
            Maxlence recognises that it provides Services that are critical to
            the User’s business. If Maxlence consistently fails to meet the
            Service levels described in this SLA, the User may terminate its
            entire Agreement with Maxlence subject to payment of pro-rated dues
            for Services already rendered.
          </p>
          <p>
            The right of termination is available to the User if Maxlence fails
            to meet the response time more than five times in any single
            calendar month.
          </p>
        </div>
      </div>
      <div className=" Agreement_btn_div">
        <BlueBtn title="submit" />
      </div>
    </>
  );
};

const EditableTable = () => {
  const [inputFields, setInputFields] = useState([{ service: "", uptime: "" }]);
  const addInputField = () => {
    setInputFields((old) => [...old, { service: "", uptime: "" }]);
  };

  return (
    <>
      <div className="agreement_table_div">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Uptime [%]</th>
            </tr>
          </thead>
          <tbody>
            {inputFields.map((row, i) => (
              <tr className="agreement_table_tr" key={i}>
                <td>
                  {/* <input type="text" placeholder="Service Name" /> */}
                  <input
                    type="text"
                    placeholder="Username"
                    name="userName"
                    onChange={(e) => {
                      setInputFields((old) => {
                        let arr = old.slice();
                        arr[i].service = e.target.value;
                        return arr;
                      });
                    }}
                    value={inputFields[i].service}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Uptime"
                    onChange={(e) => {
                      setInputFields((old) => {
                        let arr = old.slice();
                        arr[i].uptime = e.target.value;
                        return arr;
                      });
                    }}
                    value={inputFields[i].uptime}
                  />
                </td>
                {i > 0 ? (
                  <RiDeleteBinLine
                    className="agreement_table_del_btn"
                    onClick={() => {
                      setInputFields((old) => {
                        let arr = old.slice();
                        arr.splice(i, 1);
                        return arr;
                      });
                    }}
                  />
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="Agreement_add_fild_div">
        <button className="BlueBtn" onClick={addInputField}>
          Add Input Field
        </button>
      </div>
    </>
  );
};
