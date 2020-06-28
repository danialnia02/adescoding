import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import DataViewer from './components/DataViewer/DataViewer'
import ResultViewer from './components/ResultViewer/ResultViewer'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <IonTabs>
        <IonRouterOutlet>
          <IonTabBar>

            <IonTabButton>
              <Route path="/DataViewer" component={DataViewer} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/DataViewer" />} />
            </IonTabButton>

            <IonTabButton>
              <Route path="/ResultViewer" component={ResultViewer} exact={true} />
            </IonTabButton>

          </IonTabBar>
        </IonRouterOutlet>

      </IonTabs> */}
      
      <IonTabs>
        <IonRouterOutlet>
        <Route path="/DataViewer" component={DataViewer} exact={true} />        
        <Route path="/ResultViewer" component={ResultViewer} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/DataViewer" />} />
        </IonRouterOutlet>
        <IonTabBar slot="top">
          {/* <IonTabButton tab="DataViewer" href="/DataViewer">
            <IonLabel> DataViewer</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ResultViewer" href="/ResultViewer">
            <IonLabel> ResultViewer</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
