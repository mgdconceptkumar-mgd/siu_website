
"use client";
import { useRef, useState } from "react";


// Icons as SVG components
const FaEnvelope = () => <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>;
const FaFacebookF = () => <svg width="16" height="16" viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>;
const FaInstagram = () => <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>;
const FaLinkedinIn = () => <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>;
const FaTwitter = () => <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>;
const FaYoutube = () => <svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>;
const SiTiktok = () => <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg>;
const FaMapMarkerAlt = () => <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>;

const offices = [
  { title: "Head Office (Dubai)", address: "Office No. 105 & 110 ,Al Fajer Complex Umm Hurair Road, Oud Metha Landmark: Zabeel Furniture Mall Dubai - United Arab Emirates PO Box: 30757" },
  { title: "Abu Dhabi", address: "Office 1402, Abdullah Darwish Building, Al Salam Street, Above WEMART (chinese mart), Opp Nehal hotel - Abu Dhabi" },
  { title: "Sharjah", address: "201, Victoria 1, Corniche St., Al Mujarrah, Sharjah, UAE" },
  { title: "India", address: "South India Shopping Mall, Hyderabad, Telangana 500016, India" },
  { title: "Cambodia", address: "4th Floor, Lion Star Building, 128 Russian Federation Blvd (110), Phnom Penh 120404, Cambodia" },
  { title: "Saudi Arabia", address: "Al Tadamun Al Arabi, Mishrifah, Jeddah 23336, Saudi Arabia" },
];

