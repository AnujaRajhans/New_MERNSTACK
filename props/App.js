import logo from './logo.svg';
import './App.css';
import ButtonLayout from './components/ButtonLayout';
import TextProps from './components/TextProps';
import ProfileUser from './components/ProfileUser';

function App() {
  const User={name: 'John'};
  return (
    <>
    <h1 className="hello">React JS</h1>
  <ButtonLayout data="LOGIN"></ButtonLayout>
  <TextProps user={User}> </TextProps>
  <ProfileUser user={User}></ProfileUser>
    </>
  );
}

export default App;
