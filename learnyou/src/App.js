import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import None from "./pages/None";
import ScrollToTop from "./components/STT";

const App = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col xs={12}>
            <Router>
              <ScrollToTop />
              <Menu />
              <div style={{ paddingTop: "3.5rem" }}>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/about" component={About} exact />
                  <Route path="*" component={None} />
                </Switch>
              </div>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
