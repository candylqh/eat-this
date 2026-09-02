import { AppProvider, useApp } from './state';
import { Header } from './components/Header';
import { Budget } from './screens/Budget';
import { Suggestion } from './screens/Suggestion';
import { Feasibility } from './screens/Feasibility';
import { Going } from './screens/Going';
import { Declined } from './screens/Declined';
import { Replacement } from './screens/Replacement';
import { Plates } from './screens/Plates';
import { Post } from './screens/Post';
import { AddStall } from './screens/AddStall';
import { Avatar } from './screens/Avatar';

function Screens() {
  const { state, go, restart } = useApp();

  return (
    <div className="app">
      <Header now={state.now} onLogoClick={restart} onAvatarClick={() => go('avatar')} />
      {state.screen === 'budget' && <Budget />}
      {state.screen === 'suggestion' && <Suggestion />}
      {state.screen === 'feasibility' && <Feasibility />}
      {state.screen === 'going' && <Going />}
      {state.screen === 'declined' && <Declined />}
      {state.screen === 'replacement' && <Replacement />}
      {state.screen === 'plates' && <Plates />}
      {state.screen === 'post' && <Post />}
      {state.screen === 'add' && <AddStall />}
      {state.screen === 'avatar' && <Avatar />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Screens />
    </AppProvider>
  );
}