export default function Footer() {
  
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showRefund, setShowRefund] = useState(false);
  const [showDataProtect, setShowDataProtect] = useState(false);



  
  return (
  <footer className="app-footer" style={styles.footer}>

    <div style={styles.overlay} />

    <div className="container" style={{ position: "relative", zIndex: 1 }}>

       {!showPrivacy && !showTerms && !showCookie && !showDisclaimer && !showRefund && !showDataProtect && (


          <>
            {/* Top Section: Brand & Social */}
        <div style={styles.topSection}>
          <div style={styles.brandContainer}>
            <div style={styles.logoWrapper}>
              <img src="/assets/images/about/21-01.png" alt="MGD Logo" style={styles.logo}/>
            </div>
            <p style={styles.tagline}>Empowering Global Futures</p>
            
            <div style={styles.socialContainer}>
              <a href="https://www.facebook.com/MGDTheCareerStrategist" style={styles.socialLink} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/mgd_thecareer_strategist?igsh=N3k2MjAxMHcycnhw" style={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/mgd-concept-the-career-strategist-0b1660383/" style={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/MGD_Careers" style={styles.socialLink} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="http://tiktok.com/@mgd.concept_career" style={styles.socialLink} aria-label="TikTok">
                <SiTiktok />
              </a>
              <a href="https://www.youtube.com/@mgdconceptthecareerstrategist" style={styles.socialLink} aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Office Locations Grid */}
        <div style={styles.officesSection}>
          <h3 style={styles.sectionTitle}>Our Global Presence</h3>
          <div
  style={styles.officeGrid}
  onMouseEnter={() => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  }}
  onMouseLeave={() => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  }}
>
  <div className="officeGridStatic" style={styles.officeGridStatic}>

  {offices.map((office, i) => (
    <div key={i} className="officeCard" style={styles.officeCard}>

      <div style={styles.cardHeader}>
        <div style={styles.locationBadge}>
          <FaMapMarkerAlt style={styles.badgeIcon} />
        </div>
        <h4 className="officeTitle" style={styles.officeTitle}>
{office.title}</h4>
      </div>

      <p className="officeAddress" style={styles.officeAddress}>
{office.address}</p>

      <a href="mailto:info@mgdconcept.com" style={styles.emailLink}>
        <FaEnvelope style={styles.emailIcon} />
        info@mgdconcept.com
      </a>
    </div>
  ))}
</div>

</div>

        </div>


            <div style={styles.bottomSection}>
              <nav style={styles.footerNav}>
  <a href="/contact-us" style={styles.navLink}>About Us</a>
  <span style={styles.navDivider}>•</span>

  <a href="/contact-us" style={styles.navLink}>Contact</a>
  <span style={styles.navDivider}>•</span>

  <button
    onClick={() => {
      setShowTerms(false);
      setShowCookie(false);
      setShowDisclaimer(false);
      setShowRefund(false);
      setShowDataProtect(false);
      setShowPrivacy(true);
    }}
    style={styles.navButton}
  >
    Privacy Policy
  </button>

  <span style={styles.navDivider}>•</span>

  <button
    onClick={() => {
      setShowPrivacy(false);
      setShowCookie(false);
      setShowDisclaimer(false);
      setShowRefund(false);
      setShowDataProtect(false);
      setShowTerms(true);
    }}
    style={styles.navButton}
  >
    Terms & Conditions
  </button>

  <span style={styles.navDivider}>•</span>

  <button
    onClick={() => {
      setShowPrivacy(false);
      setShowTerms(false);
      setShowDisclaimer(false);
      setShowRefund(false);
      setShowDataProtect(false);
      setShowCookie(true);
    }}
    style={styles.navButton}
  >
    Cookie Policy
  </button>

  <span style={styles.navDivider}>•</span>

  <button
    onClick={() => {
      setShowPrivacy(false);
      setShowTerms(false);
      setShowCookie(false);
      setShowRefund(false);
      setShowDataProtect(false);
      setShowDisclaimer(true);
    }}
    style={styles.navButton}
  >
    Disclaimer
  </button>

  <span style={styles.navDivider}>•</span>

  <button
    onClick={() => {
      setShowPrivacy(false);
      setShowTerms(false);
      setShowCookie(false);
      setShowDisclaimer(false);
      setShowDataProtect(false);
      setShowRefund(true);
    }}
    style={styles.navButton}
  >
    Refund & Cancellation
  </button>

  <span style={styles.navDivider}>•</span>

  <button
    onClick={() => {
      setShowPrivacy(false);
      setShowTerms(false);
      setShowCookie(false);
      setShowRefund(false);
      setShowDisclaimer(false);
      setShowDataProtect(true);
    }}
    style={styles.navButton}
  >
    Data Protection
  </button>
</nav>

              <p className="copyright" style={styles.copyright}>

                © {new Date().getFullYear()} MGD Concept. All Rights Reserved.
              </p>
            </div>
          </>
        )}

        {/* ---- PRIVACY VIEW ---- */}
        {showPrivacy && (
          <div style={styles.privacyWrapper}>

            <h2 style={styles.privacyTitle}>Privacy Policy</h2>
            <p style={styles.date}>Effective: 22/12/25<br/>Last Updated: 22/12/25</p>

            <div style={styles.privacyText}>

  <p style={styles.p}>
    MGD Concept Education & Management Services (“MGD”, “we”, “our”, or “us”)  
    is committed to protecting the privacy, confidentiality, and security of personal data shared with us.
  </p>

  <p style={styles.p}>
    This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you interact with our website, portals, applications, services, and platforms.
  </p>

 <p style={styles.p}>
    By accessing or using our website or services, you consent to the practices described in this Privacy Policy.
  </p>

  <h3 style={styles.h3}>
1. Scope of This Policy</h3>
  <p style={styles.p}>This Privacy Policy applies to:</p>
  <ul style={styles.ul}>
  <li style={styles.li}>Visitors to the MGD website(s)</li>
  <li style={styles.li}>Students, parents, guardians, and professionals</li>
  <li style={styles.li}>Institutional, school, university, and B2B partners</li>
  <li style={styles.li}>Users of MGD portals, dashboards, applications, and testing platforms</li>
  <li style={styles.li}>Event participants, applicants, and inquiry submitters</li>
  </ul>

  <h3 style={styles.h3}>
2. Information We Collect</h3>
  <p style={styles.p}>We may collect the following categories of personal and professional information:</p>

  <strong style={styles.strong}>a) Personal Identification Information</strong>
  <ul style={styles.ul}>
    <li style={styles.li}>Full name</li>
    <li style={styles.li}>Date of birth</li>
    <li style={styles.li}>Gender</li>
    <li style={styles.li}>Nationality</li>
    <li style={styles.li}>Passport details (where required for visa or admissions)</li>
    <li style={styles.li}>Contact details (email, phone number, address)</li>
  </ul>

  <strong style={styles.strong}>b) Academic & Professional Information</strong>
  <ul style={styles.ul}>
    <li style={styles.li}>Educational background and transcripts</li>
    <li style={styles.li}>Test scores (IELTS, TOEFL, PTE, etc.)</li>
    <li style={styles.li}>Career interests and preferences</li>
    <li style={styles.li}>CV / resume details</li>
    <li style={styles.li}>Research interests (for research programs)</li>
  </ul>

  <strong style={styles.strong}>c) Application & Immigration Information</strong>
  <ul style={styles.ul}>
