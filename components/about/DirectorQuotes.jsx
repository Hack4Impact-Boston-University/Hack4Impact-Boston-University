import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Section from '../section';

function DirectorQuotes({ content }) {
  return (
    <Section>
      <Row>
        <div className="text-center section-title">
          <h2>Our Team</h2>
        </div>
      </Row>

      <Row>
        <div className="mb-3 text-center">
          <Col md="12">
            <h4 className="text-title">
              <em> Message from our Directors </em>
            </h4>
          </Col>
        </div>
      </Row>
      <Row>
        {content.map(({ authorInfo, quote, yearWritten }) => (
          <Col md="3" key={authorInfo.name}>
            <Card className="card border-0">
              <div className="text-center">
                <a href={authorInfo.linkedIn} target="_blank" rel="noreferrer">
                  <img src={authorInfo.image.url} alt={authorInfo.name} className="rounded-circle img-fluid team-icon" />
                </a>
              </div>
              <CardBody className="card-body">
                <blockquote className="blockquote text-center mb-0">
                  <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(quote.json) }}></div>
                  <footer className="blockquote-footer">
                    {authorInfo.name}
                    <cite title="Source Title"> {yearWritten} </cite>
                    {authorInfo.linkedIn !== undefined && (
                      <a href={authorInfo.linkedIn} target="_blank">
                        {' '}
                        |{' '}
                        <img
                          width="12"
                          className="linkedin-icon pb-1"
                          src="/icons/linkedin.svg"
                          alt={`${authorInfo.name}'s LinkedIn`}
                        />
                      </a>
                    )}
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        ))}
        <style jsx>{`
          .director-icon {
            max-height: 240px;
          }
          .team-icon {
            width: 80%;
          }
          .linkedin-icon {
            margin-bottom: 3px;
          }
          .team-icon:hover {
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
        `}</style>
      </Row>
    </Section>
  );
}

export default DirectorQuotes;
