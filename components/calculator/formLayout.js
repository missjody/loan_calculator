// import Head from 'next/head'
//allows to do className={styles.classname}
import styles from './formLayout.module.css'
// import Link from 'next/link'

export default function FormLayout({ children }) {
    return (


        <main className={styles.main}>

            {children}

        </main>


    )
}

