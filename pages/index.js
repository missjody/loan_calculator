import Head from 'next/head'

import styles from '../styles/Home.module.css'
//allows to do className={styles.classname}

// import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loan Payment Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* loan calculator title*/}
          Loan Payment Calculator
        </h1>

        <p className={styles.description}>
          {/* loan calculator intro */}
          <h5>Calculate your estimated monthly loan payment by entering the loan information below.</h5>
        </p>

        {/* form */}

        <form>
          <select className="custom-select" id="loanProduct">
            <option selected>Choose your loan product</option>
            <option value="New">New Auto (2017 & newer)</option>
            <option value="Used">Used Auto (2010 - 2016)</option>
          </select>

          <select className="custom-select" id="loanTerm">
            <option selected>Choose your loan term</option>
            <option value="60">60 months</option>
            <option value="72">72 months</option>
            <option value="84">84 months</option>
          </select>

          <select className="custom-select" id="score">
            <option selected>Do you know your credit score</option>
            <option value="APlus">Excellent (740 & above)</option>
            <option value="A">Great (690-739)</option>
            <option value="B">Good (660-689)</option>
            <option value="C">Fair (620-659)</option>
            <option value="D">Ok (619 & Below)</option>
          </select>

          <input type="number" className="form-control" id="loanAmt"
            placeholder="Enter desired loan amount from $500 to $65,000">
          </input>
        </form>

        <div>
          <h5 id="monthlyPayment"></h5>
        </div>

      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  )
}
