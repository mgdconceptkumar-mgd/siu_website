"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";


// Icons as SVG components
const FaEnvelope = () => <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>;
const FaFacebookF = () => <svg width="16" height="16" viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>;
const FaInstagram = () => <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>;
const FaLinkedinIn = () => <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>;
const FaTwitter = () => <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>;
const FaYoutube = () => <svg width="16" height="16" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>;
const SiTiktok = () => <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" /></svg>;
const FaMapMarkerAlt = () => <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>;

export default function Footer() {
  const { lang, t } = useLanguage();

  const offices = [
    { title: t("footer.email_title"), info: "info@studyinuae.app", link: "mailto:info@studyinuae.app" },
    { title: t("footer.contact_title"), info: t("footer.get_in_touch"), link: "/contact-us" },
  ];

  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showRefund, setShowRefund] = useState(false);
  const [showDataProtect, setShowDataProtect] = useState(false);
  const [showAiPolicy, setShowAiPolicy] = useState(false);
  const [showUserAgreement, setShowUserAgreement] = useState(false);
  const [showPartnerSharing, setShowPartnerSharing] = useState(false);
  const [showPlatformLiability, setShowPlatformLiability] = useState(false);

  const closeAll = () => {
    setShowPrivacy(false);
    setShowTerms(false);
    setShowCookie(false);
    setShowDisclaimer(false);
    setShowRefund(false);
    setShowDataProtect(false);
    setShowAiPolicy(false);
    setShowUserAgreement(false);
    setShowPartnerSharing(false);
    setShowPlatformLiability(false);
  };

  return (
    <footer id="footer" className="app-footer" style={{ ...styles.footer, direction: lang === "ar" ? "rtl" : "ltr" }}>

      <div style={styles.overlay} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {!showPrivacy && !showTerms && !showCookie && !showDisclaimer && !showRefund && !showDataProtect && !showAiPolicy && !showUserAgreement && !showPartnerSharing && !showPlatformLiability && (


          <>
            {/* Top Section: Brand & Social */}
            <div style={styles.topSection}>
              <div style={styles.brandContainer}>
                <div style={{ position: "relative", width: "120px", height: "120px", margin: "0 auto 15px auto" }}>
                   <Image 
                    src="/assets/images/about/SIU%20LOGO%20Icon-05.jpg%20(1).jpeg" 
                    alt="SIU Logo" 
                    fill
                    sizes="120px"
                    style={{ objectFit: "cover", borderRadius: "50%", mixBlendMode: "multiply" }} 
                    priority
                  />
                </div>
                <p style={styles.tagline}>{t("footer.tagline")}</p>

                <div style={styles.socialContainer}>
                  <a href="#!" style={styles.socialLink} aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#!" style={styles.socialLink} aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#!" style={styles.socialLink} aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href="#!" style={styles.socialLink} aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#!" style={styles.socialLink} aria-label="TikTok">
                    <SiTiktok />
                  </a>
                  <a href="#!" style={styles.socialLink} aria-label="YouTube">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={styles.divider} />

            {/* Office Locations Grid */}
            <div style={styles.officesSection}>
              <h3 style={styles.sectionTitle}>{t("footer.support_title")}</h3>
              <div
                style={styles.officeGrid}
              >
                <div className="officeGridStatic" style={{ ...styles.officeGridStatic, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>

                  {offices.map((office, i) => (
                    <div key={i} className="officeCard" style={{ ...styles.officeCard, textAlign: lang === "ar" ? "right" : "left" }}>

                      <div style={{ ...styles.cardHeader, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
                        <div style={styles.locationBadge}>
                          {i === 0 ? <FaEnvelope style={styles.badgeIcon} /> : <FaMapMarkerAlt style={styles.badgeIcon} />}
                        </div>
                        <h4 className="officeTitle" style={{ ...styles.officeTitle, [lang === "ar" ? "marginRight" : "marginLeft"]: "12px" }}>
                          {office.title}</h4>
                      </div>

                      <a href={office.link} style={styles.emailLink}>
                        {office.info}
                      </a>
                    </div>
                  ))}
                </div>

              </div>

            </div>


            <div style={styles.bottomSection}>
              <nav style={{ ...styles.footerNav, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
                <Link href="/siu/about" style={styles.navLink}>{t("footer.nav.about")}</Link>
                <span style={styles.navDivider}>•</span>

                <a href="/contact-us" style={styles.navLink}>{t("footer.nav.contact")}</a>
                <span style={styles.navDivider}>•</span>

                <button onClick={() => { closeAll(); setShowPrivacy(true); }} style={styles.navButton}>{t("footer.nav.privacy")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowTerms(true); }} style={styles.navButton}>{t("footer.nav.terms")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowCookie(true); }} style={styles.navButton}>{t("footer.nav.cookie")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowRefund(true); }} style={styles.navButton}>{t("footer.nav.refund")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowDisclaimer(true); }} style={styles.navButton}>{t("footer.nav.disclaimer")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowDataProtect(true); }} style={styles.navButton}>{t("footer.nav.data_protection")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowAiPolicy(true); }} style={styles.navButton}>{t("footer.nav.ai_policy")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowUserAgreement(true); }} style={styles.navButton}>{t("footer.nav.user_agreement")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowPartnerSharing(true); }} style={styles.navButton}>{t("footer.nav.partner_sharing")}</button>
                <span style={styles.navDivider}>•</span>
                <button onClick={() => { closeAll(); setShowPlatformLiability(true); }} style={styles.navButton}>{t("footer.nav.platform_liability")}</button>
              </nav>

              <p className="copyright" style={styles.copyright}>
                {t("footer.copyright").replace("{{year}}", new Date().getFullYear())}
              </p>
              <p style={{
                marginTop: "8px",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                fontWeight: 500,
                textAlign: "center",
              }}>
                {t("footer.powered_by")}{" "}
                <span style={{ color: "rgba(78, 195, 255, 0.75)", fontWeight: 700 }}>MGD</span>
              </p>
            </div>
          </>
        )}

        {/* ---- PRIVACY VIEW ---- */}
        {showPrivacy && (
          <div style={{ ...styles.privacyWrapper, textAlign: lang === "ar" ? "right" : "left" }}>

            <h2 style={styles.privacyTitle}>{t("footer.nav.privacy")}</h2>
            <p style={styles.date}>{lang === "ar" ? "ساري من: ٢٢/١٢/٢٥" : "Effective: 22/12/25"}<br />{lang === "ar" ? "آخر تحديث: ٢٢/١٢/٢٥" : "Last Updated: 22/12/25"}</p>

            <div style={styles.privacyText}>
              <p style={styles.p}>
                <strong>1. {lang === "ar" ? "مقدمة" : "Introduction"}</strong><br />
                {lang === "ar" ? "تشرح سياسة الخصوصية هذه..." : "This Privacy Policy explains how SIU – Study in UAE™ collects, uses, stores, and protects personal data when users access our website, mobile applications, or digital services. SIU is committed to protecting personal data in accordance with applicable laws including the UAE Personal Data Protection Law (PDPL) and internationally recognized privacy standards."}
              </p>

              <p style={styles.p}>
                <strong>2. {lang === "ar" ? "نطاق هذه السياسة" : "Scope of This Policy"}</strong><br />
                {lang === "ar" ? "تنطبق هذه السياسة على:" : "This policy applies to:"}
                <ul style={styles.ul}>
                  <li style={styles.li}>{lang === "ar" ? "الطلاب والمتقدمين المحتملين" : "students and prospective students"}</li>
                  <li style={styles.li}>{lang === "ar" ? "الآباء والأوصياء" : "parents and guardians"}</li>
                  <li style={styles.li}>{lang === "ar" ? "الجامعات والمؤسسات" : "universities and institutions"}</li>
                  <li style={styles.li}>{lang === "ar" ? "المنظمات الشريكة" : "partner organizations"}</li>
                  <li style={styles.li}>{lang === "ar" ? "زوار الموقع ومستخدمي التطبيق" : "website visitors and application users"}</li>
                </ul>
              </p>

              <p style={styles.p}>
                <strong>3. Information We Collect</strong><br />
                <strong>Personal Identification Information</strong>
                <ul style={styles.ul}>
                  <li style={styles.li}>name</li>
                  <li style={styles.li}>date of birth</li>
                  <li style={styles.li}>nationality</li>
                  <li style={styles.li}>passport information</li>
                  <li style={styles.li}>contact details</li>
                </ul>
                <strong>Academic Information</strong>
                <ul style={styles.ul}>
                  <li style={styles.li}>transcripts</li>
                  <li style={styles.li}>academic certificates</li>
                  <li style={styles.li}>test scores</li>
                  <li style={styles.li}>educational preferences</li>
                </ul>
                <strong>Application and Immigration Information</strong>
                <ul style={styles.ul}>
                  <li style={styles.li}>university applications</li>
                  <li style={styles.li}>admission offers</li>
                  <li style={styles.li}>visa documentation</li>
                </ul>
                <strong>Technical Information</strong>
                <ul style={styles.ul}>
                  <li style={styles.li}>IP address</li>
                  <li style={styles.li}>device information</li>
                  <li style={styles.li}>browser type</li>
                  <li style={styles.li}>platform usage data</li>
                </ul>
                <strong>Communication Information</strong>
                <ul style={styles.ul}>
                  <li style={styles.li}>email communications</li>
                  <li style={styles.li}>support requests</li>
                  <li style={styles.li}>chatbot interactions</li>
                </ul>
                <strong>Payment Information</strong><br />
                SIU may collect limited transaction information related to application fees or services. Payment processing is handled through secure third-party payment gateways. SIU does not store complete credit card or banking information.
              </p>

              <p style={styles.p}>
                <strong>4. How We Collect Information</strong><br />
                Information is collected through:
                <ul style={styles.ul}>
                  <li style={styles.li}>user registrations</li>
                  <li style={styles.li}>application forms</li>
                  <li style={styles.li}>counseling sessions</li>
                  <li style={styles.li}>partner referrals</li>
                  <li style={styles.li}>cookies and analytics tools</li>
                </ul>
              </p>

              <p style={styles.p}>
                <strong>5. Legal Basis for Data Processing</strong><br />
                SIU processes data based on:
                <ul style={styles.ul}>
                  <li style={styles.li}>user consent</li>
                  <li style={styles.li}>service contracts</li>
                  <li style={styles.li}>legal obligations</li>
                  <li style={styles.li}>legitimate platform operations</li>
                </ul>
              </p>

              <p style={styles.p}>
                <strong>6. How We Use Information</strong><br />
                Information may be used to:
                <ul style={styles.ul}>
                  <li style={styles.li}>process university applications</li>
                  <li style={styles.li}>provide counseling services</li>
                  <li style={styles.li}>match students with programs</li>
                  <li style={styles.li}>communicate updates and deadlines</li>
                  <li style={styles.li}>improve platform functionality</li>
                </ul>
              </p>

              <p style={styles.p}>
                <strong>7. Data Sharing</strong><br />
                SIU may share data with:
                <ul style={styles.ul}>
                  <li style={styles.li}>universities</li>
                  <li style={styles.li}>scholarship providers</li>
                  <li style={styles.li}>government authorities where required</li>
                  <li style={styles.li}>technology service providers</li>
                </ul>
                SIU does not sell personal data.
              </p>

              <p style={styles.p}>
                <strong>8. International Data Transfers</strong><br />
                Data may be processed in secure systems located outside the user’s country where required. Appropriate safeguards are implemented.
              </p>

              <p style={styles.p}>
                <strong>9. Data Security</strong><br />
                SIU uses:
                <ul style={styles.ul}>
                  <li style={styles.li}>secure servers</li>
                  <li style={styles.li}>encryption protocols</li>
                  <li style={styles.li}>restricted system access</li>
                </ul>
              </p>

              <p style={styles.p}>
                <strong>10. Data Retention</strong><br />
                Personal data is retained only for the duration necessary to provide services or comply with legal obligations.
              </p>

              <p style={styles.p}>
                <strong>11. User Rights</strong><br />
                Users may request:
                <ul style={styles.ul}>
                  <li style={styles.li}>access to their data</li>
                  <li style={styles.li}>corrections</li>
                  <li style={styles.li}>deletion where applicable</li>
                </ul>
                Requests can be sent to: privacy@studyinuae.app
              </p>

              <p style={styles.p}>
                <strong>12. Contact</strong><br />
                privacy@studyinuae.app<br />
                support@studyinuae.app
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

            <div style={styles.privacyText}>
              <p style={styles.p}>
                <strong>1. Introduction</strong><br />
                These Terms govern the use of the SIU platform. By using the platform, users agree to these terms.
              </p>

              <p style={styles.p}>
                <strong>2. Scope of Services</strong><br />
                SIU provides a digital platform for:
                <ul style={styles.ul}>
                  <li style={styles.li}>discovering universities</li>
                  <li style={styles.li}>submitting applications</li>
                  <li style={styles.li}>accessing advisory services</li>
                  <li style={styles.li}>exploring internships and career opportunities</li>
                </ul>
                SIU acts as a facilitator and does not make academic or immigration decisions.
              </p>

              <p style={styles.p}>
                <strong>3. User Eligibility</strong><br />
                Users must provide accurate information. Minors require parental consent.
              </p>

              <p style={styles.p}>
                <strong>4. User Responsibilities</strong><br />
                Users must:
                <ul style={styles.ul}>
                  <li style={styles.li}>submit genuine documents</li>
                  <li style={styles.li}>maintain account security</li>
                  <li style={styles.li}>comply with applicable laws</li>
                </ul>
              </p>

              <p style={styles.p}>
                <strong>5. Fees and Payments</strong><br />
                Certain services may require fees including application processing fees. Payments are processed via secure third-party gateways.
              </p>

              <p style={styles.p}>
                <strong>6. Intellectual Property</strong><br />
                All platform content belongs to SIU or its licensors. Unauthorized reproduction is prohibited.
              </p>

              <p style={styles.p}>
                <strong>7. Third-Party Services</strong><br />
                SIU may link to universities, employers, or payment systems. SIU is not responsible for decisions made by these organizations.
              </p>

              <p style={styles.p}>
                <strong>8. Limitation of Liability</strong><br />
                SIU is not liable for admission, visa, scholarship, or employment decisions.
              </p>

              <p style={styles.p}>
                <strong>9. Governing Law</strong><br />
                These Terms are governed by the laws of the United Arab Emirates.
              </p>
            </div>

            <button onClick={() => setShowTerms(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}
        {showCookie && (
          <div style={styles.privacyWrapper}>
            <h2 style={styles.privacyTitle}>Cookie Policy</h2>
            <div style={styles.privacyText}>
              <p style={styles.p}>
                <strong>1. Introduction</strong><br />
                This policy explains how SIU uses cookies.
              </p>
              <p style={styles.p}>
                <strong>2. What Are Cookies</strong><br />
                Cookies are small files stored on a user’s device to improve platform functionality.
              </p>
              <p style={styles.p}>
                <strong>3. Types of Cookies</strong><br />
                <ul style={styles.ul}>
                  <li style={styles.li}><strong>Essential Cookies:</strong> Required for login and platform functionality.</li>
                  <li style={styles.li}><strong>Performance Cookies:</strong> Used for analytics.</li>
                  <li style={styles.li}><strong>Functionality Cookies:</strong> Used to remember preferences.</li>
                  <li style={styles.li}><strong>Third-Party Cookies:</strong> Used by integrated services.</li>
                </ul>
              </p>
              <p style={styles.p}>
                <strong>4. Managing Cookies</strong><br />
                Users may disable cookies through browser settings.
              </p>
            </div>
            <button onClick={() => setShowCookie(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}
        {showDisclaimer && (
          <div style={styles.privacyWrapper}>
            <h2 style={styles.privacyTitle}>Disclaimer</h2>
            <div style={styles.privacyText}>
              <p style={styles.p}>
                <strong>Platform Disclaimer</strong><br />
                SIU is an independent digital platform. SIU is not a university, immigration authority, or scholarship body.
              </p>
              <p style={styles.p}>
                <strong>Admission Disclaimer</strong><br />
                Admissions decisions are made solely by universities.
              </p>
              <p style={styles.p}>
                <strong>Visa Disclaimer</strong><br />
                Visa decisions are made by immigration authorities.
              </p>
              <p style={styles.p}>
                <strong>Scholarship Disclaimer</strong><br />
                Scholarship decisions are made by funding organizations.
              </p>
            </div>
            <button onClick={() => setShowDisclaimer(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}
        {showDataProtect && (
          <div style={styles.privacyWrapper}>
            <h2 style={styles.privacyTitle}>Data Protection & Compliance</h2>
            <div style={styles.privacyText}>
              <p style={styles.p}>
                SIU complies with:
                <ul style={styles.ul}>
                  <li style={styles.li}>UAE Personal Data Protection Law</li>
                  <li style={styles.li}>international data protection standards.</li>
                </ul>
              </p>
              <p style={styles.p}>
                Data protection principles include:
                <ul style={styles.ul}>
                  <li style={styles.li}>lawful processing</li>
                  <li style={styles.li}>data minimization</li>
                  <li style={styles.li}>secure storage</li>
                  <li style={styles.li}>transparency.</li>
                </ul>
              </p>
            </div>
            <button onClick={() => setShowDataProtect(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}
        {showRefund && (
          <div style={styles.privacyWrapper}>
            <h2 style={styles.privacyTitle}>Refund & Cancellation Policy</h2>
            <div style={styles.privacyText}>
              <p style={styles.p}>
                <strong>1. Application Fees</strong><br />
                Application fees are generally non-refundable once processing begins.
              </p>
              <p style={styles.p}>
                <strong>2. Refund Eligibility</strong><br />
                Refunds may be considered in cases such as:
                <ul style={styles.ul}>
                  <li style={styles.li}>duplicate payments</li>
                  <li style={styles.li}>verified technical errors.</li>
                </ul>
              </p>
              <p style={styles.p}>
                <strong>3. Third-Party Fees</strong><br />
                Fees paid directly to universities or testing bodies are not refundable by SIU.
              </p>
            </div>
            <button onClick={() => setShowRefund(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}

        {showAiPolicy && (
          <div style={styles.privacyWrapper}>
            <h2 style={styles.privacyTitle}>AI Policy</h2>
            <div style={styles.privacyText}>
              <p style={styles.p}>
                SIU may use AI tools to support:
                <ul style={styles.ul}>
                  <li style={styles.li}>program recommendations</li>
                  <li style={styles.li}>data analytics</li>
                  <li style={styles.li}>chatbot support.</li>
                </ul>
                AI tools assist decision-making but do not replace human evaluation.
              </p>
            </div>
            <button onClick={() => setShowAiPolicy(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}

        {showUserAgreement && (
          <div style={styles.privacyWrapper}>
            <h2 style={styles.privacyTitle}>User Agreement</h2>
            <div style={styles.privacyText}>
              <p style={styles.p}>
                Users agree to:
                <ul style={styles.ul}>
                  <li style={styles.li}>provide accurate information</li>
                  <li style={styles.li}>submit genuine documents</li>
                  <li style={styles.li}>avoid misuse of the platform.</li>
                </ul>
                Accounts may be suspended if policies are violated.
              </p>
            </div>
            <button onClick={() => setShowUserAgreement(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}

        {showPartnerSharing && (
          <div style={styles.privacyWrapper}>
            <h2 style={styles.privacyTitle}>Partner Data Sharing</h2>
            <div style={styles.privacyText}>
              <p style={styles.p}>
                This agreement governs data sharing between SIU and partner institutions. Data shared may include:
                <ul style={styles.ul}>
                  <li style={styles.li}>student identification information</li>
                  <li style={styles.li}>academic records</li>
                  <li style={styles.li}>application documents.</li>
                </ul>
                Partners must maintain confidentiality and comply with data protection laws.
              </p>
            </div>
            <button onClick={() => setShowPartnerSharing(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}

        {showPlatformLiability && (
          <div style={styles.privacyWrapper}>
            <h2 style={styles.privacyTitle}>Platform Liability</h2>
            <div style={styles.privacyText}>
              <p style={styles.p}>
                SIU is a facilitation platform. SIU does not guarantee:
                <ul style={styles.ul}>
                  <li style={styles.li}>university admission</li>
                  <li style={styles.li}>visa approvals</li>
                  <li style={styles.li}>scholarship awards</li>
                  <li style={styles.li}>employment opportunities.</li>
                </ul>
                SIU shall not be liable for losses resulting from decisions made by third-party institutions or authorities.
              </p>
            </div>
            <button onClick={() => setShowPlatformLiability(false)} style={styles.backBtn}>
              ← Back to Website
            </button>
          </div>
        )}


      </div>
      <style jsx global>{`
@media (max-width: 768px) {
  .app-footer {
    padding-top: 40px !important;
    padding-bottom: 20px !important;
  }

  /* ================= TOP SECTION ================= */
  .app-footer [style*="topSection"] {
    margin-bottom: 20px !important;
  }

  .app-footer [style*="logo"] {
    width: 100px !important;
    height: 100px !important;
  }

  .app-footer [style*="tagline"] {
    font-size: 14px !important;
    margin-bottom: 20px !important;
  }

  .app-footer [style*="socialContainer"] {
    gap: 10px !important;
  }

  .app-footer [style*="socialLink"] {
    width: 38px !important;
    height: 38px !important;
    font-size: 16px !important;
  }

  /* ================= OFFICE CARDS ================= */
  .app-footer .officeGridStatic {
    display: flex !important;
    flex-direction: column !important;
    gap: 15px !important;
    padding: 0 15px !important;
  }

  .app-footer .officeCard {
    width: 100% !important;
    min-height: auto !important;
    padding: 15px !important;
    border-radius: 12px !important;
  }

  .app-footer .officeTitle {
    font-size: 15px !important;
  }

  /* ================= FOOTER BOTTOM ================= */
  .app-footer .bottomSection {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    padding: 30px 15px 120px !important;
    border-top: 1px solid rgba(255,255,255,0.1) !important;
  }

  .app-footer .bottomSection nav {
    order: 0 !important;
    margin-bottom: 20px !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    text-align: center !important;
  }

  .app-footer .navLink, .app-footer .navButton {
    font-size: 12px !important;
  }

  .app-footer .copyright {
    order: 1 !important;
    font-size: 11px !important;
    opacity: 0.8;
    margin-top: 10px !important;
  }

  /* ================= FLOATING BUTTONS ================= */
  .floating-whatsapp-container, .rn-progress-parent {
    bottom: 20px !important;
    transform: scale(0.8);
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
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 15px auto",
    border: "none",
    boxShadow: "none",
    mixBlendMode: "multiply"
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
    background: "#4EC3FF",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "18px",
    fontWeight: 600
  },


  privacyWrapper: {
    padding: "22px",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#fff",
    fontSize: "10px",     // ⬅ Decreased to 10px
    lineHeight: "1.55",
  },





  privacyText: {
    fontSize: "10px", // Decreased from 14px
    lineHeight: "1.8",
    color: "#fff",
  },

  privacyTitle: {
    fontSize: "10px", // Decreased from 14px
    fontWeight: 700,
    marginBottom: "14px",
    color: "#fff",
  },

  date: {
    fontSize: "10px", // Decreased from 14px
    marginBottom: "20px",
    color: "#fff",
  },

  h3: {
    fontSize: "10px", // Decreased from 14px
    fontWeight: 600,
    margin: "18px 0 8px 0",
    color: "#fff",
  },

  privacyList: {
    marginLeft: "14px",
    marginBottom: "12px",
    color: "#fff",
  },
  p: {
    color: "#fff",
    fontSize: "10px",
  },
  ul: {
    color: "#fff",
    marginLeft: "22px",
    fontSize: "10px",
  },

  li: {
    color: "#fff",
    lineHeight: "1.6",
    marginBottom: "6px",
    fontSize: "10px",
  },

  em: {
    color: "#fff",
    fontStyle: "italic",
  },

  strong: {
    color: "#fff",
    fontWeight: 600,
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
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: "20px",
    rowGap: "20px",
    padding: "4px 0",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
  },

  /* ---------- MOBILE RESPONSIVE FOOTER ----------- */
};


