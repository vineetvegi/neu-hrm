import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { About } from './About'
import { Layout } from './components/Layout';
import { MenuBar } from './components/MenuBar';
import ProfDev  from './ProfDev';
import { LeadTrain } from './LeadTrain';
import { TeamDev } from './TeamDev';
import { Jumbo } from './components/Jumbo';

class App extends Component {
  render() {
  return (
    <React.Fragment>
    <Router>
    <MenuBar />
    <Layout>
    <Jumbo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/professional" component={ProfDev} />
          <Route path="/leadtrain" component={LeadTrain} />
          <Route path="/teamdev" component={TeamDev} />
          <Route component={NoMatch} />
        </Switch>
    </Layout>
    </Router>
    </React.Fragment>
  );
  }
}

export default App;