<li style={styles.li}>University applications and offers</li>
<li style={styles.li}>Visa documentation and status</li>
<li style={styles.li}>Financial/sponsorship information</li>
  </ul>

  <strong style={styles.strong}>d) Digital & Technical Data</strong>
  <ul style={styles.ul}>
    <li style={styles.li}>IP address</li>
    <li style={styles.li}>Browser and device information</li>
    <li style={styles.li}>Encrypted login credentials</li>
    <li style={styles.li}>Usage/activity logs on portals and dashboards</li>
  </ul>

  <strong style={styles.strong}>e) Payment Information</strong>
  <ul style={styles.ul}>
    <li style={styles.li}>Transaction details related to service fees</li>
  </ul>

  <p style={styles.p}><em style={styles.em}>Note: MGD does not store full card/bank details. Payments are processed via secure third-party gateways.</em></p>

  <h3 style={styles.h3}>
3. How We Use Personal Information</h3>
  <p style={styles.p}>We use collected data strictly for legitimate educational and administrative purposes, including:</p>
  <ul style={styles.ul}>
    <li style={styles.li}>Career counselling and advisory services</li>
    <li style={styles.li}>University admissions and application processing</li>
    <li style={styles.li}>Test booking and coordination</li>
    <li style={styles.li}>Visa documentation support</li>
    <li style={styles.li}>Portal access/authentication</li>
    <li style={styles.li}>Service updates and communication</li>
   <li style={styles.li}>Internal analytics, training, and quality control</li>
    <li style={styles.li}>Legal/institutional compliance</li>
  </ul>

  <h3 style={styles.h3}>
4. Legal Basis for Processing</h3>
  <p style={styles.p}>We process personal data based on:</p>
  <ul style={styles.ul}>
    <li style={styles.li}>User consent</li>
    <li style={styles.li}>Performance of a contract/service</li>
    <li style={styles.li}>Legal and regulatory obligations</li>
    <li style={styles.li}>Legitimate interests without overriding user rights</li>
  </ul>

  <h3 style={styles.h3}>
5. Data Sharing & Disclosure</h3>
  <p style={styles.p}>MGD does not sell or trade personal data. Information may be shared only with:</p>
  <ul style={styles.ul}>
    <li style={styles.li}>Universities and academic institutions</li>
    <li style={styles.li}>Testing/exam partners</li>
    <li style={styles.li}>Visa and immigration authorities</li>
    <li style={styles.li}>Technology and portal service providers</li>
    <li style={styles.li}>Government authorities as required by law</li>
  </ul>
  <p style={styles.p}>All third parties are required to maintain confidentiality and data protection.</p>

  <h3 style={styles.h3}>
6. International Data Transfers</h3>
  <p style={styles.p}>
    As we operate globally, personal data may be transferred to other countries.
    We ensure such transfers comply with applicable laws and safeguards.
  </p>

  <h3 style={styles.h3}>
