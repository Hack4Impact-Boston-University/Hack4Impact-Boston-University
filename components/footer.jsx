import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

function Footer() {
  return (
    <section className="footer-section">
      <Container>
        <Row>
          <Col md="5" xs="12" className="footer-left-div">
            <div className="footer-logo-box">
              <img src="/images/logo-white.svg" height="60" width="240" alt="Hack4Impact logo" />
            </div>
            <p>
              For all inquiries of partnership or sponsorship, please contact us at{' '}
              {/* TODO: Update this for your university! */}
              <a className="email-link" href="mailto:contanct@hack4impact.org">
                bostonuniversity@hack4impact.org
              </a>
              .
            </p>
          </Col>
          <div className="col-md-1" />
          <div className="col-md-2 ">
            <h4>About the org</h4>
            <ul>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Apply Now</h4>
            <ul>
              <li>
                <Link href="/apply">
                  <a>How to apply</a>
                </Link>
              </li>
              <li>
                <Link href="/apply/students">
                  <a>Students</a>
                </Link>
              </li>
              <li>
                <Link href="/apply/nonprofits">
                  <a>Non-profits</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Follow us</h4>
            <ul>
              {/* TODO: Update these for your university! */}
              {/* <li>
                <a target="_blank" href="https://www.linkedin.com/company/hack4impact/mycompany/">LinkedIn</a>
              </li> */}
              <li>
                <a target="_blank" href="https://github.com/orgs/Hack4Impact-Boston-University/repositories">Github</a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/hack4impactbu/">Instagram</a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/hack4impactbu">Facebook</a>
              </li>
              {/* <li>
                  <a target="_blank" href="https://medium.com/hack4impact">Blog</a>
                </li> */}
              {/*<li>
                    <a target="_blank" href="mailto:bostonuniversity@hack4impact.org">Email</a>
                  </li>*/}
            </ul>
          </div>
        </Row>
      </Container>
      <style jsx>{`
        .footer-section {
          background-color: var(--primary-blue);
          min-height: 350px;
          padding-top: 70px;
          color: white;
          font-size: 15px;

          .footer-logo-box {
            margin-bottom: 20px;
          }

          h4 {
            font-size: inherit;
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 15px;
          }
          a,
          a:visited {
            color: inherit;
          }
          a.email-link {
            text-decoration: underline !important;
          }
          a:hover {
            color: var(--secondary-seafoam);
          }

          ul {
            list-style-type: none;
            padding: 0;

            li {
              padding-bottom: 5px;
            }
          }
        }
      `}</style>
    </section>
  );
}

export default Footer;
