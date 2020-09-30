// import Head from 'next/head'
//allows to do className={styles.classname}
import styles from '../components/formLayout.module.css'
// import Link from 'next/link'

export default function FormLayout({ children }) {
    return (


        <main className={styles.main}>

            {children}

        </main>


    )
}