7. Data Security</h3>
  <ul style={styles.ul}>
    <li style={styles.li}>Encrypted servers and secure databases</li>
    <li style={styles.li}>Role-based access control</li>
    <li style={styles.li}>Password/authentication policies</li>
    <li style={styles.li}>Restricted access to confidential information</li>
    <li style={styles.li}>Regular system updates and monitoring</li>
  </ul>

  <h3 style={styles.h3}>
8. Data Retention</h3>
  <p style={styles.p}>
    Personal data is retained only as long as necessary or legally required.
    Data may be anonymized for analytics and research.
  </p>

  <h3 style={styles.h3}>
9. User Rights</h3>
  <p style={styles.p}>Depending on applicable regulations, users may:</p>
  <ul style={styles.ul}>
    <li style={styles.li}>Access their personal data</li>
    <li style={styles.li}>Request correction or updates</li>
    <li style={styles.li}>Withdraw consent</li>
    <li style={styles.li}>Request deletion (subject to legal retention)</li>
    <li style={styles.li}>Object to certain processing activities</li>
  </ul>

  <h3 style={styles.h3}>
10. Cookies & Tracking</h3>
  <p style={styles.p}>
    Our website may use cookies and tracking technologies to improve performance
    and personalize user experience.
  </p>

  <h3 style={styles.h3}>
11. Third-Party Links</h3>
  <p style={styles.p}>
    External websites linked from our site are not governed by this Privacy Policy.
    Users are responsible for reviewing third-party policies.
  </p>

  <h3 style={styles.h3}>
12. Children’s Privacy</h3>
  <p style={styles.p}>
    MGD provides services to minors only with parental/guardian approval.
    We do not knowingly collect data from minors without authorization.
  </p>

  <h3 style={styles.h3}>
13. Updates to Policy</h3>
  <p style={styles.p}>
    This Privacy Policy may be updated periodically. Revised versions will reflect
    a new “Last Updated” date.
  </p>

  <h3 style={styles.h3}>
14. Contact Information</h3>
  <p style={styles.p}>For privacy inquiries:</p>
  <p style={styles.p}>
    <b>Email:</b> privacy@mgdconcept.com <br />
    <b>Website:</b> www.mgdconcept.com
  </p>

