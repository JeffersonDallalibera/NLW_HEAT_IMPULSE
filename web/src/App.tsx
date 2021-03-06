import { useContext } from 'react';
import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';

import { Messagelist } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';

export function App() {
  const {user} = useContext(AuthContext) 

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
        <Messagelist />
        { !!user ? <SendMessageForm/> : <LoginBox /> }
    </main>
  )
}


