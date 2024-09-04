import './App.css';
import { firebaseAuth } from './firebase';
import { createUserWithEmailAndPassword, verifyBeforeUpdateEmail } from 'firebase/auth';

function App() {
  async function createUser() {
    const email = 'fake@email.com'
    const password = 'zxcvbn321'
    const user = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    console.log("created user")
  }

  async function verifyAndUpdate() {
    const user = firebaseAuth.currentUser
    console.log(user)
    await verifyBeforeUpdateEmail(user, process.env.REACT_APP_FIREBASE_REAL_EMAIL)
  }

  return (
    <div className="App">
      <button onClick={createUser}>Create user</button>
      <button onClick={verifyAndUpdate}>Verify before update</button>
    </div>
  );
}

export default App;