</div>

            <button onClick={() => setShowPrivacy(false)} style={styles.backBtn}>
      ← Back to Website
    </button>
          </div>
          
        )}

        {/* ---- TERMS VIEW ---- */}
{showTerms && (
  <div style={styles.privacyWrapper}>

    <h2 style={styles.privacyTitle}>Terms & Conditions</h2>

    <p style={styles.p}>
      By accessing, registering on, or using the website, portals, applications, or
      services of MGD Concept Education & Management Services (“MGD”), you agree
      to be bound by these Terms & Conditions.
    </p>

    <h3 style={styles.h3}>1. Scope of Services</h3>
    <p style={styles.p}>
      MGD provides education counseling, career advisory, university admissions support,
      testing coordination, visa documentation assistance, training, and related academic
      and administrative services.
    </p>

    <p style={styles.p}>
      MGD acts solely as a facilitator and service provider and does not act as a university,
      examination authority, immigration authority, or government body.
    </p>

    <h3 style={styles.h3}>2. Eligibility & User Responsibility</h3>
    <ul style={styles.ul}>
      <li style={styles.li}>
        Users must provide accurate, complete, and truthful information at all times.
      </li>
      <li style={styles.li}>
        Any delays, rejections, losses, or adverse outcomes arising from incorrect or 
        incomplete information shall be the sole responsibility of the user.
      </li>
      <li style={styles.li}>
        Services provided to minors are subject to parental or legal guardian consent.
      </li>
    </ul>

    <h3 style={styles.h3}>3. No Guarantee of Outcomes</h3>
    <p style={styles.p}>MGD does not guarantee:</p>
    <ul style={styles.ul}>
      <li style={styles.li}>Admission to any institution</li>
      <li style={styles.li}>Scholarships or funding</li>
      <li style={styles.li}>Test scores or certifications</li>
      <li style={styles.li}>Visa approvals or immigration outcomes</li>
    </ul>

    <p style={styles.p}>
      All final decisions rest solely with universities, testing organizations, and 
      government authorities.
    </p>

    <h3 style={styles.h3}>4. Data Protection & Privacy</h3>
    <p style={styles.p}>
      Use of MGD services is subject to the Privacy Policy, which forms an integral part
      of these Terms. By using our services, you consent to the collection and processing
      of personal data in accordance with applicable data-protection laws.
    </p>

    <h3 style={styles.h3}>5. Payments, Fees & Refunds</h3>
    <ul style={styles.ul}>
      <li style={styles.li}>
        Service fees are payable as per agreed terms.
      </li>
      <li style={styles.li}>
        Refunds, cancellations, and fee adjustments are governed by MGD’s Refund &
        Cancellation Policy.
      </li>
      <li style={styles.li}>
        Fees paid to third parties (universities, testing bodies, authorities) are 
        non-refundable and outside MGD’s control.
      </li>
    </ul>

    <h3 style={styles.h3}>6. Portals, Accounts & Security</h3>
    <ul style={styles.ul}>
      <li style={styles.li}>Users are responsible for maintaining the confidentiality of login credentials.</li>
      <li style={styles.li}>Unauthorized access, misuse, or interference with MGD systems is strictly prohibited.</li>
      <li style={styles.li}>MGD reserves the right to suspend or terminate access in case of misuse or violation.</li>
    </ul>

    <h3 style={styles.h3}>7. Intellectual Property</h3>
    <p style={styles.p}>
      All content, frameworks, methodologies (including the MGD Framework),
      trademarks, logos, and digital assets are the intellectual property of MGD or its 
      licensors and may not be copied, reproduced, or used without written permission.
    </p>

    <h3 style={styles.h3}>8. Third-Party Services & Links</h3>
    <p style={styles.p}>
      MGD may reference or link to third-party websites, institutions, or platforms.
      MGD is not responsible for their content, decisions, policies, or services.
    </p>

    <h3 style={styles.h3}>9. Limitation of Liability</h3>
    <p style={styles.p}>MGD shall not be liable for:</p>
    <ul style={styles.ul}>
      <li style={styles.li}>Institutional or regulatory decisions</li>
      <li style={styles.li}>Policy or immigration rule changes</li>
      <li style={styles.li}>Force majeure events</li>
      <li style={styles.li}>Losses arising from third-party actions</li>
    </ul>

    <p style={styles.p}>
      Liability, if any, shall be limited to the service fee paid directly to MGD.
    </p>

    <h3 style={styles.h3}>10. Modifications</h3>
    <p style={styles.p}>
      MGD reserves the right to modify these Terms & Conditions at any time. Continued
      use of services constitutes acceptance of updated terms.
    </p>

    <h3 style={styles.h3}>11. Governing Law & Jurisdiction</h3>
    <p style={styles.p}>
      These Terms & Conditions shall be governed by and construed in accordance with 
      the laws of the United Arab Emirates, and disputes shall be subject to the jurisdiction 
      of the competent UAE courts.
    </p>

    <button onClick={() => setShowTerms(false)} style={styles.backBtn}>
      ← Back to Website
    </button>
  </div>
)}
{showCookie && (
  <div style={styles.privacyWrapper}>
    
    <h2 style={styles.privacyTitle}>Cookie Policy</h2>
    <p style={styles.date}>Effective: 22/12/25 • Last Updated: 22/12/25</p>

    <p style={styles.p}>
      This Cookie Policy explains how MGD Concept Education & Management Services 
      (“MGD”, “we”, “our”, or “us”) uses cookies and similar technologies on its website(s),
      portals, and platforms.
    </p>

    <p style={styles.p}>
      By continuing to browse or use our website, you consent to the use of cookies,
      unless managed or disabled through browser settings.
    </p>

    <h3 style={styles.h3}>1. What Are Cookies?</h3>
    <p style={styles.p}>
      Cookies are small text files placed on your device that help websites function 
      efficiently and improve experience. Cookies do not normally identify a person.
    </p>

    <h3 style={styles.h3}>2. Types of Cookies We Use</h3>

    <strong style={styles.strong}>a) Strictly Necessary Cookies</strong>
    <ul style={styles.ul}>
      <li style={styles.li}>Secure login and authentication</li>
      <li style={styles.li}>Session control</li>
      <li style={styles.li}>Form submissions</li>
    </ul>

    <strong style={styles.strong}>b) Performance & Analytics Cookies</strong>
    <ul style={styles.ul}>
      <li style={styles.li}>Pages visited</li>
      <li style={styles.li}>Time spent</li>
      <li style={styles.li}>Navigation flow</li>
    </ul>

    <strong style={styles.strong}>c) Functionality Cookies</strong>
    <ul style={styles.ul}>
      <li style={styles.li}>Language preferences</li>
      <li style={styles.li}>Location settings</li>
    </ul>

    <strong style={styles.strong}>d) Third-party Cookies</strong>
    <p style={styles.p}>
      Third-party services may place cookies. Their policies apply.
    </p>

    <h3 style={styles.h3}>3. Managing Cookies</h3>
    <p style={styles.p}>
      Users can manage or disable cookies through browser settings, but this may affect
      site functionality.
    </p>

    <h3 style={styles.h3}>4. Data Compliance</h3>
    <p style={styles.p}>
      Cookie data is processed in accordance with the Privacy Policy and applicable laws.
    </p>

    <button onClick={() => setShowCookie(false)} style={styles.backBtn}>
      ← Back to Website
    </button>
  </div>
)}
{showDisclaimer && (
  <div style={styles.privacyWrapper}>

    <h2 style={styles.privacyTitle}>Disclaimer</h2>

    <p style={styles.p}>
      MGD Concept is an independent education consulting and service provider.
      MGD is not a university, examination board, immigration authority, or government agency.
    </p>

    <ul style={styles.ul}>
      <li style={styles.li}>Admissions, visas, scholarships, and results are external decisions.</li>
      <li style={styles.li}>Logos belong to respective organizations.</li>
      <li style={styles.li}>MGD not liable for outcomes determined by third parties.</li>
    </ul>

    <button onClick={() => setShowDisclaimer(false)} style={styles.backBtn}>
      ← Back to Website
    </button>
  </div>
)}
{showDataProtect && (
  <div style={styles.privacyWrapper}>
    
    <h2 style={styles.privacyTitle}>Data Protection & Compliance</h2>

    <p style={styles.p}>
      MGD processes personal data in compliance with:
    </p>

    <ul style={styles.ul}>
      <li style={styles.li}>UAE Federal Decree-Law No. 45 of 2021 (PDPL)</li>
      <li style={styles.li}>EU General Data Protection Regulation (GDPR)</li>
    </ul>

    <p style={styles.p}>
      MGD ensures lawful, transparent, secure processing and safeguards for cross-border
      transfers. Data requests may be submitted through the Privacy Policy contacts.
    </p>

    <button onClick={() => setShowDataProtect(false)} style={styles.backBtn}>
      ← Back to Website
    </button>
  </div>
)}
{showRefund && (
  <div style={styles.privacyWrapper}>

    <h2 style={styles.privacyTitle}>Refund & Cancellation Policy</h2>

    <h3 style={styles.h3}>1. General</h3>
    <p style={styles.p}>
      Service fees paid to MGD are subject to the terms outlined below.
    </p>

    <h3 style={styles.h3}>2. Non-Refundable Services</h3>
    <ul style={styles.ul}>
      <li style={styles.li}>Counseling sessions already delivered</li>
      <li style={styles.li}>Application processing</li>
      <li style={styles.li}>Test bookings</li>
      <li style={styles.li}>Visa documentation services</li>
    </ul>

    <h3 style={styles.h3}>3. Refund Eligibility</h3>
    <p style={styles.p}>
      Refund requests will be reviewed case-by-case and processed within reasonable timelines.
    </p>

    <h3 style={styles.h3}>4. Third-Party Fees</h3>
    <p style={styles.p}>
      MGD is not responsible for fees paid directly to institutions, testing bodies, or authorities.
    </p>

    <button onClick={() => setShowRefund(false)} style={styles.backBtn}>
      ← Back to Website
    </button>
  </div>
)}


      </div>
      <style jsx global>{`
@media (max-width: 768px) {

  /* ================= OFFICE CARDS ================= */

  .app-footer .officeGridStatic {
    display: grid !important;
    grid-template-columns: 1fr !important;
    row-gap: 12px !important;
  }

  .app-footer .officeCard {
    width: 100% !important;
    min-height: 120px !important;
    padding: 12px 14px !important;
    border-radius: 8px !important;
  }

  /* ================= FOOTER BOTTOM ================= */

  .app-footer .bottomSection {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;

    padding-top: 12px !important;
    padding-bottom: 180px !important; /* 🔴 VERY IMPORTANT */
    position: relative;
    z-index: 1;
  }

  /* ================= NAV LINKS (UP) ================= */

  .app-footer .bottomSection nav {
    order: 0 !important;
    margin-bottom: 14px !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
    text-align: center !important;
  }

  /* ================= COPYRIGHT (DOWN) ================= */

  .app-footer .bottomSection .copyright {
    order: 1 !important;
    font-size: 11px !important;
    opacity: 0.8;
    text-align: center !important;
  }

  /* ================= FLOATING BUTTONS (PUSH UP) ================= */

  .floating-whatsapp-container {
  bottom: 20px !important;
  z-index: 999 !important;
  transform: scale(0.85);   /* 🔽 size small */
}

/* Scroll to top */
.rn-progress-parent {
  bottom: 20px !important;
  z-index: 999 !important;
  transform: scale(0.85);   /* 🔽 size small */
}

}
`}</style>



    </footer>
  );
}



