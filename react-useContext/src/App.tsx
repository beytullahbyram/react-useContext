
import './App.css';
import { Page } from './pages/Page';


export default function App() {
  return (
    <>
      <h3>Very slow "Page" component - click on expand/collapse to toggle nav</h3>
      <p>Those components that use only API won't re-render on nav expand/collapse anymore</p>
      <Page />
    </>
  );
}
