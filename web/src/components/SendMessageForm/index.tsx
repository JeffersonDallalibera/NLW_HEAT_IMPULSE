import styles from './styles.module.scss';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';

export function SendMessageForm(){
    const { user, signOut } = useContext(AuthContext)
    const [message, setMessage] = useState('');

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();


        await api.post('messages',{message})

        setMessage('')
        
        console.log(message)
    }


    return(
        <div className = {styles.sendMessageFormWrapper}>
            <button onClick={signOut} className ={styles.signOutButton}>
                <VscSignOut size='32' />
            </button>


            <header className ={styles.userInformation}>
                <div className={styles.userImage}>
                <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name} </strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted  size='16'/>
                    {user?.login}
                </span>
            </header>

            <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
                <label htmlFor='message'>Mensagem
                </label>
                <textarea name="message"
                id="message" 
                placeholder='Qual a sua expectativa para o evento?' 
                onChange={event=> setMessage(event.target.value)} 
                value={message}>
                

                </textarea>

                <button type="submit" >Enviar mensagem</button>
            </form>
        </div>
    )
}