/* ---------- STYLES ---------- */
const styles = {
  footer: {
    backgroundImage: "url('https://cosmosimmigration.com/images/blue-map.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    paddingTop: "28px",
    paddingBottom: "24px",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.35)",
    pointerEvents: "none",
  },

  /* ================= TOP SECTION ================= */

  topSection: {
    textAlign: "center",
    marginBottom: "26px",
  },

  brandContainer: {
    display: "inline-block",
  },

  logoWrapper: {
    background: "#FFFFFF",
    borderRadius: "14px",
    padding: "16px 36px",
    display: "inline-block",
    boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
    marginBottom: "8px",
  },

  logo: {
    width: "170px",
    display: "block",
  },

  tagline: {
    color: "#FFFFFF",
    fontSize: "16px",
    lineHeight: "1.3", 
    fontWeight: 300,
    letterSpacing: "0.8px",
    marginBottom: "14px",
    opacity: 0.95,
  },

  socialContainer: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  socialLink: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(78, 195, 255, 0.35)",
    color: "#4EC3FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    backdropFilter: "blur(10px)",
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
    marginBottom: "22px",
  },

  /* ================= OFFICE SECTION ================= */

  officesSection: {
    marginBottom: "40px",
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: "24px",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "20px",
  },

  officeGrid: {
    overflow: "hidden",
    width: "100%",
    position: "relative",
  },

  officeTrack: {
    display: "flex",
    gap: "16px",
    width: "max-content",
    animation: "officeScroll 32s linear infinite",
    animationPlayState: "running", 
  },

 officeCard: {
  width: "100%",
  minHeight: "110px",
  padding: "8px 10px",
  background: "rgba(255,255,255,0.06)",
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.1)",
  backdropFilter: "blur(6px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "4px",
},



  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginBottom: "4px",
  },

  locationBadge: {
    width: "34px",
    height: "34px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #4EC3FF, #2196F3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  badgeIcon: {
    fontSize: "16px",
    color: "#FFFFFF",
  },

  officeTitle: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: 600,
    margin: 0,
  },

  officeAddress: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "13px",
    lineHeight: "1.45",
    marginBottom: "4px",
  },

  emailLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: "#4EC3FF",
    fontSize: "13px",
    textDecoration: "none",
  },

  emailIcon: {
    fontSize: "15px",
  },

  /* ================= BOTTOM ================= */

  

  bottomSection: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "22px",
    textAlign: "center",
  },

  footerNav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },

  navLink: {
    color: "rgba(255,255,255,0.85)",
    fontSize: "13px",
    textDecoration: "none",
    padding: "0 6px",
  },

  navDivider: {
    color: "rgba(255,255,255,0.3)",
    fontSize: "12px",
  },

  copyright: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "12px",
    margin: 0,
  },
  

  backBtn: {
    background:"#4EC3FF",
    border:"none",
    padding:"8px 14px",
    borderRadius:"6px",
    cursor:"pointer",
    marginBottom:"18px",
    fontWeight:600
  },

  
