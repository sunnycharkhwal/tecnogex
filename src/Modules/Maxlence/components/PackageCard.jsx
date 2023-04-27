import { NavLink } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import * as React from "react";
export const PackageCard = (props) => {
  return (
    <>
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="d-flex">
            <Nav.Item>
              <Nav.Link eventKey="first">mobile 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">mobile 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mobile">mobile 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              mobile 1 <DesktopTab />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              mobile 2 <DesktopTab />
            </Tab.Pane>
            <Tab.Pane eventKey="mobile">
              mobile 3 <DesktopTab />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};

const DesktopTab = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav variant="pills" className="d-flex">
          <Nav.Item>
            <Nav.Link eventKey="first">Desktop 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Desktop 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Desktop">Desktop 3</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="row">
              <div className="col-3">Desktop</div>
              <div className="col-3">PackageCard 1</div>
              <div className="col-3">PackageCard 2</div>
              <div className="col-3">PackageCard 3</div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">Desktop 2</Tab.Pane>
          <Tab.Pane eventKey="Desktop">Desktop 3</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};
