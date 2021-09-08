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
          <Row>
            <div className="text-center" >
              <Col md="12">
                <h4 className="text-title text-center">
                  <em> E-Board Members </em>
                </h4>
              </Col>
            </div>
          </Row>

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
        <Row>
          <Row>
            <div className="text-center" style={{ alignContent: 'center'}} >
              <Col md="12">
                <h4 className="text-title text-center">
                  <em> Team Lead </em>
                </h4>
              </Col>
            </div>
          </Row>
          
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
        <Row>
          <Row>
            <div className="text-center" style={{ alignContent: 'center'}} >
              <Col md="12">
                <h4 className="text-title text-center">
                  <em> Software Engineer </em>
                </h4>
              </Col>
            </div>
          </Row>
          
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
        <Row>
          <Row>
            <div className="text-center" style={{ alignContent: 'center'}} >
              <Col md="12">
                <h4 className="text-title text-center">
                  <em> Junior Developer </em>
                </h4>
              </Col>
            </div>
          </Row>
          
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


        <h2 className="p-5 m-3 center"> Alumni </h2>
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
      </Container>
    </Section>
  );
}

export default Team;