privacyWrapper: {
  padding: "22px",
  maxWidth: "900px",
  margin: "0 auto",
  color: "#fff",
  fontSize: "13px",     // ⬅ THIS CONTROLS ALL TEXT
  lineHeight: "1.55",
},



 

  privacyText:{
    fontSize:"14px",
    lineHeight:"1.8",
    color:"#fff",
  },

  privacyTitle:{
    fontSize:"14px",
    fontWeight:700,
    marginBottom:"14px",
    color:"#fff",
  },

  date:{
    fontSize:"14px",
    marginBottom:"20px",
    color:"#fff",
  },

  h3:{
    fontSize:"14px",
    fontWeight:600,
    margin:"18px 0 8px 0",
    color:"#fff",
  },

  privacyList:{
    marginLeft:"14px",
    marginBottom:"12px",
    color:"#fff",
  },
p:{
  color:"#fff",
},
ul:{
  color:"#fff",
  marginLeft:"22px",
},

li:{
  color:"#fff",
  lineHeight:"1.6",
  marginBottom:"6px",
},

em:{
  color:"#fff",
  fontStyle:"italic",
},

strong:{
  color:"#fff",
  fontWeight:600,
},
navButton: {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  margin: 0,
  color: "rgba(255,255,255,0.85)",
  fontSize: "13px",
  textDecoration: "none",
  fontFamily: "inherit",
  lineHeight: "inherit",
  display: "inline",
},
officeGridStatic: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  columnGap: "10px",       // reduced horizontal spacing
  rowGap: "8px",           // reduced vertical spacing
  padding: "4px 0",
  width: "100%",
},

