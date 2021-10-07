import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DirectorQuotes from './DirectorQuotes';
import Section from '../section';
import MemberIcon from '../memberIcon';

function Team({ directorQuotes, members, alumni }) {
  return (
    <Section>
      <Container>
        <DirectorQuotes content={directorQuotes} />
      
        {/* E-Board Section */}
        <Row>
          <div className="text-center" >
            <Col md="12">
              <h4 className="text-title text-center">
                <em> E-Board </em>
              </h4>
            </Col>
          </div>

          <Row>
          {members.map((member) => (
            ["External Director", "Community Director", "External Chairman"].includes(member.title) ?
            <MemberIcon
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              linkedIn={member.linkedIn}
            /> : <div></div>
          ))}
          </Row>
        </Row>

        {/* Tech Lead/JDT Leads Section */}
        <Row style={{paddingTop: '50px'}}>
          <div className="text-center" style={{ alignContent: 'center'}} >
            <Col md="12">
              <h4 className="text-title text-center">
                <em> Team Lead </em>
              </h4>
            </Col>
          </div>
          
          <Row>
          {members.map((member) => (
            ["Tech Lead", "Junior Development Team Lead"].includes(member.title) ?
            <MemberIcon
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              linkedIn={member.linkedIn}
            /> : <div></div>
          ))}
          </Row>
        </Row>

        {/* Software Engineer Section */}
        <Row style={{paddingTop: '50px'}}>
          <div className="text-center" style={{ alignContent: 'center'}} >
            <Col md="12">
              <h4 className="text-title text-center">
                <em> Software Engineer </em>
              </h4>
            </Col>
          </div>
          
          <Row>
          {members.map((member) => (
            ["Software Engineer"].includes(member.title) ?
            <MemberIcon
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              linkedIn={member.linkedIn}
            /> : <div></div>
          ))}
          </Row>
        </Row>

        {/* Junior Developers Section */}
        <Row style={{paddingTop: '50px'}}>
          <div className="text-center" style={{ alignContent: 'center'}} >
            <Col md="12">
              <h4 className="text-title text-center">
                <em> Junior Developer </em>
              </h4>
            </Col>
          </div>
          
          <Row>
          {members.map((member) => (
            ["Junior Developer"].includes(member.title) ?
            <MemberIcon
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              linkedIn={member.linkedIn}
            /> : <div></div>
          ))}
          </Row>
        </Row>

        {/* Alumni Section */}
        <Row style={{paddingTop: '50px'}}>
          <div className="text-center" style={{ alignContent: 'center'}} >
            <Col md="12">
              <h4 className="text-title text-center">
                <em> Alumni </em>
              </h4>
            </Col>
          </div>
          
          <Row>
          {alumni.map((member) => (
            <MemberIcon
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              linkedIn={member.linkedIn}
            />
          ))}
          </Row>
        </Row>
      </Container>
    </Section>
  );
}

export default Team;
