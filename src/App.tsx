import { useRef } from 'react';
import './App.css';
import UseRefHook from './components/UseRefHook';

function App() {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = useRef<HTMLInputElement>(null);

  // <div> reference type
  const divRef = useRef<HTMLDivElement>(null);

  // <button> reference type
  const buttonRef = useRef<HTMLButtonElement>(null);

  // <br /> reference type
  const brRef = useRef<HTMLBRElement>(null);

  // <a> reference type
  const linkRef = useRef<HTMLLinkElement>(null);

  const onButtonClick = () => {
    // strict null checks need us to check if inputEl and current exist.
    // but once current exists, it is of type HTMLInputElement, thus it
    // has the method focus! ✅
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <div className="App">
      { /* in addition, inputEl only can be used with input elements. Yay! */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <UseRefHook />
    </div>
  );
}

export default App;