/* ---------- MOBILE RESPONSIVE FOOTER ----------- */
"@media (max-width: 768px)": {
  footer: {
    paddingTop: "16px",
    paddingBottom: "16px",
  },

  topSection: {
    marginBottom: "18px",
  },

  logoWrapper: {
    padding: "10px 22px",
  },

  logo: {
    width: "130px",
  },

  tagline: {
    fontSize: "14px",
    marginBottom: "10px",
  },

  socialContainer: {
    gap: "10px",
  },

  sectionTitle: {
    fontSize: "18px",
    marginBottom: "12px",
  },

  officeGridStatic: {
    gridTemplateColumns: "1fr",   // ⬅ 1 column in mobile
    rowGap: "6px",
  },

  officeCard: {
    minHeight: "90px",
    padding: "6px 8px",
    gap: "3px",
  },

  officeTitle: {
    fontSize: "14px",
  },

  officeAddress: {
    fontSize: "12px",
    lineHeight: "1.35",
  },

  emailLink: {
    fontSize: "12px",
  },

  footerNav: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "4px",
    rowGap: "4px",
  },

  copyright: {
    fontSize: "11px",
    marginTop: "10px",
  },

  privacyWrapper: {
    padding: "14px",
  },

  privacyTitle: {
    fontSize: "26px",
  },

  h3: {
    fontSize: "18px",
  },

  p: {
    fontSize: "14px",
    lineHeight: "1.55",
  },
}


};


